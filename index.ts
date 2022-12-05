import express, { Application } from 'express';
import axios from 'axios';
import { port } from './config/env';
import cors from 'cors';



const app:Application = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.listen(port, () => {
	console.log('listening on %d', port );
});
