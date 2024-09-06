---
title: "Building a Limit Order Ingestion on Solana"
excerpt: "Building the Swap part of Urani's limit order was an interesting conceptual and technical challenge. Here are some notes on our developed solution."
coverImage: "/assets/space/3.webp"
date: "2024-06-15T11:11:11.322ZZ"
author:
  name: by Team Swap
  picture: "/assets/blog/authors/logo-swap.png"
ogImage:
  url: "/assets/space/3.webp"
---

## TL; DR

<br>

In this post, we go through our journey to determine the best way to receive transaction intents to be sent to our protocol: <strong>a combination of durable nonces, PDAs, and a crafted transaction with the order data</strong>.

<br>

---

## Challenge and constraints

<br>

What are our requirements for the first iteration of how Urani ingests limit orders for intents?

First, we knew that:

1️⃣ <b>the implementation needs to give users the best experience</b>, and <br>
2️⃣ <b>the protocol expects certain information to be submitted by these intents to the protocol and the agents</b>.

Plus:

➡️ <b>The user submits an order intent that can be fulfilled at a later point in time.<br>
➡️ The protocol must store data related to the user's order intent in a specific format on a dedicated account for later use.<br>
➡️ The program needs to call instructions on other programs to complete the order flow.</b>

No single technique allows us to achieve all that; rather, it requires combining techniques, starting with a <strong>durable nonce</strong>.

In these examples, we'll use Typescript and Solana's `web3.js`. We won't dive into Rust programs today.

We note that, in many instances, much of the online documentation (including official documents) was outdated or incomplete. This post includes contributions that, to the best of our knowledge, are the most up-to-date.

<br>

---

## The durable nonce

<br>

Suppose you sign a transaction that transfers `2 SOL` from your account to your friend's account. What stops the program from repeatedly using this same signature to withdraw `2 SOL`?

According to the <b>[Solana's official documentation](https://solana.com/developers/guides/advanced/introduction-to-durable-nonces#double-spend):</b>

<blockquote class="quote-box">
The network could check all past transactions to see if any other transactions were already submitted with the same signature.

However, as the number of transactions grows, that becomes increasingly costly (computation-wise) and more time-consuming to do.

</blockquote>

This is when the concept of "latest blockhash" comes in:

<blockquote class="quote-box">
  <p><strong>Solution: Crosscheck signatures within only a set period of recent time, and discard the transaction if it gets "too" old.</strong></p>

<p>Recent Blockhashes are used to achieve this. A blockhash contains a 32-bytes SHA-256 hash. It is used to indicate when a client last observed the ledger. Using recent blockhashes, transactions are checked in the last 150 blocks. If they are found, they are rejected. They are also rejected if they get older than 150 blocks. The only case they are accepted is if they are unique and the blockhash is more recent than 150 blocks (~80-90 seconds).</p>
</blockquote>

<br>

<strong>What if you need to submit your transaction later, for example, in a scheduled order?</strong>

Urani's agents can pick up limit orders and fulfill them immediately. However, depending on several factors (e.g., price, network congestion, agent concurrency), the order may only be fulfilled at a much later time.

Solana's solution for this use case has a name and a surname: <strong>durable nonces</strong>. They have a few key ingredients:

➡️ A nonce account<br>
➡️ A nonce authority account to take control of its funds<br>
➡️ A different way of assigning nonces to a transaction<br>
➡️ The gotcha: the first instruction of the transaction

Let's break those down one by one.

<br>

### Nonce account

Nonce accounts according to the <strong>[Solana documentation](https://solana.com/developers/guides/advanced/introduction-to-durable-nonces#nonce-authority)</strong>:

<blockquote class="quote-box">
  <p>The account that stores the value of the nonce. This account is owned by the SystemProgram and is rent-exempt; thus needs to maintain the minimum balance for rent exemption (around 0.0015 SOL).</p>
</blockquote>

<br>

### Nonce authority account

And the piece on nonce authority account <strong>[Solana documentation](https://solana.com/developers/guides/advanced/introduction-to-durable-nonces#nonce-authority)</strong>:

<blockquote class="quote-box">
  <p>Nonce authority is the account that controls the Nonce Account. It has the authority to generate a new nonce, advance the nonce or withdraw SOL from the Nonce Account. By default, the account that creates the Nonce Account is delegated as the Nonce Authority, but it's possible to transfer the authority onto a keypair account or a PDA.</p>
</blockquote>

<br>

### Creating the nonce account pair

<br>

This is how they translate to code:

<p align="center">
  <img src="/assets/blog/preview/transaction_2.png" align="center" style="border: 1px transparent solid; border-radius: 45px; "/>
</p>

<br>

A few things worth noticing in this transaction:

1️⃣ Both the nonce account and the nonce authority account are only regular keypairs created on the spot.<br>
2️⃣ The nonce account has to be created with a certain amount of lamports to be rent-free and stay in the network. In this case, the user is paying for this fee.<br>
3️⃣ `createNonceAccount` both create and initialize the nonce account. This process can be done in a few different ways, but this is the most straightforward of them.<br>
4️⃣ The `nonceAccount` we retrieved at the end has the nonce authority account's public key and the nonce itself.<br>
5️⃣ We had to get the latest blockhash and assign it to the transaction. We won't have to do that anymore from now on.

<br>

<br>

### Assigning the nonce to a transaction

<br>

<strong>To be able to utilize the durable nonces in a transaction, we need a different format than when specifying the blockhash.</strong>

For the transaction to have them to be executed, their very first instruction has to be one that advances the nonce to the latest blockhash.

After that, we can line up other instructions to do whatever else we need. This can be done in the following way:

<p align="center">
  <img src="/assets/blog/preview/transaction_1.png" align="center" style="border: 1px transparent solid; border-radius: 45px; "/>
</p>

<br>

We're no longer using the `recentBlockhash` and `lastValidBlockHeight` fields in this transaction. Rather, we pass a `nonceInfo` object with the `nonce` taken from our `nonceAccunt` and this first instruction we just created. This will advance the nonce to the latest block.

When using the recent blockhash, a common issue is that the transaction takes so long to be confirmed, that the network goes beyond the 150 blocks threshold and the blockhash included in the transaction is no longer valid. But by using a durable nonce, we don't suffer from that issue.

<br>

---

## PDAs

<br>

Program Derived Addresses are an essential block to building Solana applications. There are many interesting use cases and particularities of PDAs but, for this article, we'll focus on our own use case.

PDAs enable our program to do three important things:

➡️ Consistently find accounts tied to our program for each of our users.<br>
➡️ Store program-relate state in the form of hashmaps.<br>
➡️ Allow our program to call other programs in the Solana network.<br>

Since the agents will be picking up orders and working on them, our program needs to be able to call other programs when needed. That is, it needs to perform a Cross-Program Invocation, aka CPI. PDAs are important to CPIs, as they allow the program to sign for an instruction to be executed on a second program on behalf of the PDA.

By leveraging this method of deterministically finding the PDA's address based on the same inputs, we don't need to keep track of specific account addresses. That's why PDAs aren't _created_; they are **found** based on the same inputs every time we need them.

Here we're using the method `findProgramAddressSync` to find a PDA with the user's `publicKey` and the string `"orders"` as seeds.

<p align="center">
  <img src="/assets/blog/preview/transaction_4.png" align="center" style="border: 1px transparent solid; border-radius: 45px; "/>
</p>

Note that we get two pieces of information here: the address of the PDA and a `bump`.

This bump is there because PDAs are not a regular keypair: there's only a public key for it, but not a corresponding private key.

The bump then is a number between 255 and 0 that is used to "force" the public key derived from the seeds (the first argument to `findProgramAddressSync`) and the program ID to fall off the Ed25519 cryptographic curve and not have a corresponding private key. To be more specific `findProgramAddressSync` tries to find the first number in that range (starting from 255) that forces the fall off the curve, and once it does, it returns this value.

Since the account derivation is deterministic, the `bump` will always be the same for the same inputs to the function. We also need to keep track of this `bump` for security reasons. Without the bump, the address is incomplete, and we don't know how to reproduce this PDA. By sending both to our program, it can independently verify the correctness of this address.

<br>

---

## Crafting the final transaction

<br>

With this foundation in place, we can combine the resilience of durable nonces and the power of PDAs to craft a transaction that calls programs in the protocol in the exact way we need:

<p align="center">
  <img src="/assets/blog/preview/transaction_3.png" align="center" style="border: 1px transparent solid; border-radius: 45px; "/>
</p>

<br>

The Solana program will receive our `JSON`-stringified payload, with all the relevant order information, and we're passing all the relevant accounts (like the user's public key and the PDA) to the program in the `keys` field, which represent the `AccountsMeta` of a transaction.

<br>

<p align="center">
  <img src="/assets/blog/preview/tx_flow.png" align="center" style="border: 1px transparent solid; border-radius: 45px; "/>
</p>

<br>


And we're done! Now it's off to the Solana program to fulfill those orders.

<br>

---

## Conclusion

<br>

The Solana ecosystem is vibrant, with many undiscovered pathways. Building on blockchains is a marathon, not a sprint, and we are ready for it. 🫡

<br>

### Stay safe, and we hope you enjoyed this ride, anon.
