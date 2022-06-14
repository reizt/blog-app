import Link from "next/link"
import styled from "styled-components"
import Layout from "../components/layout"
import { client } from "../libs/client"
import type { Blog, BlogCollectionResponse } from "../types"

export default ({ blogs }: {blogs: Blog[]}) => {
  const BlogList = styled.ul`
    display: flex;
    flex-wrap: wrap;
  `
  const BlogItem = styled.div`
    width: 50%;
    height: 20em;
    padding: .5em;
    a{
      display: inline-block;
      border-radius: 1.2em;
      background-color: #efefef;
      width: 100%;
      height: 100%;
      padding: 0.5em;
    }
  `
  return (
    <Layout>
      <BlogList>
        {blogs.map((blog) => (
          <BlogItem role="listitem" key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </BlogItem>
        ))}
      </BlogList>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const data: BlogCollectionResponse = await client.get({ endpoint: "engineering" })
  return {
    props: {
      blogs: data.contents,
    },
  }
}
