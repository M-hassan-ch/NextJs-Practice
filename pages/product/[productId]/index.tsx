import { useRouter } from 'next/router'
import React from 'react'

export default function ProductDetials() {
    const router = useRouter();
    const productId = router.query.productId;

    return (
        <h1>You are viewing details of {productId} product</h1>
    )
}
