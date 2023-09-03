import express from 'express' ;
const router = express.Router() ;
import { SignUpUser  } from '../Controller/SignUpUser.js';
import { LogInUser } from '../Controller/Login-Controller.js';
import { getAllProducts , ProductDetilsById} from '../Controller/Product-Controller.js';


router.post('/signup' , SignUpUser)
router.post('/login' ,LogInUser )

router.get('/products' , getAllProducts)
router.get('/product/:id' , ProductDetilsById)

export default router ;