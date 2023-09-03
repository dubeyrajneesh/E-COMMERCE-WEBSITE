import React , {useState , useContext} from 'react'
import { Box, Dialog, TextField, Typography, Button } from '@mui/material'
import { SignUpServices , LogInServices } from '../Services/Api';
import {DataContext} from '../context/DataProvider'

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
}
const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const loginInitialValues = {
    username: '',
    password:''
}

const Login = ({ open, setOpen }) => {

    const onHandleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    } 
    const [ account, toggleAccount ] = useState(accountInitialValues.login);
    const [ signup, setSignup ] = useState(signupInitialValues);
    const[login ,setLogin] = useState(loginInitialValues) ;
    const { setAccount} = useContext(DataContext)

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
       
    }
    const onLoginChange = (e)=>{
        setLogin({...login , [e.target.name]: e.target.value}) ;
      

    }

    const SignUp = async()=>{
        let response = await SignUpServices(signup);
        if(!response) return;
        onHandleClose();
        setAccount(signup.firstname) ;
       
    }

    const LogIn = async()=>{

        let response = await LogInServices(login) ;
        if(!response) return ;
        onHandleClose();
        setAccount(login.username) ;

    }

    const ImgURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'
    return (

        <Dialog style={{ border: '2px solid red' }} open={open} setOpen={setOpen} onClose={onHandleClose}>
            <Box style={{ width: '85vh', height: '70vh' }}>
                <Box style={{ width: '98%', height: '100%', display: 'flex' , overflow:'hidden' }}>
                    <Box style={{ width: '38%', height: '100%', backgroundColor: '#2874f0' }}>
                        <Typography style={{color:'#fff' , fontSize:'18px' , fontWeight:'200', marginTop:'10%' , padding:'10px 20px'}}>
                            {account.heading}</Typography>
                        <Typography style={{color:'#fff' , fontSize: '14px' , marginTop:'7%', padding:'10px 20px'}}>{account.subHeading}</Typography>
                        <img src={ImgURL} style={{ width: '80%' ,marginTop:'70%' }} alt='img'></img>
                    </Box>
{                        account.view === 'login' ?  
                    <Box style={{ width: '58%', height: '95%', padding:'8px 15px' }}>
                        <TextField id="standard-basic" onChange={(e)=>{onLoginChange(e)}} label="username" name='username' variant="standard" style={{ width: '100%' , marginTop:'8%'}}></TextField>
                        <TextField id="standard-basic" onChange={(e)=>{onLoginChange(e)}} label="Enter Password" name='password' variant="standard" style={{ width: '100%', marginTop: '3%'  }}></TextField>

                      
                            <Typography style={{ width: '100%', fontSize: '13px' ,marginTop:'7%'  }}>By continuing you agree to Flipkart's Terms of Use and Privacy Policy </Typography>
                           
                      

                        <Button variant="contained" onClick={()=> LogIn()} style={{ width: '100%' ,backgroundColor:'#FB641B', color:'#fff', marginTop:'4%', textTransform:'none', cursor:'pointer',  }}  >Login</Button>

                        <Typography style={{width:'100%', marginTop:'6%' , textAlign:'center'}}>OR</Typography>

                        <Button style={{width:'100%' , color:'#2874F0' , textTransform:'none' , textAlign:'center' , marginTop:'5%' , boxShadow:'0 2px 4px 0 rgb(0 0 0 / 20%)' , fontWeight:'700', cursor:'pointer'}}>Request OTP</Button>

                        <Typography onClick={() => toggleSignup()} style={{width:'100%' , color:'#2874F0', marginTop:'15%' , textAlign:'center' , fontWeight:'700' , fontSize:'13px' , cursor:'pointer'}}>New to Flipkart? Create an account</Typography>

                    </Box>
                    :

                    <Box style={{ width: '58%', height: '95%', padding:'8px 15px' }}>
                        <TextField id="standard-basic"  onChange={(e)=>{onInputChange(e)}} label="Enter Firstname" name='firstname' variant="standard" style={{ width: '100%' , marginTop:'8%'}}></TextField>

                        <TextField id="standard-basic" onChange={(e)=>{onInputChange(e)}}  name='lastname' label="Enter Lastname" variant="standard" style={{ width: '100%', marginTop: '3%'  }}></TextField>
                        <TextField id="standard-basic" onChange={(e)=>{onInputChange(e)}}  name='username' label="Enter Username" variant="standard" style={{ width: '100%', marginTop: '3%'  }}></TextField>
                        <TextField id="standard-basic" onChange={(e)=>{onInputChange(e)}}  name='email' label="Enter email" variant="standard" style={{ width: '100%', marginTop: '3%'  }}></TextField>
                        <TextField id="standard-basic" onChange={(e)=>{onInputChange(e)}}  name='password' label="Enter Password" variant="standard" style={{ width: '100%', marginTop: '3%'  }}></TextField>
                        <TextField id="standard-basic" onChange={(e)=>{onInputChange(e)}}  name='mobile' label="Enter Mobile Number" variant="standard" style={{ width: '100%', marginTop: '3%'  }}></TextField>

                        <Button variant="contained" onClick={()=>SignUp()} style={{ width: '100%' ,backgroundColor:'#FB641B', color:'#fff', marginTop:'10%', textTransform:'none', cursor:'pointer',  }}  >Continue</Button>


                    </Box>

}
                </Box>
            </Box>
        </Dialog>

    )
}

export default Login
