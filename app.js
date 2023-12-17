import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import router from './routes/pageRoute.js';

dotenv.config();

// connection to the db
conn();

const app = express();
const port = process.env.PORT;

// EJS template Engine

app.set('view engine', 'ejs');

// Static Files middleware
app.use(express.static('public'));

app.use('/', router);

app.listen(port, () => console.log(`Application running on ${port}`));
