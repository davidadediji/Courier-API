const express = require('express');
const cors = require('cors');
const calculation = require('./operation')

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post('/',calculation, (req, res) => {
	res.send('Done')
});

app.listen(5005, () => {
	console.log('listening');
});
