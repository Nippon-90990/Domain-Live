// Next.js API route support: req.body[i].title,

import connectDb from "../../middleware/mongoose"
import Product from "../models/Product"

const handler = async(req, res)=> {
    if (req.method == 'POST') {
        for (let i=0;i<req.body.length; i++){
        let p = new Product({
            title: req.body[i].title,
            brand: req.body[i].brand,
            slug: req.body[i].slug,
            desc: req.body[i].desc,
            img: req.body[i].img,
            category: req.body[i].category,
            size: req.body[i].size,
            color: req.body[i].color,
            price: req.body[i].price,
            availablQty: req.body[i].availablQty,
        })
        await p.save()
        }
        res.status(200).json({Succese: 'Sucesfull'})
    }
    
    else {
        res.status(400).json({Error: 'This Page Can Not Found'})
    }
    
}
export default connectDb(handler);