const express = require('express');     //require express
const userRouter = require('./routes/user.routes')      //require user.routes file
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db')      //connect to database
connectToDB();
const app = express();                  //storing express in app variable
app.set('view engine', 'ejs')           //setting the view engine ejs also create a views folder
app.use(express.json())
app.use(express.urlencoded({extended: true}))



app.use('/user', userRouter)            //using the userRouter

app.listen(3000, ()=>{                  //server is run on port:3000
    console.log('server is running on port 3000')
})


