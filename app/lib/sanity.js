import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  apiVersion: '2024-01-01',
  dataset: 'production',
  projectId: 'vcqou9dm',
  useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}