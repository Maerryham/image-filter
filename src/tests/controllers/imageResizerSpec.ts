import { imageResize } from '../../controllers/imageResizer'
import path from 'path';
import fs from 'fs';

describe('imageResize', () => {

    it('Should check if sharp resized the image', () => {
      const imageName = 'garden'; const width = 200; const height = 200;
       const inputFile = path.join(__dirname, `../assets/full/${imageName}.jpeg`);
      const outputFile = path.join(__dirname, `../assets/thumbs/${imageName}_${width}_${height}.jpeg`);
      if(fs.existsSync(inputFile)) {
        // Resize the image
        imageResize(imageName, width, height);
        // Check the resized image is created by sharp
        expect(fs.existsSync(outputFile)).toBeTruthy();
      } 
    });

});