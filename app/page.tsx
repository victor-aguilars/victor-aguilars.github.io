import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import LatestPosts from '@/components/home/LatestPosts';

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <LatestPosts />
    </>
  );
}
