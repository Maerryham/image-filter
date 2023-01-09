type ValidateInputResponse = {
    status: boolean;
    message: string;
}
export const validateInput = (imageName: string, width: number, height: number): ValidateInputResponse => {
    if (!imageName || imageName===null || imageName === undefined || imageName===''){
        return { status: false, message: "Image name not specified" }
    }
    
    if (!width || width===null || width === undefined || width===0){
        return { status: false, message: "Width not specified" }
    }

    if (!height || width===null || width === undefined || width===0){
        return { status: false, message: "Heigth not specified" }
    }
    
    return { status: true, message: "Value properly formatted" }
}