import React from 'react'

export default function PostDetails({ post }: any) {
    return (
        <>
            <h1>
                {post.id} : {post.title}
            </h1>

            <h3>
                {post.body}
            </h3>
        </>
    )
}

export async function getServerSideProps(context: any) {
    const { params } = context;

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
    const data = await res.json();

    return {
        props: {
            post: data
        }
    }


}