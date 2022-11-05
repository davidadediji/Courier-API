const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const calculation = require('./operation')

dotenv.config()

const port = process.env.PORT || 5000

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.post('/',calculation, (req, res) => {
	res.send('Done')
});

app.listen(port, () => {
	console.log('listening on %d', port );
});
