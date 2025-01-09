import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
const app = express();
const PORT = 5000;

// middleware
app.use(express.json())
// app.use(express.urlencoded(true))
app.use(cors('*'))


// db connection

mongoose.connect('mongodb+srv://kifito3954:Y8UP20Dc4aVEtyKw@blood-donor.e4vij.mongodb.net/').then(()=>{
    console.log('db connected');
}).catch((err)=>{
    console.log(err);
 
})
// routes
app.get('/', (req , res)=>{
    res.send("hello world")
})
app.listen(PORT ,  ()=>{
    console.log('server is running' ,PORT);
    
})