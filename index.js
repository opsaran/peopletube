const express = require('express')
const people = require('./router_people')

const app = express() //creating an instance of express server

const port = process.env.PORT || 3000

//parse json
app.use(express.json())
//parse form data
app.use(express.urlencoded({extended:false}))

//router
app.use('/api/people', people)

//api calls
// app.get('/', (req, res)=>{
// res.status(200).send('hey guys')
// })




//listen instance 
app.listen(port, ()=>{
  console.log(`Server listening on port: ${port}`)
})