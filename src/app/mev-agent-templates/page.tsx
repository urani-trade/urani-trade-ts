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
          <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-snug mb-4 md:mb-6 text-left">
            Join Urani&apos;s Player-Versus-Player Arena
          </h1>
          
          <p className="mt-4 md:mt-6 mb-8 md:mb-10 text-lg md:text-2xl">
            MEV Agents are automated mathematical bots that execute {" "}
            private strategies developed by operators. {" "}
            Urani&apos;s Arena is a real-time visual environment where {" "}
            agents compete in orderflow auctions.
          </p>
          
          <Image
            src="/assets/cypherskate/3.webp"
            className="shadow-sm w-[90%] border-image mb-12 md:mb-16 mt-8 md:mt-10 mx-auto" 
            alt="image"
            width={1000}
            height={800}
            priority
          />
          
          <h2 className="text-3xl md:text-5xl font-bold text-left mt-8 md:mt-10">
            Customizable MEV Agent Templates
          </h2>

          <p className="mt-8 text-lg md:text-2xl">
            Urani&apos;s in-house agents serve as fallback and gauging
            mechanisms within the protocol. Their code is mostly open-source,
            allowing operators to easily integrate{" "}
            their preferred private strategies and become part of Urani&apos;s orderflow hypergraph.
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

          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left mt-8 md:mt-16">
            Strategies for MEV Agents
          </h2>

          <p className="mt-8 text-lg md:text-2xl">{/* description */}</p>
          <div className="my-4 md:my-6 grid md:grid-cols-2 lg:grid-cols-4 text-purple text-center">
            <LightCard
              title="Basic Arbitrage"
              badge={<Badge text="soon" size="sm" />}
              icon1="balance"
              link="/soon"
              description="Understand and deploy basic arbitrage algorithms."
            />
            <LightCard
              title="Liquidity Sources"
              badge={<Badge text="soon" size="sm" />}
              icon1="water_drop"
              link="/soon"
              description="Learn how to add several liquidity sources to your graph."
            />
            <LightCard
              title="P2P Matches"
              badge={<Badge text="soon" size="sm" />}
              icon1="people"
              link="/soon"
              description="Understand how Urani's peer-to-peer algorithm is implemented and customize this strategy."
            />
            <LightCard
              title="Ring Matches"
              badge={<Badge text="soon" size="sm" />}
              icon1="stars"
              link="/soon"
              description="Understand how Urani's advanced ring matches are implemented and customize these strategies."
            />
            <LightCard
              title="Private Liquidity"
              badge={<Badge text="soon" size="sm" />}
              icon1="request_quote"
              link="/soon"
              description="Market makers can deploy Urani's novel private liquidity algorithm."
            />
            <LightCard
              title="Quant and Statistics"
              badge={<Badge text="soon" size="sm" />}
              icon1="data_thresholding"
              link="/soon"
              description="Learn quantitative and statistical methods for advanced strategies."
            />
            <LightCard
              title="Advanced Arbitrage"
              badge={<Badge text="soon" size="sm" />}
              icon1="account_balance"
              link="/soon"
              description="Learn the basics to implement your own advanced statistical arbitrage strategies."
            />
            <LightCard
              title="AI-Centric Agents"
              badge={<Badge text="soon" size="sm" />}
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
