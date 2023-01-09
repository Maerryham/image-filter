import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import { imageResize } from '../../controllers/imageResizer';
import { validateInput } from '../../utilities/validateInput';
import fs from 'fs'

const images = express.Router();
type ImageResponse = {
  status: string,
  code: string,
  message: string,
}

images.get('/', async (req: Request, res: Response): Promise<Response<ImageResponse> | Promise<unknown>> => {
  const imageName: string = (req.query.filename as unknown as string) || '';
  const width: number = (Number(req.query.width) as unknown as number) || 0;
  const height: number = (Number(req.query.height) as unknown as number) || 0;
  const outputFile = path.join(__dirname, `../../assets/thumbs/${imageName}_${width}_${height}.jpeg`);

  // Validate the input data
  const validator = validateInput(imageName, width, height);
 
  if (!validator.status){
    return res.status(400).json({
      status: 'error',
      code: '400',
      message: validator.message
    });
  }

  if (fs.existsSync(outputFile)){
    return res.sendFile(outputFile);
  }

  try {
    const resize = await imageResize(imageName, width, height);
    
    if (!resize) {
      return res.status(404).json({
        status: 'error',
        code: '404',
        message: 'Image not found',
      });
    }
    return res.sendFile(outputFile);
  } catch (e) {
    return res.status(500).json({
      status: 'error',
      code: '500',
      message: e,
    });
  }
});

export default images;
