// Next.js API route support: req.body[i].title,

import connectDb from "../../middleware/mongoose"
import Product from "../models/Product"

const handler = async (req, res) => {
    if (req.method == 'POST') {
        for (let i = 0; i < req.body.length; i++) {
            let p = await Product.findByIdAndUpdate(req.body[i]._id, req.body[i])
        }
        res.status(200).json({ Succese: 'Sucesfull' })
    }

    else {
        res.status(400).json({ Error: 'This Page Can Not Found' })
    }

}
export default connectDb(handler);