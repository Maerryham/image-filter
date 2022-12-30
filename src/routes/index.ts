import express from 'express';

import teachers from './api/teachers';

const routes = express.Router();


routes.use('/teachers', teachers);

export default routes;