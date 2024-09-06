import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");
const secondaryPagesDirectory = join(process.cwd(), "_pages");

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPostSlugs(type?: string) {
  if (type === "secondary") {
    return fs.readdirSync(secondaryPagesDirectory);
  }
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, type?: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const directory =
    type === "secondary" ? secondaryPagesDirectory : postsDirectory;
  const fullPath = join(directory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .filter((slug) => slug !== "careers.md")
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
