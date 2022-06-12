import Link from "next/link";
import { client } from "../libs/client";
import type { Blog, BlogCollectionResponse } from "../types"

export default ({ blogs }: {blogs: Blog[]}) => {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps = async () => {
  const data: BlogCollectionResponse = await client.get({ endpoint: "engineering" });
  return {
    props: {
      blogs: data.contents,
    },
  };
};
