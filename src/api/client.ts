import { createClient } from "contentful";

export const space_id = '5sd5wzcc0ahk'
export const delivery_token = 'IMhtIsTGBLEjBV3ucqFLhnOWH0QwpDLQpztTQwwkGXg'
export const management_token = 'CFPAT-uqY-oXJ3lkx5rLRP0JjxIqH8Edmvha_RlxbX-xpoJZQ'

const client = createClient({
  space: space_id,
  accessToken: delivery_token
})

export const fetchPhotos = async () => {
  const entryItems = await client.getEntries({ content_type: 'photographs' })
  // const tagItems = await client.getTags()

  // const tags = tagItems.items.map((tag) => tag.name)

  // Process the data from the Contentful REST API into a neater object
  // If you want to avoid this step, consider using the GraphQL API
  const entries = entryItems.items.map((entry) => {
    const { fields } = entry
    return {
      name: fields.name,
      description: fields.description || null,
      imageUrl: fields.imageUrl.fields.file.url,
      // tags: entry.metadata.tags
      //   .map((t) => tagItems.items.find((ti) => ti.sys.id === t.sys.id))
      //   .map((t) => t.name),
    }
  })

  return { entries }
}