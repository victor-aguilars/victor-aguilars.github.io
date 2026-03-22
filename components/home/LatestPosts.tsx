import Link from 'next/link';
import { getRecentPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from '@/components/motion/AnimatedSection';
import { StaggerGrid, StaggerItem } from '@/components/motion/StaggerGrid';
import TiltCard from '@/components/motion/TiltCard';

export default function LatestPosts() {
  const posts = getRecentPosts(3);

  if (posts.length === 0) return null;

  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <AnimatedSection>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Latest Posts</h2>
            <Button variant="ghost" asChild>
              <Link href="/blog" className="gap-2">
                View all <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimatedSection>

        <StaggerGrid className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <TiltCard className="h-full">
                <BlogCard post={post} />
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </div>
    </section>
  );
}
