// const mongoose = require('mongoose');
// main().catch(err => console.log(err));
// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/test');
// }

const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    email: {type: String , required: true},    // userId
    orderId: {type: String , required: true},
    paymentInfo: {type: String , default: ''},
    product: [{
        productId: {type: String},
        quantity: {type: Number , default: 1}
    }],
    address: {type: String , required: true},
    amount: {type: Number , required: true},
    status: {type: String , default: 'Pending' , required: true},
}, {timestamps: true});

// mongoose.models = {}
export default mongoose.models.Order || mongoose.model("Order",OrderSchema);
// export default mongoose.model("Order",OrderSchema);