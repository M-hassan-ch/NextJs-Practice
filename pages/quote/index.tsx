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
                            <div key={obj.id}>
                                <h1>
                                    {obj.author}
                                </h1>
                                <h3>
                                    {obj.text}
                                </h3>
                            </div>
                        )
                    })
            }
        </>
    )
}
