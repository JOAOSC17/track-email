import { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../dbConnect";
import { Server, transporter } from "../../../utils";
interface BodySendEmail {
  sender:string
  recipient:string
  messageBody:string
  subject:string
}
export default async function handler(req: NextApiRequest, res:NextApiResponse) {
    const {
      sender,
      recipient,
      messageBody,
      subject
    } : BodySendEmail = req.body

    const htmlBody = '<p>' + messageBody + '</p>' + '<img src = "' + Server + '/recipients/' + subject + '" style="display:none">';
    const mailOptions = {
      from: sender,
      to: recipient,
      subject: subject,
      html: htmlBody
    };
    switch(req.method) {
        case 'POST':
            try {
              const { EmailTracking } = await connect() 
              await EmailTracking.create({
                email:recipient,
              })
            await transporter.sendMail(mailOptions)
            res.send({ "status": "success" });  
            } catch (e) {
              throw e
            }
            break
        default:
            return ""
    }
  }