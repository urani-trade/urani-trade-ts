"use client";

import { Button } from "@/components/ui/button";
import Cards from "@/components/docs/Cards";
import Carousel from "@/components/carousel/Carousel";
import Footer from "@/components/footer/Footer";
import { Fragment } from "react";
import Header from "@/components/header/Header";
import Image from "next/image";
import ShallWeBegin from "@/components/shall/ShallWeBegin";
import WhySolana from "@/components/why-solana/WhySolana";
import { architype_bayer } from "@/app/fonts/config";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col items-center">
          <h2
            className={`${architype_bayer.className} p-6 pl-2 tracking-tighter md:mt-16 font-medium text-7xl sm:text-9xl md:text-[10rem] lg:text-[18rem]`}
          >
            urani.trade
          </h2>
          <h4 className="max-w-5xl font-bold text-center text-cream-dark text-2xl md:text-[2.6rem] px-10">
           Intent-Based Protocol and Agentic Markets
            <br /> <br />
          </h4>
          <h5 className="font-bold text-center text-cream-dark text-md md:text-2xl px-10 max-w-2xl">
            Research and Development of Products for <br />
            Toxic-MEV Minimization at the Application Layer
          </h5>
        </div>

        <a href="/soon" target="_blank" rel="noopener noreferrer">
          <Button
            className="my-12 md:my-20 text-xl"
            variant="secondary"
            size="lg"
          >
            Trade on Urani Swap
          </Button>
        </a>

        <Carousel />
        <WhySolana />
        <Cards />
        <ShallWeBegin />
      </main>
      <Footer />
    </Fragment>
  );
}
