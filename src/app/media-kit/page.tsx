import { Button } from "@/components/ui/button";
import Container from "@/components/blog/container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Image from "next/image";
import { PostTitle } from "@/components/blog/post-title";

export default async function PageMediaKit() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Header />
      <Container>
        <article className="flex flex-col justify-center mb-8 md:my-16 max-w-4xl m-auto lists">
          <PostTitle>Media Kit</PostTitle>
          <Image
            src="/assets/cypherskate/cs9.webp"
            alt="skateboarder doing a trick"
            className="shadow-sm md:max-w-3xl border-image"
            width={700}
            height={300}
          />
          <a
            href="/logos/media-kit.zip"
            download
            className="mt-10 mb-4 md:my-12 text-center"
          >
            <Button variant="secondary" size="lg">
              Download Logos
            </Button>
          </a>
        </article>
      </Container>
      <Footer />
    </div>
  );
}
