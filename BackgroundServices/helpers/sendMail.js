import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config();

const createTransporter = (config) => {
    const transporter = nodemailer.createTransport(config);
    return transporter;
}

let configurations = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    requireTLS: true,
    auth: {
        user: process.env.EMAIL,
        password: process.env.PASSWORD,
    }
}

const sendMail = async (messageOption) => {
    const transporter = await createTransporter(configurations)
    await transporter.verify()
    await transporter.sendMail(messageOption, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log(info);
        }
    })
}
export default sendMail;