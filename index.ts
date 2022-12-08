import express, { Application } from 'express';
import axios from 'axios';
import cors from 'cors';
import { port, url } from './config/env';
import { dbConnect } from './src/db/connect';



const app:Application = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.listen(port, () => {
	console.log('listening on %d', port );
	dbConnect(url)
});
