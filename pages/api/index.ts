import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const Server = 'any_url'
    res.status(200).json({
        "message": "Hi this is mail tracker next server",
        "url": Server
       });
}