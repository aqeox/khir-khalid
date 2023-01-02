import React from 'react'

export const coverImages = () => {
 const images = [];

 for (let imagesName = 10001; imagesName < 10012; imagesName++) {
    images.push(`./img/${imagesName}.png`);
 }

 return images;
}


export const workImages = () => {
   const images = [];
   
   for (let imagesName = 10021; imagesName < 10030; imagesName++) {
      images.push(`./img/${imagesName}.png`);
   }
   
   return images;
}