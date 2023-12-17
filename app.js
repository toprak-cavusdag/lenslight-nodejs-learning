import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import router from './routes/pageRoute.js';
import photoRoute from './routes/photoRoute.js';

dotenv.config();

// connection to the db
conn();

const app = express();
const port = process.env.PORT;

// EJS template Engine

app.set('view engine', 'ejs');

// Static Files middleware
app.use(express.static('public'));
app.use(express.json());

app.use('/', router);
app.use('/photos', photoRoute);

app.listen(port, () => console.log(`Application running on ${port}`));
