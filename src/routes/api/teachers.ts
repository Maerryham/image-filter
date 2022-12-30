import express from 'express';
const teachers = express.Router()


teachers.get('/api', (req, res) => {
    res.send('Hello World!');
});

export default teachers;