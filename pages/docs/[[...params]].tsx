import { useRouter } from 'next/router'
import React from 'react'

export default function Docs() {
    const router = useRouter();
    const {params} = router.query;

    return (
        <h1>Params : {params}</h1>
    )
}
