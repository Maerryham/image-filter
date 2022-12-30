import express from 'express';
import * as bodyParser from 'body-parser';


const app = express();


//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

const PORT = 3000;

app.listen(PORT, () => {console.log(`Server is running on http://localhost:${PORT}`)})


//Load Routers
// app.use('/', require('./routes'))
