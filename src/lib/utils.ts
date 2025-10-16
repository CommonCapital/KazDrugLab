import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const handleError = (error:unknown) => {
  if (error instanceof Error) {
    console.error(error.message)
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === 'string') {
    console.error(error);
    throw new Error(`Error: ${error}`)
  } else {
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`)
  }
};

export const resizeBase64Img = (
  base64Str: any,
  maxWidth = 100,
 maxHeight = 100,

) => {
return new Promise((resolve) => {
  const image = new Image();
  image.src = base64Str;
  image.onload = () => {
    const canvas = document.createElement('canvas');
    let width = image.width;
    let height = image.height;
    if (width > height) {
      if (width > maxWidth) {
      height = Math.round((height * maxWidth) / width);
      width = maxWidth;
      }
    } else {
      if (height > maxHeight) {
        width = Math.round((width * maxHeight) / height);
        height = maxHeight;
      }
    }


       canvas.width = width;
       canvas.height = height;


       const ctx = canvas.getContext('2d') as any;
       ctx.drawImage(image, 0, 0, width, height);
       const newBaseStr = canvas.toDataURL("image/jpeg", 0.7);
       resolve(newBaseStr);
  }
})
}