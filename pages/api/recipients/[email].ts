import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../dbConnect";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { query: { email }, method } = req;
    switch(method) {
        case 'GET':
            try{
                const { EmailTracking } = await connect()
                const date_ob = new Date().toISOString().slice(0, 19).replace('T', ' ');
                EmailTracking.updateOne({email}, {opened: true, lastseen: date_ob})
                console.log('Data Inserted:');
                res.send({ "status": "success" });
                res.send ({"time" : date_ob});
            } catch (e) {
                throw e
            }
            break
        default:
            return ""
    }
}