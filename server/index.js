const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const userRouter = require("./routes/user.routes")
app.use(cors())
app.use(express.urlencoded())
app.use(express.json())
app.use(express.static('public'))
app.use("/", userRouter)
require('dotenv').config
let botToken = process.env.TELEGRAM_BOT_TOKEN
let chatId = process.env.TELEGRAM_CHAT_ID

// app.post('/send-data', (req, res)=>{
//     const data = req.body
//     let message = 'New user data received'
    
    
//     res.json({status:200, message: 'Data sent'})
// })
app.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})