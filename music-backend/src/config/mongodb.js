import mongoose from "mongoose";

const connectDB = async ()=>{
    mongoose.connection.on('connected', ()=>{
        console.log('connection Started')
    })
    await mongoose.connect(`${process.env.CONNECTION_STRING}/music-player`);
}

export default connectDB;