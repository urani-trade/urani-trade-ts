import { CMS_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Page from "@/components/utils/Page";
import { getPostBySlug } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function PageCryptomarkets() {
  return <Page slug="cryptomarkets" type="secondary" />;
}

export function generateMetadata(): Metadata {
  const post = getPostBySlug("cryptomarkets", "secondary");

  if (!post) {
    return notFound();
  }

  const title = `${CMS_NAME} | ${post.title}`;

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
