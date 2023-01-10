"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var imageResizer_1 = require("../../controllers/imageResizer");
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
describe('imageResize', function () {
    it('Should check if sharp resized the image', function () {
        var imageName = '';
        var width = 200;
        var height = 200;
        var result = (0, imageResizer_1.imageResize)(imageName, width, height);
        var inputFile = path_1.default.join(__dirname, "../assets/full/".concat(imageName, ".jpeg"));
        var outputFile = path_1.default.join(__dirname, "../assets/thumbs/".concat(imageName, "_").concat(width, "_").concat(height, ".jpeg"));
        if (fs_1.default.existsSync(inputFile))
            expect(fs_1.default.existsSync(outputFile)).toBeTruthy();
    });
});
