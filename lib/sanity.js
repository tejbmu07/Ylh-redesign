import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'rfchx8l1',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

export async function getAllBlogs() {
  return client.fetch(`
    *[_type == "blog" && publicationStatus == "published"] | order(publishedAt desc) {
      _id,
      title,
      author,
      authorCollege,
      category,
      contentType,
      publicationStatus,
      excerpt,
      body,
      coverImage,
      publishedAt,
      slug
    }
  `)
}

export async function getBlogBySlug(slug) {
  return client.fetch(
    `
      *[_type == "blog" && publicationStatus == "published" && slug.current == $slug][0] {
        _id,
        title,
        author,
        authorCollege,
        category,
        contentType,
        publicationStatus,
        excerpt,
        body,
        coverImage,
        publishedAt,
        slug
      }
    `,
    { slug }
  )
}
