import mongoose from 'mongoose';

const OrderSchema = new mongoose.Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Users"
    },
    orderItems:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"OrderItems"
    }],
    orderDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    deliveryDate:{
        type:Date
    },
    shippingAddress:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"addresses"
    },
    paymentDetails:{
        
        paymentMethod:{
            type:String
        },
        transactionId:{
            type:String
        },
        paymentId:{
            type:String
        },
        paymentStatus:{
            type:String,
            default:"PENDING"
        },
    },
    totalPrice:{
        type:Number,
        required:true
    },
    totalDiscountedPrice:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    orderStatus:{
        type:String,
        required:true,
        default:"PENDING"
    },
    totalItem:{
        type:Number,
        required:true
    },
},
{ timestamps: true }
);

const Order = mongoose.model("Orders", OrderSchema);

export default Order;

