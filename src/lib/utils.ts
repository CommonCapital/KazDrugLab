import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
function safeStringify(obj: unknown): string {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        return; // Avoid circular reference
      }
      cache.add(value);
    }
    // Convert non-serializable values (like functions, undefined) to string
    if (typeof value === "function" || value === undefined) {
      return String(value);
    }
    return value;
  }, 2);
}

export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    console.error("Error instance:", error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    console.error("String error:", error);
    throw new Error(`Error: ${error}`);
  } else {
    // ✅ Safely stringify complex/circular objects
    const errorMessage = safeStringify(error);
    console.error("Unknown error:", errorMessage);
    throw new Error(`Unknown error: ${errorMessage}`);
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


