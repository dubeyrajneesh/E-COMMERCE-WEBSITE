import express from 'express' ;
const PORT = 4000 ;
const app = express() ;
import dotenv from 'dotenv' ;
import mongoose from 'mongoose' ;
import cors from 'cors'
import Default from './Default.js'
import Router from './Routes/Routes.js'
import bodyParser from 'body-parser';



dotenv.config() ;

const USERNAME= process.env.DB_USERNAME;
const PASSWORD= process.env.DB_PASSWORD;

const MONGODB_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@ecommerce.uhyk80s.mongodb.net/ecommerce?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URL , {useNewUrlParser:true});
mongoose.connection.on('connected' , ()=>{
    console.log("DB is connected")
})

mongoose.connection.on('disconnected' , ()=>{
    console.log("Oops DB is disconnected")
})

mongoose.connection.on('error' ,(error)=>{
    console.log("Some error while connecting to DB")
})

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())
app.use('/' , Router) ;



app.listen(PORT, ()=>{
    console.log(`You are on PORT : ${PORT}`)
})
Default() ;