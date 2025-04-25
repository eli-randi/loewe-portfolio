import { createClient } from "contentful";

export const space_id = process.env.CONTENTFUL_SPACE_ID
export const delivery_token = process.env.CONTENTFUL_DELIVERY_TOKEN
export const management_token = process.env.CONTENTFUL_MANAGEMENT_TOKEN

const client = createClient({
  space: space_id,
  accessToken: delivery_token
})

export const fetchPhotos = async (category: string) => {
  const entryItems = await client.getEntries({
    content_type: 'photographs',
    'fields.category': category,
    'order': 'fields.title',
  })

  const entries = entryItems.items.map((entry) => {
    const { fields } = entry
    return {
      name: fields.name,
      imageUrl: fields.imageUrl.fields.file.url,
    }
  })

  return { entries }
}

export const fetchText = async () => {
  const entryItems = await client.getEntries({
    content_type: 'descriptions',
  })

  const entries = entryItems.items.map((entry) => {
    const { fields } = entry
    return {
      text: fields.description
    }
  })

  return { entries }
}