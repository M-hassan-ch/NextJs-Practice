import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let obj = JSON.stringify(req.body)

    let data: any = await fetch('http://localhost:4000/quotes', {
        method: 'POST',
        body: obj,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    data = await data.json();

    res.status(200).json(data);
}
