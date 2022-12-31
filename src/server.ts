import express from 'express';
import * as bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import routes from './routes/index';

const app = express();


// parse application/json
app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


//Log request
app.use(morgan('tiny'));

app.use(cors());

//Load Routers
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

