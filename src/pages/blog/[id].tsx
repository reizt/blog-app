import { client } from "../../libs/client"
import { GetStaticPaths, GetStaticProps } from "next"
import type { Blog, BlogCollectionResponse } from "../../types"

export default ({ blog }: {blog: Blog}) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data: BlogCollectionResponse = await client.get({ endpoint: "engineering" })
  
  const paths = data.contents.map((blog) => `/blog/${blog.id}`)
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const maybeId = context.params?.id
  const id = maybeId?.toString()
  
  const data: Blog = await client.get({ endpoint: "engineering", contentId: id })

  return {
    props: {
      blog: data,
    },
  }
}