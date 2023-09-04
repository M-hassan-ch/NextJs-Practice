import React, { useState } from 'react'

export default function CreateQuote() {

    const [QuoteText, setQuoteText] = useState('')
    async function createQuote() {
        let obj = JSON.stringify({
            id: Date.now(),
            author: QuoteText,
            text: QuoteText
        })

        let data = await fetch('/api/quote/create', {
            method: 'POST',
            body: obj,
            headers: {
                'Content-Type': 'application/json'
            }
        });
        data = await data.json();
        console.log(data);
    }

    return (
        <>
            <div>
                <input placeholder='text' type="text" name="" id="" value={QuoteText} onChange={e => setQuoteText(e.target.value)} />
                <button onClick={createQuote}>Create</button>
            </div>
        </>
    )
}
