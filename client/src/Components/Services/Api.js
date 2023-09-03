
import axios from 'axios';
const API_BASE_URL = 'http://localhost:4000' ;

export const SignUpServices = async(user)=>{
    try{
        
        return await axios.post(`${API_BASE_URL}/signup` , user)
        
    }
    catch(error){
        console.log("Some error while calling the API")
    }
   
}

export const LogInServices =async (data)=>{
try{
    const res = await axios.post(`${API_BASE_URL}/login` , data)
    return res.data ;

}catch(error){
    console.log("Some error while login ")
}
    

}