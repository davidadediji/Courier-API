const express = require('express');
const cors = require('cors')

const app = express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.post('/grade', (req, res, next)=>{
    const {operation_type, x, y} = req.body
    console.log(operation_type, x, y)
})

app.listen()