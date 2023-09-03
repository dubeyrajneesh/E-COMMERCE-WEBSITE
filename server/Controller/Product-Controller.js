
import Product from "../Model/Product-Model.js"

export const getAllProducts = async(req , res)=>{
    try{

        const ans =  await Product.find({});

        return res.status(200).json(ans)
         

    }
    catch(error){
        return res.status(500).json( error.message) ;

    }
}

export const ProductDetilsById = async(req,res)=>{
    try{
     
        const ans = await Product.findOne({'id': req.params.id })
        return res.status(200).json(ans)

    }

    catch(error){
        return res.status(500).json(error.message)
    }
}