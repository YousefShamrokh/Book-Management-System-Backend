const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRouter = require('./routers/users.router')
const bookRouter = require('./routers/books.router')

const app = express()
app.use(bodyParser.json())

const port = 3300
const uri = "" ; //add here the database connection string you want to use
const  connectToDB = async () => {
    try {
       mongoose.set('strictQuery', false)
       mongoose.connect(uri)  
       console.log("🚀 ~ Conected to Mongo DB ~ 🚀")

    } catch(err) {
        console.log("🚀 ~ connectToDB ~ err:", err)
        process.exit()
    }
}


connectToDB()


app.use('/' , userRouter)
app.use('/' , bookRouter)




app.use(function(req,res) {
    res.status(404).send({ url : req.originalUrl + ' not found'})
})



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
