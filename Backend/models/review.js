import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    review:{
        type:String,
        required:true
    },
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
    craetedAt: {
        type:Date,
        default:Date.now()
    }
});

const Review = mongoose.model("reviews", ReviewSchema);

export default Review;