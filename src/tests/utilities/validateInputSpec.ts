import { validateInput } from '../../utilities/validateInput';

describe('validateInput', () => {
    let width: number;
    let height: number;

    it('Should return error when image name is not specified', () => {
      const imageName = ''; const width = 200; const height = 200;
      const result =  validateInput(imageName, width, height);
      expect(result).toEqual({status: false, message: 'Image name not specified'});
    });
  
    it('Should return error when image heigth is not specified', () => {
        const imageName = 'garden'; const width = 200;
      const result =  validateInput(imageName, width, height);
      expect(result).toEqual({status: false, message: 'Heigth not specified'});
    });
  
    it('Should return error when image width is not specified', () => {
        const imageName = 'garden'; const height = 200;
      const result =  validateInput(imageName, width, height);
      expect(result).toEqual({status: false, message: 'Width not specified'});
    });
  });
  