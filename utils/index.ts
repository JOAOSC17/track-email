const nodemailer = require('nodemailer')
export const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
     user: process.env.NEXT_PUBLIC_EMAIL as string,
     pass: process.env.NEXT_PUBLIC_PASSWORD as string
    }
});

export const Server = 'https://track-email-kv6xlwge1-joaosc17.vercel.app/'
