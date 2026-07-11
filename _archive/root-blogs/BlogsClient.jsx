'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { urlFor } from '@/lib/sanity';
import { VIEW } from '@/lib/motion';

const CATEGORIES = ['All', 'Tax', 'TMT', 'Corporate', 'Litigation', 'M&A', 'ADR', 'IPR', 'Others'];
const CONTENT_TYPES = ['Article', 'Case Commentary', 'Legislation Update', 'Research Paper'];

export default function BlogsClient({ blogs }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeContentTypes, setActiveContentTypes] = useState([]);

  const toggleContentType = (type) => {
    setActiveContentTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const filtered = blogs.filter(blog => {
    const matchCat = activeCategory === 'All' || blog.category === activeCategory;
    const matchType = activeContentTypes.length === 0 || activeContentTypes.includes(blog.contentType);
    const matchSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchType && matchSearch;
  });

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <motion.main
      className="page-spacing container"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.h1
        className="section-title"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      >
        Community Publications
      </motion.h1>
      <motion.p
        className="form-subtitle publication-subtitle"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Explore blogs, articles, research papers, and legal insights contributed by
        students, professionals, and members of the legal community.
      </motion.p>

      {/* Toolbar */}
      <motion.section
        className="publication-toolbar"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        <motion.button
          className="filter-fab"
          onClick={() => setFilterOpen(!filterOpen)}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
        >
          <i className="fas fa-sliders-h"></i>
        </motion.button>
        <div className="search-container publication-search-wrap" style={{ marginBottom: 0 }}>
          <input
            type="text"
            className="blog-search publication-search"
            placeholder="Search publications..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>

        <AnimatePresence>
          {filterOpen && (
            <motion.div
              className="filter-popover show"
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="filter-popover-head">
                <h3>Filters</h3>
                <button className="filter-close-btn" onClick={() => setFilterOpen(false)}>
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="filter-multi-group">
                <p>Content Type</p>
                <div className="filter-options-list">
                  {CONTENT_TYPES.map(type => (
                    <label key={type} className="filter-option-item">
                      <input
                        type="checkbox"
                        checked={activeContentTypes.includes(type)}
                        onChange={() => toggleContentType(type)}
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>
              <div className="filter-multi-group">
                <p>Practice Area</p>
                <div className="filter-options-list">
                  {CATEGORIES.filter(c => c !== 'All').map(cat => (
                    <label key={cat} className="filter-option-item">
                      <input
                        type="checkbox"
                        checked={activeCategory === cat}
                        onChange={() => setActiveCategory(activeCategory === cat ? 'All' : cat)}
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>

      {/* Category Pills */}
      <motion.div
        className="filter-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {CATEGORIES.map(cat => (
          <motion.button
            key={cat}
            className={`filter-pill${activeCategory === cat ? ' active' : ''}`}
            onClick={() => setActiveCategory(cat)}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </motion.div>

      {/* Blog Cards */}
      <motion.div
        className="cards-grid publication-grid"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }}
        initial="hidden"
        animate="visible"
        key={activeCategory + searchQuery + activeContentTypes.join(',')}
      >
        {filtered.length === 0 ? (
          <p style={{ color: 'var(--grey-text)', gridColumn: '1/-1', textAlign: 'center', padding: '40px 0' }}>
            {blogs.length === 0
              ? 'No publications yet. Check back soon!'
              : 'No publications match your filters.'}
          </p>
        ) : (
          filtered.map(blog => (
            <motion.article
              key={blog._id}
              className="glass-card publication-card"
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } } }}
              whileHover={{ y: -5, boxShadow: '0 28px 56px rgba(0,0,0,0.18)' }}
              transition={{ duration: 0.25 }}
            >
              <div className="card-image-wrap">
                {blog.coverImage ? (
                  <img
                    src={urlFor(blog.coverImage).width(600).height(220).url()}
                    alt={blog.title}
                    className="card-image"
                  />
                ) : (
                  <div className="card-image-fallback">
                    <div>
                      <i className="fas fa-newspaper" style={{ fontSize: '2rem', marginBottom: '8px', display: 'block' }}></i>
                      <span style={{ fontSize: '0.85rem' }}>{blog.category}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="publication-card-body">
                <div className="meta-tag-row">
                  <span className="content-type-badge">{blog.contentType}</span>
                  <span className="meta-tag">{blog.category}</span>
                </div>
                <h3>
                  <Link href={`/blogs/${blog?.slug?.current || ''}`}>{blog.title}</Link>
                </h3>
                <p style={{ color: 'var(--grey-text)', fontSize: '0.93rem', lineHeight: '1.6', marginBottom: '12px' }}>
                  {blog.excerpt}
                </p>
                <p className="publication-meta-line">
                  By <strong>{blog.author}</strong>
                  {blog.authorCollege && <span> · {blog.authorCollege}</span>}
                  {blog.publishedAt && <span> · {formatDate(blog.publishedAt)}</span>}
                </p>
              </div>
            </motion.article>
          ))
        )}
      </motion.div>
    </motion.main>
  );
}
