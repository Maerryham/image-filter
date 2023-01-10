import express from 'express';
import imageRoute from './api/images';

const routes = express.Router();



routes.use('/images', imageRoute);

export default routes;
