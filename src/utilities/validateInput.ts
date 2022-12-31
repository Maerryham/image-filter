export const validateInput = (imageName: string, width: number, height: number) => {
    if (!imageName){
        return { status: false, message: "Image name not specified" }
    }
    
    if (!width){
        return { status: false, message: "Width not specified" }
    }

    if (!height){
        return { status: false, message: "Heigth not specified" }
    }
    
    return { status: true, message: "Value properly formatted" }
}