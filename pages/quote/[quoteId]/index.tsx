import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function QuoteDetails() {
    const [Object, setObjects]: any = useState(null);
    const router = useRouter();
    const quoteId = router.query.quoteId;

    async function showQuotes() {
        if (quoteId !== undefined) {
            let data: any = await fetch(`/api/quote/${quoteId}`);
            data = await data.json();
            console.log(data);
            setObjects(data);
            
        }
    }

    return (
        <>
            <button onClick={showQuotes}>show</button>
            {
                Object === null ? "Loading" :

                    <div>
                        <h1>
                            {Object.author}
                        </h1>
                        <h3>
                            {Object.text}
                        </h3>
                    </div>

            }
        </>
    )
}
