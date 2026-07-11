export default {
  name: 'blog',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'authorCollege',
      title: 'Author College / Law School',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tax', value: 'Tax' },
          { title: 'TMT', value: 'TMT' },
          { title: 'Corporate', value: 'Corporate' },
          { title: 'Litigation', value: 'Litigation' },
          { title: 'M&A', value: 'M&A' },
          { title: 'ADR', value: 'ADR' },
          { title: 'IPR', value: 'IPR' },
          { title: 'Others', value: 'Others' },
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'contentType',
      title: 'Content Type',
      type: 'string',
      options: {
        list: [
          { title: 'Article', value: 'Article' },
          { title: 'Case Commentary', value: 'Case Commentary' },
          { title: 'Legislation Update', value: 'Legislation Update' },
          { title: 'Research Paper', value: 'Research Paper' },
        ]
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'publicationStatus',
      title: 'Publication Status',
      type: 'string',
      options: {
        list: [
          { title: 'Draft', value: 'draft' },
          { title: 'Under Review', value: 'under_review' },
          { title: 'Published', value: 'published' },
        ],
        layout: 'radio',
      },
      initialValue: 'draft',
      validation: Rule => Rule.required(),
      description: 'Only content marked as Published appears on the website.',
    },
    {
      name: 'excerpt',
      title: 'Short Excerpt',
      type: 'text',
      rows: 3,
      description: '2-3 sentence summary shown on the blogs page',
      validation: Rule => Rule.required()
    },
    {
      name: 'body',
      title: 'Full Article Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title' },
      validation: Rule => Rule.required()
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'author',
      status: 'publicationStatus',
    }
    ,
    prepare({ title, subtitle, status }) {
      const statusLabel = status === 'published'
        ? 'Published'
        : status === 'under_review'
          ? 'Under Review'
          : 'Draft';

      return {
        title,
        subtitle: `${subtitle || 'Unknown Author'} • ${statusLabel}`,
      };
    },
  }
}
