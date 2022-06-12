export type Tag = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}
export type Blog = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  tags: Tag[]
}
export type BlogCollectionResponse = {
  contents: Blog[]
  totalCount: number
  offset: number
  limit: number
}
