import mongoose from 'mongoose';

const connection = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URI);
        console.log("Connected To MongoDb");
    }
    catch(error){
        console.log("Error connecting to MongoDB", error.message)
    }
}

export default connection;