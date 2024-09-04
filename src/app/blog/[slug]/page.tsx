import { getAllPosts, getPostBySlug } from "@/lib/utils";

import { CMS_NAME } from "@/lib/constants";
import Container from "@/components/blog/container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Metadata } from "next";
import { PostBody } from "@/components/blog/post-body";
import { PostHeader } from "@/components/blog/post-header";
import Subscription from "@/components/subscribe/Subscription";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Header />
      <Container>
        <article className="flex flex-col mb-8 md:my-24 max-w-6xl m-auto">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
        <Subscription />
      </Container>
      <Footer />
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | ${CMS_NAME} Blog`;

  return {
    title,
    metadataBase: new URL("https://urani.trade"),
    openGraph: {
      title,
      url: "https://urani.trade",
      siteName: "Urani",
      images: [post.ogImage?.url ?? "/logos/space/space_logo_tiny.png"],
      locale: "en_US",
      type: "website",
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
