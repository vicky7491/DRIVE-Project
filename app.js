const express = require('express');     //require express
const userRouter = require('./routes/user.routes')      //require user.routes file
const dotenv = require('dotenv');
dotenv.config();
const connectToDB = require('./config/db')      //connect to database
const cookieParser = require('cookie-parser');
connectToDB();
const app = express();                  //storing express in app variable
const indexRouter = require('./routes/index.routes')



app.set('view engine', 'ejs')           //setting the view engine ejs also create a views folder
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))


app.use('/', indexRouter)
app.use('/user', userRouter)            //using the userRouter


app.listen(3000, ()=>{                  //server is run on port:3000
    console.log('server is running on port 3000')
})


