import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/app/blog/lib/api";
import markdownToHtml from "@/app/blog/lib/markdownToHtml";
import Alert from "@/components/blog/alert";
import Container from "@/components/blog/container";
import Header from "@/components/blog/header";
import { PostBody } from "@/components/blog/post-body";
import { PostHeader } from "@/components/blog/post-header";

import { getSEOTags } from "@/lib/seo";


export default async function Post({ params }: any) {
  const post = getPostBySlug(params.slug) as any;

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Alert preview={post.preview} />
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}



export function generateMetadata({ params }: any): Metadata {
  const post = getPostBySlug(params.slug) as any;

  if (!post) {
    return notFound();
  }

  console.log(post);
  return getSEOTags({
    title: post.title,
    description: post.excerpt,
    keywords: post.keywords,
  });
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
