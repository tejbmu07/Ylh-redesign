import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import { getAllBlogs } from '@/lib/sanity';
import BlogsClient from './BlogsClient';

export const revalidate = 60;

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  return (
    <>
      <AnimatedNetworkBackground />
      <BlogsClient blogs={blogs} />
    </>
  );
}
