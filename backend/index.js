import express from "express";
const app = express();
const PORT = 5000;
// routes
app.get('/', (req , res)=>{
    res.send("hello world")
})
app.listen(PORT ,  ()=>{
    console.log('server is running' ,PORT);
    
})
// some things went wrong form my code 
// KSDJFLSJDALFJLSADKFJ 
// MERGE WITH MAIN