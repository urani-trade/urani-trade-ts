import AgentCard from "@/components/utils/AgentCard";
import Badge from "@/components/utils/Badge";
import { CMS_NAME } from "@/lib/constants";
import Container from "@/components/blog/container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import LightCard from "@/components/utils/LightCard";
import { Metadata } from "next";

export default async function PageAgentTemplate() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      <Container>
        <article className="flex flex-col justify-center mb-8 md:my-16 max-w-6xl m-auto">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight md:leading-none mb-6 md:mb-12 text-left">
            Join Urani&apos;s PvP Arena
          </h1>
          <p className="mt-6 md:mt-8 text-lg md:text-2xl">
            MEV agents are <strong>automated mathematical bots</strong> that
            execute private strategies created by operators.
          </p>
          
          <p className="mt-6 md:mt-8 text-lg md:text-2xl">    
            <strong>Urani&apos;s player-versus-player
            Arena is a <i>real-time</i> visual environment</strong> where agents compete in orderflow auctions, and{" "}
            <i>fans can go wild</i>.

          </p>

          <Image
            src="/assets/cypherskate/3.webp"
            className="shadow-sm w-full border-image my-12 md:my-20"
            alt="image"
            width={1000}
            height={800}
            priority
          />

          <h2 className="text-3xl md:text-5xl font-bold text-left">
            Customizable MEV Agent Templates
          </h2>

          <p className="mt-8 text-lg md:text-2xl">
            Urani&apos;s in-house agents serve as fallback and gauging
            mechanisms within the protocol. Their code is mostly open-source,
            allowing operators to easily integrate{" "}
            <strong>
              their preferred private strategies and become part of Urani&apos;s orderflow hypergraph.
            </strong>
          </p>


          

          <div className="my-4 md:my-6 grid md:grid-cols-2 text-purple text-center">
            <AgentCard
              title="MEV Agent Aleph"
              description="Urani's first in-house agent, written in Python."
              imageUrl="/assets/agents/aleph_logo.webp"
              link="mev-agent-templates/aleph"
            />
            <AgentCard
              title="MEV Agent Bet"
              description="Urani's second in-house agent, written in Rust."
              imageUrl="/assets/agents/bet_logo.webp"
              link="mev-agent-templates/bet"
            />
          </div>

          <Image
            src="/assets/cypherskate/cs10.webp"
            className="shadow-sm w-full border-image my-8 md:my-16"
            alt="image"
            width={1000}
            height={800}
            priority
          />

          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left mt-8 md:mt-16">
            Strategies for MEV Agents
          </h2>

          <p className="mt-8 text-lg md:text-2xl">{/* description */}</p>
          <div className="my-4 md:my-6 grid md:grid-cols-2 lg:grid-cols-4 text-purple text-center">
            <LightCard
              title="Basic Arbitrage"
              badge={<Badge text="Mid-2024" size="sm" />}
              icon1="balance"
              link="/soon"
              description="Understand and deploy basic arbitrage algorithms."
            />
            <LightCard
              title="Liquidity Sources"
              badge={<Badge text="Mid-2024+" size="sm" />}
              icon1="water_drop"
              link="/soon"
              description="Learn how to add several liquidity sources to your graph."
            />
            <LightCard
              title="P2P Matches"
              badge={<Badge text="Late-2024+" size="sm" />}
              icon1="people"
              link="/soon"
              description="Understand how Urani's peer-to-peer algorithm is implemented and customize this strategy."
            />
            <LightCard
              title="Ring Matches"
              badge={<Badge text="Late-2024+" size="sm" />}
              icon1="stars"
              link="/soon"
              description="Understand how Urani's advanced ring matches are implemented and customize these strategies."
            />
            <LightCard
              title="Private Liquidity"
              badge={<Badge text="2025+" size="sm" />}
              icon1="request_quote"
              link="/soon"
              description="Market makers can deploy Urani's novel private liquidity algorithm."
            />
            <LightCard
              title="Quant and Statistics"
              badge={<Badge text="2025+" size="sm" />}
              icon1="data_thresholding"
              link="/soon"
              description="Learn quantitative and statistical methods for advanced strategies."
            />
            <LightCard
              title="Advanced Arbitrage"
              badge={<Badge text="2025+" size="sm" />}
              icon1="account_balance"
              link="/soon"
              description="Learn the basics to implement your own advanced statistical arbitrage strategies."
            />
            <LightCard
              title="AI-Centric Agents"
              badge={<Badge text="2025+" size="sm" />}
              icon1="terminal"
              link="/soon"
              description="Urani's advanced research and development."
            />
          </div>

        </article>
      </Container>
      <Footer />
    </main>
  );
}

export function generateMetadata(): Metadata {
  const title = `${CMS_NAME} | MEV Agent Templates`;

  return {
    title,
    metadataBase: new URL("https://urani.trade"),
    openGraph: {
      title,
      url: "https://urani.trade",
      siteName: "Urani",
      images: [
        "/assets/cypherskate/3.webp" ?? "/logos/space/space_logo_tiny.png",
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
