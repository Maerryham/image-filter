import sharp from 'sharp';
import path from 'path';

export const imageResize = async (imageName: string, width: number, height: number): Promise<unknown> => {
  try {
    console.log(imageName, width, height);
    const inputFile = path.join(__dirname, `../assets/full/${imageName}.jpeg`);
    const outputFile = path.join(__dirname, `../../assets/thumbs/${imageName}_${width}_${height}.jpeg`);

    return await sharp(inputFile).resize(width, height).toFile(outputFile);
  } catch (err) {
    console.log('Not Resized', err);
  }
};
