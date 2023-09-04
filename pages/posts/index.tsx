import Link from 'next/link';
import React from 'react'

export default function Posts({ posts }: any) {

  return (
    <>
      {
        posts.map((post: any) => {
          return (
            <Link key={post?.id} href={`posts/${post?.id}`} passHref>
              <h1> {post?.id} : {post?.title}</h1>
              <hr />
            </Link>
          )
        })
      }
    </>
  )
}

export async function getServerSideProps() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }
}
