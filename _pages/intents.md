---
title: "Orderflows and Intents"
ogImage:
  url: "/assets/cypherskate/cs5.webp"
---

<p align="center">
<img src="/assets/cypherskate/cs5.webp" align="center" style="border: 0px transparent solid;border-radius: 45px; "/>
</p>

<br>

In the context of decentralized finance, an **intent** is an abstract concept up to protocols to define what they mean in the code. 

In general, they are a type of <b>orderflow auction mechanism</b> employed to help mitigate the negative externalities associated with toxic-MEV, such as <b><a href="https://sandwiched.me/" target="_blank">high slippage from sandwich attacks</a></b>.

Intents can be seen as a piece of data binding programmatic commitments to a user's request, representing <i><b>what a user wants to achieve when interacting with a protocol</b></i>. 

Moreover, they can incentivize a <b>healthy free market</b> and allow users to capture the value they create.

<br>

---

## How Urani&apos;s Intents Work on Solana

<br>

<b>Urani has pioneered the first implementation of intents on Solana. </b>

In our programming model, intents initially appear as a `JSON` dictionary structure, specifying data such as the asset pair, amount to trade, and expiration. However, internally, they are converted to Solana's native data types (PDAs).</b> 

Users submit a signed "intent to trade" message instead of directly submitting a trade, allowing the Urani Protocol to execute the trade on the user's behalf.

The Urani Protocol then aggregates these intents into discrete batch auctions (rather than processing orders on a first-come, first-served basis - Solana's native method) and <strong>assigns them to <a href="https://docs.urani.trade/mev-agents/agents" target="_blank">MEV Agents</a></strong>. 

Once the batch period ends, the optimal execution for each order is settled on-chain.

<br>

<div class="flex justify-center">
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">✨ 𝗢𝗿𝗱𝗲𝗿𝗳𝗹𝗼𝘄𝘀, 𝗜𝗻𝘁𝗲𝗻𝘁𝘀, 𝗥𝗙𝗤𝘀 → 𝗔 𝗹𝗶𝘁𝗲 𝘁𝗵𝗿𝗲𝗮𝗱 ✨<br><br>Intents have been a buzzword in DeFi, but they do convey an appropriate concept. Let&#39;s dive in! 🧵 <a href="https://t.co/JWWyXfrPwR">pic.twitter.com/JWWyXfrPwR</a></p>&mdash; URANI (@urani_labs) <a href="https://twitter.com/urani_labs/status/1807389303611203707?ref_src=twsrc%5Etfw">June 30, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
</div>

<br>

---

## Benefits of Urani&apos;s Intents

<br>

➡️ <strong>Lower transaction costs and fewer failed transactions:</strong> Intents can‌ reduce fees and transaction costs by processing transactions in batches.<br>
➡️ <strong>Less network congestion:</strong> Batches are not only protected from sniping bots but can also be matched off-chain.<br>
➡️ <strong>Improved price discovery:</strong> Order batches facilitate better price discovery since MEV agents are competing for the best execution prices.<br>
➡️ <strong>Less backrunning:</strong> Optimal trade paths are chosen by design.<br>
➡️ <strong>Fairness:</strong> Intents can promote a more equitable trading environment, mitigating the advantages of participants with information asymmetry.<br>
➡️ <strong>Enhanced/deep liquidity:</strong> Intents allow order fulfillment from a large amount of liquidity sources. Plus, safer trades for low-cap illiquid tokens.<br>
➡️ <strong>Possibility for P2P and ring matches:</strong> Once the system reaches network effects, these types of matches bring the best quote possible since there are no intrinsic swap fees, slipage, or toxic-MEV.

<br>

---

## Urani&apos;s Intents vs. "Request for Quotes" (RFQ)

<br>

In traditional finance, <b>RFQ is a method used to trade securities</b>. When a trader wants to buy or sell an asset, they can send an RFQ to multiple dealers or market makers to get quotes for the desired transaction.

Here is a high-level explanation of how RQFs work:

1️⃣ The investor specifies the details of the trade they want to execute (e.g., the type and quantity of the asset they want to buy or sell, and any specific terms or conditions).<br>
2️⃣ The RFQ is sent to dealers or market makers, who respond with quotes that include the price at which they're willing to buy (bid) or sell (ask) the asset, trade size, and expiration time.<br>
3️⃣ The investor reviews the quotes and decides which one to accept, negotiate further, or decline.

<br>

<div class="quote-box"> 
<b>Although RFQs and intents operate similarly and are often interchangeable, Urani's intent model differs fundamentally in its direction, democratization of surplus, and focus on MEV agents.</b>
</div>

<br>
<br>

---

## Learn more about Urani&apos;s Intents

<br>

Check out our <strong><a href="https://docs.urani.trade/urani-swap/technical-considerations/uranis-intents" target="_blank">official documentation</strong></a>.

<br>
