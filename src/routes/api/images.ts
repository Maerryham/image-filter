import express from 'express';
import path from 'path';
import { imageResize } from '../../controllers/imageResizer';

const images = express.Router();

images.get('/', async (req, res) => {

  const imageName: string = (req.query.filename) as unknown as string || '';
  const width: number = (req.query.width) as unknown as number || 200;
  const height: number = (req.query.height) as unknown as number || 200;
  const outputFile = path.join(__dirname, `../../assets/thumbs/${imageName}.jpeg`);

 try {
   await imageResize(imageName, width, height);
   res.sendFile(outputFile);
 }
 catch (e) {
  res.status(400).send('Bad Request');
 }

  
});

export default images;
