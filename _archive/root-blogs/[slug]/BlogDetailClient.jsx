'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { urlFor } from '@/lib/sanity';

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

export default function BlogDetailClient({ blog }) {
  return (
    <motion.main
      className="page-spacing container"
      style={{ maxWidth: '900px' }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div whileHover={{ x: -3 }} transition={{ duration: 0.2 }} style={{ display: 'inline-block' }}>
        <Link href="/blogs" style={{ display: 'inline-block', marginBottom: '22px', color: 'var(--grey-text)' }}>
          ← Back to Blogs
        </Link>
      </motion.div>

      <motion.article
        className="glass-card"
        style={{ padding: '28px' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
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
          <motion.img
            src={urlFor(blog.coverImage).width(1200).height(560).url()}
            alt={blog.title}
            style={{ width: '100%', borderRadius: '12px', marginBottom: '24px' }}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          />
        ) : null}

        <div style={{ color: 'var(--grey-text)', lineHeight: '1.9', fontSize: '1.03rem' }}>
          {(blog.body || []).map((block, i) => {
            if (block._type !== 'block') return null;
            const text = renderBlockText(block);
            if (!text.trim()) return null;
            return (
              <motion.p
                key={block._key}
                style={{ marginBottom: '18px' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 + Math.min(i * 0.03, 0.3) }}
              >
                {text}
              </motion.p>
            );
          })}
        </div>
      </motion.article>
    </motion.main>
  );
}
