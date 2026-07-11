import { notFound } from 'next/navigation';
import Link from 'next/link';
import NetworkBackground from '@/components/NetworkBackground';
import { getBlogBySlug, urlFor } from '@/lib/sanity';

export const revalidate = 60;

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

function renderBlockText(block) {
  if (!block?.children) return '';
  return block.children.map((child) => child.text || '').join('');
}

export default async function BlogDetailPage({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <NetworkBackground />
      <main className="page-spacing container" style={{ maxWidth: '900px' }}>
        <Link href="/blogs" style={{ display: 'inline-block', marginBottom: '22px', color: 'var(--grey-text)' }}>
          ← Back to Blogs
        </Link>

        <article className="glass-card" style={{ padding: '28px' }}>
          <div className="meta-tag-row" style={{ marginBottom: '14px' }}>
            <span className="content-type-badge">{blog.contentType}</span>
            <span className="meta-tag">{blog.category}</span>
          </div>

          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: '1.1', marginBottom: '10px' }}>
            {blog.title}
          </h1>

          <p className="publication-meta-line" style={{ marginBottom: '22px' }}>
            By <strong>{blog.author}</strong>
            {blog.authorCollege && <span> · {blog.authorCollege}</span>}
            {blog.publishedAt && <span> · {formatDate(blog.publishedAt)}</span>}
          </p>

          {blog.coverImage ? (
            <img
              src={urlFor(blog.coverImage).width(1200).height(560).url()}
              alt={blog.title}
              style={{ width: '100%', borderRadius: '12px', marginBottom: '24px' }}
            />
          ) : null}

          <div style={{ color: 'var(--grey-text)', lineHeight: '1.9', fontSize: '1.03rem' }}>
            {(blog.body || []).map((block) => {
              if (block._type !== 'block') return null;
              const text = renderBlockText(block);
              if (!text.trim()) return null;
              return (
                <p key={block._key} style={{ marginBottom: '18px' }}>
                  {text}
                </p>
              );
            })}
          </div>
        </article>
      </main>
    </>
  );
}
