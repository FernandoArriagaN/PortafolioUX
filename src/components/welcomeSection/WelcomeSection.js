import { useState } from "react";
import FallingImages from "./FallingStars/index";
import start from './img/Vector.svg';


export const WelcomeSection = () => {
  const filtersCustom = [
    /*'brightness(0) saturate(100%) invert(88%) sepia(18%) saturate(383%) hue-rotate(170deg) brightness(97%) contrast(92%)'*/
    'brightness(0) saturate(100%) invert(85%) sepia(39%) saturate(618%) hue-rotate(162deg) brightness(91%) contrast(120%)'
   /* 'sepia(100%) saturate(100%) hue-rotate(0deg)',
    'sepia(100%) saturate(100%) hue-rotate(60deg)',
    'sepia(100%) saturate(100%) hue-rotate(120deg)',
   // 'sepia(100%) saturate(600%) hue-rotate(180deg)', blancas
    'sepia(100%) saturate(100%) hue-rotate(240deg)',
    'sepia(100%) saturate(100%) hue-rotate(300deg)',*/
  ];

  const startCount = 46; 
  
  const [images] = useState(
    Array(startCount).fill(start)
  );
  
  //Repetir los colores si hay más imágenes que colores
  const [filters] = useState(
    Array(startCount).fill(0).map((_, i) => 
      filtersCustom[i % filtersCustom.length]
    )
  );
  
  const [key] = useState(0);

  return (
    
      <FallingImages
        key={key}
        images={images}
        filters={filters}
        gravity={0.56}
        mouseConstraintStiffness={0.9}
        imageSize={80}
        
      />
  );
};
