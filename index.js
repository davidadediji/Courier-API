const express = require('express');
const parser = require('body-parser');
const cors = require('cors')


const app = express();

app.use(express.json())
app.use(cors())

app.post('/post', (req, res)=>{
    
})


app.listen(3000, (event)=>{
    console.log(event, 'listening at port 3000')
})