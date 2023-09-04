import { useRouter } from 'next/router';
import React from 'react'
import useSWR from 'swr'

async function fetcher(url: any) {
    const res = await fetch(url);
    const data = await res.json();
    return data
}

export default function UserDetails() {
    const router = useRouter();
    const userId = router.query.userId;
    
    const { data, err }: any = useSWR(`http://localhost:4000/users/${userId}`, fetcher);

    if (!data && !err) {
        return <h1>Loading...</h1>;
    }

    if (err) {
        return <h1>Error: {err}</h1>;
    }

    return (
        <>
            <div>
                <h1> {data.id} : {data.name}</h1>
            </div>

        </>
    )
}
