import express from 'express';

import images from './api/images';

const routes = express.Router();

// const time = 3600;

routes.use('/images', images);

export default routes;
