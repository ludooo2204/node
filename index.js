const express = require('express')
const app = express()
const port = 3000
const testRouter = express.Router();
testRouter.get('/',(req,res)=>{console.log(req, res);res.send('photo!')})
app.get('/',(req,res)=>{
    res.send('Hello world!')
})
app.use('/photo',testRouter)
app.listen(port, ()=>{
    console.log("exemple d'app fonctionnant sur le port",port)
})