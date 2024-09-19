---
title: "A Midsummer Neo-Cypherpunk's Dream"
excerpt: "Learn what's next for Urani, how Vitalik is embracing bt3gl's neo-cypherpunk movement, and why we will always go for positive-sum e-games. Always."
coverImage: "/assets/space/1.webp"
date: "2024-06-01T11:11:11.322ZZ"
author:
  name: by bt3gl
  picture: "/assets/blog/authors/mia.jpeg"
ogImage:
  url: "/assets/space/1.webp"
---

<br>

## We dropped in, and it was _sick_

<br>

#### Oh, humans, it has been a couple of intense and incredible months since we started...

Right after our <b><a href="https://www.urani.trade/blog/hello-world" target="_blank">debut post in April</a></b>, Urani won first place in the <b><a href="https://x.com/ColosseumOrg/status/1787468985929212264" target="_blank">Colosseum's DeFi track</a></b>.

Because we care about understanding what the ecosystem needs and building with a grassroots mentality, we decided not to fundraise immediately. Instead, we joined <b><a href="https://www.colosseum.org/accelerator" target="_blank">Solana's Colosseum Accelerator</a></b> to allow the foundation to provide us with input.

<br>

---

## We are building surplus, and we're doing it in public

<br>

<div class="quote-box"> 
We are here for innovation. We are building an entirely new technology from scratch that can change how orderflow auctions are seen and conducted - while insisting on nothing less than positive-sum e-games. Always.
</div>

<br>

At Urani, **we recognize the awesomeness of being an MEV agent operator**: a hacker who possesses DeFi and advanced algorithm expertise and is extremely valuable to the ecosystem as they find optimal solutions to access liquidity. 

Our goal is to treat these agent operators the way they deserve: <b>✨like stars✨</b>. This means **no KYC, no bond, and lots of rewards and economic incentives**. 

So, we are building an entire novel protocol for MEV minimization (internalizing it into price improvements) for hackers to play with:

➡ <b><a href="https://docs.urani.trade/urani-swap/overview" target="_blank">Urani Swap</a></b> (led by <b><a href="https://github.com/EulerianNutation" target="_blank">Bryan</a></b>) is the front interface and SDK that allows users and other protocols to submit order intents, converting them into Solana-native data structures for consumption by the Urani Protocol. 

➡ <b><a href="https://docs.urani.trade/urani-arena/urani-arena-overview" target="_blank">Urani Arena</a></b> (led by <b><a href="https://github.com/zxSage" target="_blank">Sage</a></b>) is a <i>real-time</i> visual infrastructure for player-versus-player batch competition and peer-to-peer matches. It's designed to provide several strategies to ensure operators from all backgrounds have opportunities to succeed, thus commoditizing MEV agent operators and and engaging their fans (being a commodity is good, it gives you leverage).

➡ <b><a href="https://docs.urani.trade/urani-protocol/urani-protocol-overview" target="_blank">Urani Protocol</a></b> (led by <b><a href="https://github.com/von-steinkirch" target="_blank">bt3gl</a></b>) is a novel orderbook conducting a competition among MEV agent operators to benefit liquidity providers and users through:

1️⃣ Collecting <b><a href="https://docs.urani.trade/urani-swap/technical-considerations/uranis-intents" target="_blank">order intents</a></b>, <br>
2️⃣ Placing them into <b><a href="https://docs.urani.trade/urani-swap/technical-considerations/batch-auctions" target="_blank">batches</a></b>, <br>
3️⃣ Assigning the batches to <b><a href="https://docs.urani.trade/mev-agents/agents" target="_blank">operators</a></b>, <br>
4️⃣ <b><a href="https://docs.urani.trade/urani-protocol/technical-considerations/raking-the-agents-solution" target="_blank">Ranking</a></b> the solutions from each agents, <br>
5️⃣ Ensuring the orders from the winning solutions are <b><a href="https://docs.urani.trade/urani-protocol/technical-considerations/order-execution" target="_blank">settled</a></b>, and <br>
6️⃣ <b><a href="https://docs.urani.trade/mev-agents/operator-onboarding/economic-incentives" target="_blank">Rewarding</a></b> operators and users from the generated surplus.

➡ <b><a href="https://www.urani.trade/mev-agent-templates" target="_blank">MEV Agent templates</a></b> (led by <b><a href="https://github.com/von-steinkirch" target="_blank">bt3gl</a></b>) are plug-and-play bots for the Urani protocol, allowing hackers to plug in their favorite private strategies and start playing player-versus-player e-games right away. Advanced strategies and AI-centric agents are continuously researched and developed in our labs. Additionally, we have in-house agents for gauging and fallback mechanisms.

<br>

---

## We are solving the price-finding routing problem

<br>

One of the most innovative parts of our protocol is how we address the price-finding routing problem, modeled as a **multidimensional network comprising P2P and ring matches** (_i.e._, through the discovery of directed acyclic graphs in trades), AMMs, DEXs, LPs, or liquidity sources, where the utility function (Ω) of the net trade is maximized.

<br>

<div class="quote-box"> 
A <b><a href="https://docs.urani.trade/urani-protocol/technical-considerations/optimization#the-utility-function-o" target="_blank">Utility Function (Ω)</a></b> function encodes a quantity that is desired to be maximized under given constraints. 
</div>

<br>

In a vanilla setup, the problem could initially be represented as an undirected graph where the nodes correspond to tokens and the edges represent the exchange rates between them. 

However, this representation is unrealistic due to reality's complexity (for instance, three-pools or multiple CFMMs could not be incorporated).

A more intuitive representation of a DeFi network is a hypergraph, where edges can connect multiple vertices. Interestingly, routing (arbitrage, swaps, etc.) over a hypergraph can usually become a <b><a href="https://reference.wolfram.com/language/guide/ConvexOptimization.html" target="_blank">convex optimization problem</b></a> (meaning it could be efficiently solved to achieve _global optimality_).


<br>

<div class="quote-box"> 
<strong>Urani's approach, by design, can provide the best quotes a trade can ever have once it achieves network effects, removing intrinsic swap fees and slippage. 
  
Additionally, it can enable secure exchanges between individual swappers, protecting against toxic forms of MEV.
</strong>
</div>

<br>
<br>

---

## We are choosing the third way, always

<br>

We have so many ideas about what the future could be like!

**We think there is a way for everyone who builds to be part of a new, fun reality. What if we all focus on what we can do the best? Can we all win? We believe so.**

We are here to create surplus, not wars. Many of us are vegetarians, and <b><a href="https://www.skatersvscows.fun/" target="_blank">we would rather play with cows!</a></b> We'll continue building towards positive-sum e-games. Always.

<br>

<div class="quote-box"> 
Our CEO, <b><a href="https://github.com/von-steinkirch" target="_blank">bt3gl</a></b>, coined the term "neo-cypherpunk" a few years ago in her work at <b><a href="https://github.com/go-outside-labs/neo-cypherpunk-toolkit" target="_blank">Go Outside Labs</a></b> (one of the foundations for what Urani stands for, as <b><a href="https://www.urani.trade/values" target="_blank">ownership, privacy, and meritocracy are some of our core values</a></b>).

Interestingly, <b><a href="https://vitalik.eth.limo/general/2024/05/29/l2culture.html" target="_blank">other cool cats</a></b> are embracing the movement. Can we envision a future where every technical island autonomously and seamlessly connects with each other?

</div>

<br>

---

## What's next

<br>

Planning around the Colosseum program made sense, as it can foster _true meritocracy_ among our fellow builders. Therefore, the alpha (v1) version of Urani's Protocol, Swap, and Arena will be demoed during the last week of the program. 


To accelerate the building process (and yes, we love this part), our team will be on our first off-site in June. These weeks will fly by, and we will be back *on the grid* soon!


On 2025, we will begin onboarding MEV agent operators to the protocol with bunch of cool updates. That's when the MEV games begin.

<br>


### If you're in the Northern Hemisphere, happy (almost) Summer. Otherwise, winter is coming, anon.
