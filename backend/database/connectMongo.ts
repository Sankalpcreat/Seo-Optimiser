import mongoose from 'mongoose'

const connectMongo =async()=>{
    try {
        if(mongoose.connection.readyState===0){
            await mongoose.connect(process.env.MONGO_URI||'')
        }
        console.log("Mongodb Connected")
    } catch (error) {
        console.error("Mongodb connection Error",error)
        throw error;
    }
 
}
export default connectMongo;