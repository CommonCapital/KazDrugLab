'use client';

import { useState } from "react";



const ImageInput = () => {
const [imageFile, setImageFile] = useState<File | null>(null);
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setImageFile(file);


}

const convertImageToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            resolve(reader.result as string);

        };

        reader.onerror = (error) => {
            reject(error);
        };
    });
};




}

export default ImageInput