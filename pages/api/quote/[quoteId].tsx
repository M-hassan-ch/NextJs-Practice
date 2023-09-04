import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { quoteId } = req.query;

    let data = await fetch(`http://localhost:4000/quotes/${quoteId}`);
    data = await data.json();

    res.status(200).json(data);
}
