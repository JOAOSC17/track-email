import { NextApiRequest, NextApiResponse } from "next";
import { Server } from "../../utils";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
        "message": "Hi this is mail tracker next server",
        "url": Server
       });
}