import { useRouter } from 'next/router'
import React from 'react'

export default function ReviewDetials() {
    const router = useRouter();
    const productId = router.query.productId;
    const reviewId = router.query.reviewId;

    return (
        <h1>You are viewing details of review {reviewId} of {productId} product</h1>
    )
}
