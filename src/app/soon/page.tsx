"use client";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Link from "next/link";
import { architype_bayer } from "@/app/fonts/config";
export default function Soon() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <main className="flex items-center justify-center">
        <h2
          className={`${architype_bayer.className} p-10 text-5xl md:text-9xl`}
        >
          soon.
        </h2>
        <h3>
          (meanwhile,{" "}
          <Link href="/signup" className="underline">
            sign up as a MEV agent operator
          </Link> or {" "}
          <Link href="https://www.urani.app/" className="underline">
            try our app
          </Link>
          )
        </h3>
      </main>
      <Footer />
    </div>
  );
}