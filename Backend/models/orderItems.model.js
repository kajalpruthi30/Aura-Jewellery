import mongoose from 'mongoose';

const OrderItemSchema = new mongoose.Schema({
    
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Products",
        required:true
    },
    size:{
        type:String
    },
    quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    discountedPrice:{
        type:Number,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users",
        required:true
    },
});

const OrderItem = mongoose.model("OrderItems", OrderItemSchema);

export default OrderItem;