import Container from "@/components/blog/container"; // Correctly use the alias
import { HeroPost } from "@/components/blog/hero-post";
import { Intro } from "@/components/blog/intro";
import { MoreStories } from "@/components/blog/more-stories";
import { getAllPosts } from "@/app/blog/lib/api";

import { getSEOTags } from "@/lib/seo";
export const metadata = getSEOTags({
  title: "Blog",
});

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0] as any;

  const morePosts = allPosts.slice(1);

  return (
    <main>
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
        {morePosts.length > 0 && <MoreStories posts={morePosts as any}  />}
      </Container>
    </main>
  );
}
