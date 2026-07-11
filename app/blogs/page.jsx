import NetworkBackground from '@/components/NetworkBackground';
import { getAllBlogs } from '@/lib/sanity';
import BlogsClient from './BlogsClient';

export const revalidate = 60;

export default async function BlogsPage() {
  const blogs = await getAllBlogs();
  return (
    <>
      <NetworkBackground />
      <BlogsClient blogs={blogs} />
    </>
  );
}
