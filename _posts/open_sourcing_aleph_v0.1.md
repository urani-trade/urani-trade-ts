---
title: "Open-Sourcing Aleph v0.1"
excerpt: "Our first template for MEV agent is out. Learn how Aleph works and how you can deploy it on your machine."
coverImage: "/assets/space/6.webp"
date: "2024-08-19T16:24:11.322ZZ"
author:
  name: by Team Agents
  picture: "/assets/blog/authors/logo-agents.png"
ogImage:
  url: "/assets/space/6.webp"
---

<br>

Today, we open-source our first in-house MEV Agent, **[Aleph (v0.1)](https://github.com/urani-trade/solana-mev-agent-py)**. 

This post briefly explains how Aleph works within the Urani Protocol.

</strong>
</div>

<br>

----

## Introduction to MEV Agents

<br>

At Urani, MEV Agents are *good* arbitrage bots intended to fetch batches of user intents from Urani's Protocol orderbook.

Once an agent has ingested the user's intents, it leverages its private strategy to maximize the orders' surplus.

The Urani Protocol then ranks the solutions provided by the different agents, submits the optimal solution to the chain, and rewards the top-performing agent.

If you want to know more about the  Urani Protocol and how Agents compete, take a look at our **[documentation](https://docs.urani.trade/urani-protocol/urani-protocol-overview)**.

<br>

---

## Aleph's Workflow and Strategy

<br>
<p align="center">
  <img src="/assets/agents/aleph_logo.webp" align="center" style="border: 1px transparent solid; border-radius: 45px; width: 40%;"/>
</p>

In this first version (v0.1), Aleph runs the following algorithm:

<br>

<div class="quote-box"> 
<strong>
1️⃣ Listen and fetch for incoming batches.<br>
2️⃣ Parse these batches to extract the order intents.<br>
3️⃣ Check for peer-to-peer matches among the intents.<br>
4️⃣ Spin a new thread for each intent to calculate solutions for best quotes through arbitrage in different liquidity sources.<br>
5️⃣ Pack the solutions and send them to the protocol.<br>
</strong>
</div>

<br>

Steps 1️⃣,2️⃣, and 5️⃣ are performed in the `AgentBase` class, i.e., are shared among all agents:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Agents-Entrypoint.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

<br>

Whereas steps 3️⃣, and 4️⃣ are performed differently for each agent:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Solve-Order.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

**Note:** Each agent is a `NameofAgent` derived class of `AgentBase`. This would help each user just to pull in their preferred strategies.

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Aleph-Class.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>


<br>

----

## Details

<br>

Let's get a more detailed look at how these steps are performed.

<br>

#### 1️⃣ Listen and fetch incoming batches

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Parse-Batch.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Get-Batch.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

<br>


#### 2️⃣ Extract the order intents

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Parse-Intents.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

<br>

#### 3️⃣ Check for peer-to-peer matches among the intents
Aleph leverages a 1-hop search for P2P matches and then selects the optimal set of coinciding intents based on the overall generated surplus:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Aleph-P2P-Strategy.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

The 1-hop search is performed in the `LevelOne` class. The standard Urani class for 1-hop P2P matches: 
<p align="center">
  <img src="/assets/blog/aleph_v0.1/P2P.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

Where we check that the intents fully match:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Both-Fillable.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>
<br>


#### 4️⃣ Spin a new thread for each intent to calculate solutions for best quotes through arbitrage in different liquidity sources

Intents that are not P2P-matched pass through Aleph's routing strategy:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Aleph-Routing-Strategy.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

As a first example of arbitrage, Aleph sends parallel requests to **[Jupiter](https://station.jup.ag/)** for quotes. 

These quotes help determine routes in Automated Market Makers (AMMs) to achieve the desired token amount:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/Get-Jupiter-Quotes.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

<br>

#### 5️⃣ Pack the solutions and send them to the protocol
<p align="center">
  <img src="/assets/blog/aleph_v0.1/Post-Solution.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

<br>

----

## How to use Aleph

<br>

Below are general guidelines for the process. Feel free to check Aleph's **[README.md](https://github.com/urani-trade/solana-mev-agent-py/blob/main/README.md)** file for more details.

<br>


### Setting Aleph up

1. **Create and configure `.env` file**:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/env.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

2. **Install the CLI** with:
<div style="
    font-family: 'Courier New', Courier, monospace;
    background-color: #2d2d2f;
    color: #f8f8f2;
    padding: 1.5rem;
    border-radius: 1.5rem;
    font-style: normal;
    border: 1px solid #444;
    max-width: 96.5%;  /* Set a max width as a percentage of the container */
    margin: 0 auto;  /* Centers the box */
">
  <span style="color: #8be9fd;">root@localhost</span>:<span style="color: #50fa7b;">~</span>$ make install
</div>
<br>

3. **Test the installation** with: 
<div style="
    font-family: 'Courier New', Courier, monospace;
    background-color: #2d2d2f;
    color: #f8f8f2;
    padding: 1.5rem;
    border-radius: 1.5rem;
    font-style: normal;
    border: 1px solid #444;
    max-width: 96.5%;  /* Set a max width as a percentage of the container */
    margin: 0 auto;  /* Centers the box */
">
  <span style="color: #8be9fd;">root@localhost</span>:<span style="color: #50fa7b;">~</span>$ poetry run pytest
</div>
<br>

4. **Get CLI Commands Informations** through:
<div style="
    font-family: 'Courier New', Courier, monospace;
    background-color: #2d2d2f;
    color: #f8f8f2;
    padding: 1.5rem;
    border-radius: 1.5rem;
    font-style: normal;
    border: 1px solid #444;
    max-width: 96.5%;  /* Set a max width as a percentage of the container */
    margin: 0 auto;  /* Centers the box */
">
  <span style="color: #8be9fd;">root@localhost</span>:<span style="color: #50fa7b;">~</span>$ poetry run mcli -h
</div>


<p align="center">
  <img src="/assets/blog/aleph_v0.1/CLI--h.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

---

## Usage

<br>


Aleph interacts with a local server that mimics Urani's protocol orderbook. Here's how to get started:


1. **Start the Local Server**

   Initialize the local server with:
<div style="
    font-family: 'Courier New', Courier, monospace;
    background-color: #2d2d2f;
    color: #f8f8f2;
    padding: 1.5rem;
    border-radius: 1.5rem;
    font-style: normal;
    border: 1px solid #444;
    max-width: 96.5%;  /* Set a max width as a percentage of the container */
    margin: 0 auto;  /* Centers the box */
">
  <span style="color: #8be9fd;">root@localhost</span>:<span style="color: #50fa7b;">~</span>$ poetry run start_server
</div>


Access the server at `http://127.0.0.1:8000`:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/home.jpg" align="center" style="border: 1px transparent solid; border-radius: 45px;  max-width: 96.5%;"/>
</p>

<br>

2. **Deploy Aleph**

Run Aleph using the CLI with the `--deploy` or `-d` flag:

   <div style="
    font-family: 'Courier New', Courier, monospace;
    background-color: #2d2d2f;
    color: #f8f8f2;
    padding: 1.5rem;
    border-radius: 1.5rem;
    font-style: normal;
    border: 1px solid #444;
    max-width: 96.5%;  /* Set a max width as a percentage of the container */
    margin: 0 auto;  /* Centers the box */
">
  <span style="color: #8be9fd;">root@localhost</span>:<span style="color: #50fa7b;">~</span>$ poetry run mcli -d aleph
</div>

You’ll see output indicating that Aleph is running and waiting for a valid batch to be posted on the orderbook:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/CLI-Aleph-1.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

Aleph is waiting because no batches have yet been posted in the Urani orderbook at `http://127.0.0.1:8000/batches`:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/empty_batches.jpg" align="center" style="border: 1px transparent solid; border-radius: 45px; max-width: 96.5%;"/>
</p>

<br>

3. **Post a Batch**

   Open a new terminal window, navigate to the `orders_templates` folder, and post a batch with:
<div style="
    font-family: 'Courier New', Courier, monospace;
    background-color: #2d2d2f;
    color: #f8f8f2;
    padding: 1.5rem;
    border-radius: 1.5rem;
    font-style: normal;
    border: 1px solid #444;
    max-width: 96.5%;  /* Set a max width as a percentage of the container */
    margin: 0 auto;  /* Centers the box */
">
  <span style="color: #8be9fd;">root@localhost</span>:<span style="color: #50fa7b;">~</span>$ curl -X POST "http://127.0.0.1:8000/batches" -H "Content-Type: application/json" -d @example_batch.json
</div>
<br>

You can inspect your batch reloading `http://127.0.0.1:8000/batches`:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/batches.png" align="center" style="border: 1px transparent solid; border-radius: 45px; max-width: 96.5%;"/>
</p>

Batches look like:
<p align="center">
  <img src="/assets/blog/aleph_v0.1/Example-Batch.png" align="center" style="border: 1px transparent solid; border-radius: 45px; max-width: 96.5%;"/>
</p>

<br>

4. **Solve the Order**
   
As soon as the batch is posted, Aleph starts processing the batch,  searches for P2P matches, and finds an optimal execution path for the intents:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/CLI-Aleph-2.png" align="center" style="border: 1px transparent solid; border-radius: 45px;"/>
</p>

The solution is sent to `http://127.0.0.1:8000/solutions`:

<p align="center">
  <img src="/assets/blog/aleph_v0.1/solutions.png" align="center" style="border: 1px transparent solid; border-radius: 45px; max-width: 96.5%;"/>
</p>

Solutions have this format:
<p align="center">
  <img src="/assets/blog/aleph_v0.1/Example-Solution.png" align="center" style="border: 1px transparent solid; border-radius: 45px; max-width: 96.5%;"/>
</p>
<br>

4. **Stop the server**

   When you’re done, stop the server with:

<div style="
    font-family: 'Courier New', Courier, monospace;
    background-color: #2d2d2f;
    color: #f8f8f2;
    padding: 1.5rem;
    border-radius: 1.5rem;
    font-style: normal;
    border: 1px solid #444;
    max-width: 96.5%;  /* Set a max width as a percentage of the container */
    margin: 0 auto;  /* Centers the box */
">
  <span style="color: #8be9fd;">root@localhost</span>:<span style="color: #50fa7b;">~</span>$ poetry run stop_server
</div>

<br>

---

<br>

## Thank you for reading, anon

<br>

You’re now ready to start working with Aleph v0.1.

Aleph is a work in progress for us at Team Agents, and we invite you to help by contributing to the source code.

