import mongoose, { ObjectId, Schema } from "mongoose"
const { NEXT_PUBLIC_DATABASE_URL } = process.env
export interface IEmailModel {
    _id:ObjectId;
    email:String;
    opened:Boolean;
    lastseen:Date;
}

export const connect = async () => {
    const conn = await mongoose
      .connect(NEXT_PUBLIC_DATABASE_URL as string)
      .catch(err => console.log(err))
    console.log("Mongoose Connection Established")
  
    const EmailTrackingSchema: Schema<IEmailModel> = new mongoose.Schema({
        email: String,
        opened: Boolean,
        lastseen: Date
      })
    const EmailTracking = mongoose.models.EmailTracking || mongoose.model("EmailTracking", EmailTrackingSchema)
  
    return { conn, EmailTracking }
  }