import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import AnimatedSection from '@/components/motion/AnimatedSection';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: `${post.title} | VAAS`,
    description: post.description,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post || !post.published) notFound();

  return (
    <div className="py-24 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <AnimatedSection className="max-w-2xl">
          <Button variant="ghost" asChild className="mb-8 -ml-4">
            <Link href="/blog" className="gap-2">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>
          </Button>

          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight mb-4">{post.title}</h1>
          <p className="text-xl text-muted-foreground mb-4">{post.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-8">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <Separator className="mb-8" />

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <MDXRemote source={post.content} />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
