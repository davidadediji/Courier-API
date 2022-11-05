const logger = (req, res, next) => {
    console.log(req.httpVersion)
	const method = req.method;
	const url = req.url;
	const time = new Date().getFullYear();

	console.log(method, url, time);
	// res.send('testing')
	next();

	//when working with a middleware always pass next() unless you are send the response
};

module.exports = logger;