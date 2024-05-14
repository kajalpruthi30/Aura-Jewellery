import mongoose from "mongoose";

const RatingSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
},
{ timestamps: true }
);

const Rating = mongoose.model("ratings", RatingSchema);

export default Rating;