const express = require('express');

const app = express();
let { people } = require('./data');

//static assert
app.use(express.static('./public'));

//parse form data
app.use(express.urlencoded({ extended: false }));

//parse json data
app.use(express.json());

app.get('/api/people', (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.post('/login', (req, res) => {
	console.log(req.body);

	const { name } = req.body;
	if (name) {
		return res.status(201).json({ success: true, data: name });
	}
	res
		.status(401)
		.json({ success: false, data: name, info: 'provide a valid credential' });
});

app.listen(5000, () => {
	console.log('listening on port 5000');
});
