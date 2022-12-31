import sharp from 'sharp';
import path from 'path';

export const imageResize = async (imageName: string, width: number, height: number) => {
    
    try {

        const inputFile = path.join(__dirname, `../../assets/full/${imageName}.jpeg`);
        const outputFile = path.join(__dirname, `../../assets/thumbs/${imageName}.jpeg`);
  
        await sharp(inputFile)
            .resize(width, height)
            .toFile(outputFile);
        return outputFile;
    }catch(err){
        console.log(err);
    }

    
};