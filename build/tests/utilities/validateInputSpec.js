"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validateInput_1 = require("../../utilities/validateInput");
describe('validateInput', function () {
    var width;
    var height;
    it('Should return error when image name is not specified', function () {
        var imageName = '';
        var width = 200;
        var height = 200;
        var result = (0, validateInput_1.validateInput)(imageName, width, height);
        expect(result).toEqual({ status: false, message: 'Image name not specified' });
    });
    it('Should return error when image heigth is not specified', function () {
        var imageName = 'garden';
        var width = 200;
        var result = (0, validateInput_1.validateInput)(imageName, width, height);
        expect(result).toEqual({ status: false, message: 'Heigth not specified' });
    });
    it('Should return error when image width is not specified', function () {
        var imageName = 'garden';
        var height = 200;
        var result = (0, validateInput_1.validateInput)(imageName, width, height);
        expect(result).toEqual({ status: false, message: 'Width not specified' });
    });
});
