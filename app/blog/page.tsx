import { getAllPosts } from '@/lib/blog';
import BlogCard from '@/components/blog/BlogCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | VAAS',
  description: 'Blog posts by Víctor Aguilar.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-24 px-6 lg:px-8">
      <div className="max-w-content mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground mb-12">
          Thoughts on software, projects, and other things.
        </p>

        {posts.length === 0 ? (
          <p className="text-muted-foreground">No posts yet. Check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
