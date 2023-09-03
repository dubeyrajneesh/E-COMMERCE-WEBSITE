import { products } from "./ConstData/Data.js";
import Product from "./Model/Product-Model.js";

const Default = async()=>{
    try{
        await Product.deleteMany({}) ;
        await Product.insertMany(products)
        // console.log("Products imported succesfully")

    }
    catch(error){
        console.log("Some error while fetching the data" , error.message)
    }
}
export default Default ;