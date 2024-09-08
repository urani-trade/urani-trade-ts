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
          
          <h1 className="text-3xl md:text-5xl font-bold leading-snug md:leading-snug mb-6 md:mb-8 text-center md:text-left">
            Ride Urani&apos;s Orderflow Hypergraph
          </h1>

          <p className="my-6 md:my-8 text-lg md:text-2xl">
            We are gamifying decentralized finance, allowing you to earn while playing sophisticated player-versus-player games. {" "}
            Both newcomers and seasoned anons are welcome.{" "}  
          </p>
          
          <Widget 
            id="OviGgjRs" 
            style={{ width: "80%", height: "500px", margin: "0 auto" }} 
          />

        </article>
      </Container>
      <Footer />
    </main>
  );
}
