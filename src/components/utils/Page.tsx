import Container from "@/components/blog/container";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { PostBody } from "@/components/blog/post-body";
import { PostTitle } from "@/components/blog/post-title";
import { getPostBySlug } from "@/lib/utils";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";

interface PageProps {
  slug: string;
  type?: string;
}

export default async function Page({ slug, type }: PageProps) {
  const post = getPostBySlug(slug, type);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header />
      <Container>
        <article className="flex flex-col justify-center mb-8 md:my-16 max-w-4xl m-auto lists">
          <PostTitle>{post.title}</PostTitle>
          <PostBody content={content} />
        </article>
      </Container>
      <Footer />
    </main>
  );
}
