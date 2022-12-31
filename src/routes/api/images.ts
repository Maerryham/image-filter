import express from 'express';
import path from 'path';
import { imageResize } from '../../controllers/imageResizer';

const images = express.Router();

images.get('/', async (req, res) => {

  const imageName: string = (req.query.filename) as unknown as string || '';
  const width: number = Number(req.query.width) as unknown as number || 200;
  const height: number =  Number(req.query.height) as unknown as number || 200;
  const outputFile = path.join(__dirname, `../../assets/thumbs/${imageName}.jpeg`);

 try {
   const resize = await imageResize(imageName, width, height);
   if (!resize) {
    res.status(404).json({
      status: 'error',
      code: '404',
      message: 'image not found'
    })
  }
   res.sendFile(outputFile);
 }
 catch (e) {
  res.status(400).send('Bad Request');
 }

  
});

export default images;
