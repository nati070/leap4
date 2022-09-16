const express = require('express')
const cors = require('cors')
require('dotenv').config();
require('./configuretion/mongoConfig')
const app = express()

app.use(cors({
    origin : "*"
}))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));  

app.use('/api' , require('./routes/api'))

app.listen(process.env.PORT,(err)=>{
    if(err) console.err("problem to connect the server")
    console.log("connected")
})  



