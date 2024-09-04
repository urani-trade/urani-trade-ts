import { MoreStories } from "@/components/blog/more-stories";
import Container from "@/components/blog/container";
import { HeroPost } from "@/components/blog/hero-post";
import { Intro } from "@/components/blog/intro";
import { getAllPosts } from "@/lib/utils";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Subscription from "@/components/subscribe/Subscription";

export default function Index() {
  const allPosts = getAllPosts();

  // the main post is the first post in the array
  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Header />
      <Container>
        <Intro />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Subscription />
      </Container>
      <Footer />
    </main>
  );
}
