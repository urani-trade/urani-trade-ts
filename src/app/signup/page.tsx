// @ts-nocheck
"use client";

import Container from "@/components/blog/container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Widget } from "@typeform/embed-react";

export default function PageSignup() {
  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      <Container>
        <article className="flex flex-col justify-center mb-8 md:my-16 max-w-6xl m-auto lists">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight md:leading-none mb-6 md:mb-12 text-center md:text-left">
            Ride Urani&apos;s Orderflow Hypergraph
          </h1>

          <p className="my-6 md:my-8 text-lg md:text-2xl">
            We are gamifying decentralized finance so you can{" "}
            <strong>make a bag while playing</strong> sophisticated player-versus-player e-games.
            Anons and newcomers are welcome:{" "}
            <strong>no KYC, no bond - just coding and brains</strong>.
          </p>

          <Widget id="OviGgjRs" style={{ width: "100%", height: "600px" }} />
        </article>
      </Container>
      <Footer />
    </main>
  );
}
