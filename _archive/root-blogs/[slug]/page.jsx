import { notFound } from 'next/navigation';
import Link from 'next/link';
import AnimatedNetworkBackground from '@/components/AnimatedNetworkBackground';
import { getBlogBySlug, urlFor } from '@/lib/sanity';
import BlogDetailClient from './BlogDetailClient';

export const revalidate = 60;

export default async function BlogDetailPage({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <AnimatedNetworkBackground />
      <BlogDetailClient blog={blog} />
    </>
  );
}
