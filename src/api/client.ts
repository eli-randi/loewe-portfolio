import { createClient } from "contentful";

export const space_id = import.meta.env.VITE_CONTENTFUL_SPACE_ID
export const delivery_token = import.meta.env.VITE_CONTENTFUL_DELIVERY_TOKEN

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

  console.log({entryItems})

  const entries = entryItems.items.map((entry) => {
    const { fields } = entry
    return {
      text: fields.formattedDescription
    }
  })

  return { entries }
}