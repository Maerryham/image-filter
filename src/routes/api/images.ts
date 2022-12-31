import express from 'express';
import path from 'path';
import { imageResize } from '../../controllers/imageResizer';
import { validateInput } from '../../utilities/validateInput';

const images = express.Router();

images.get('/', async (req, res) => {
  const imageName: string = (req.query.filename as unknown as string) || '';
  const width: number = (Number(req.query.width) as unknown as number) || 0;
  const height: number = (Number(req.query.height) as unknown as number) || 0;
  const outputFile = path.join(__dirname, `../../assets/thumbs/${imageName}.jpeg`);

  // Validate the input data
  const validator = validateInput(imageName, width, height);
 
  if (!validator.status){
    res.status(400).json({
      status: 'error',
      code: '400',
      message: validator.message
    });
  }

  try {
    const resize = await imageResize(imageName, width, height);
    if (!resize) {
      res.status(404).json({
        status: 'error',
        code: '404',
        message: 'Image not found',
      });
    }
    res.sendFile(outputFile);
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      code: '500',
      message: e,
    });
  }
});

export default images;
