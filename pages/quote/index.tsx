import Link from 'next/link';
import React, { useState } from 'react'

export default function Quote() {
    const [Objects, setObjects]: any = useState(null);

    async function showQuotes() {
        let data = await fetch('api/quote');
        data = await data.json();

        setObjects(data);
    }

    return (
        <>
            <button onClick={showQuotes}>Show quotes</button>
            {
                Objects === null ? "Loading" :
                    Objects.map((obj: any) => {
                        return (
                            <Link key={obj.id} href={`quote/${obj.id}`} passHref>
                                <h1>
                                    {obj.author}
                                </h1>
                            </Link>
                        )
                    })
            }
        </>
    )
}
