---
title: "Understanding MEV"
ogImage:
  url: "/assets/cypherskate/cs5.webp"
---

<p align="center">
<img src="/assets/cypherskate/cs3.webp" align="center" style="border: 0px transparent solid;border-radius: 45px; "/>
</p>

<br>

**MEV refers to the "Maximum Extractable Value", <a href="https://arxiv.org/abs/1904.05234" target="_blank">an economic phenomenon</a> representing profit opportunities arising from on-chain transactions.**


For example, a large swap on a DEX can cause token prices in a pool to fluctuate. Traders might explore the price difference in another pool to generate a positive surplus, and such arbitrage opportunities are considered MEV.

In general, **arbitrage is an example of healthy MEV**, as finding better quotes is vital in a free market and benefits the end user.

On the other hand, toxic-MEV can be harmful. For example, when users trade with high slippage and/or are unaware of **sandwich attacks** or when the **network is congested due to heavy sniping**.



<br>

<p align="center">
  <img src="/assets/pages/MEV.png" align="center" style="border: 1px transparent solid; border-radius: 45px; "/>
</p>

<br>

---

## Urani's Approach 

<br>

Urani addresses toxic-MEV minimization at the application layer by:

<p align="center">
  <img src="/assets/blog/preview/approach.png" align="center" style="border: 1px transparent solid; border-radius: 45px; "/>
</p>


<br>

Additionally, we coined the term "MEV agents" to distinguish "healthy" bots from toxic-MEV bots. We refer to the humans behind these bots as "MEV agent operators". At Urani, they are as important as any other actor in the supply chain.



---

## Learn more about MEV

<br>

➡️ More information on how Urani helps minimize toxic-MEV is available in <strong><a href="https://docs.urani.trade/urani-labs/mev-on-solana" target="_blank">our docs</a></strong>.<br>
➡️ Visualize sandwich attacks on Solana with <strong><a href="https://sandwiched.me/" target="_blank">sandwiched.me</a></strong> and on Ethereum with <strong><a href="https://eigenphi.io/">Eigenphi</a></strong>.<br>
➡️ To explore MEV and fee markets on Solana, check out <strong><a href="https://github.com/urani-labs/solana-mev-literature" target="_blank">our curated library</a></strong>.<br>
➡️ To delve deeper into MEV in general, explore <strong><a href="https://github.com/go-outside-labs/mev-toolkit" target="_blank">Go Outside's toolkit</a></strong>
