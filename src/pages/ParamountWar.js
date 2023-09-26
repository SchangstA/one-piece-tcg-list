import React, { useState } from 'react';
import ExpandedImage from '../components/ExpandedImage';

export default function ParamountWar() {
    const paramountWar = [
        "https://product-images.tcgplayer.com/fit-in/437x437/485862.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/483470.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/484476.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/482429.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/483627.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/483628.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/482337.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/484134.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/486333.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/485456.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/483629.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/485087.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/485162.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/485861.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/485255.jpg",
      ];
      
      const [expandedImage, setExpandedImage] = useState(null);
  
      const imageElements = paramountWar.map((url, op02) => (
        <img
          className='card-image'
          key={op02}
          src={url}
          alt={`${op02}`}
          onClick={() => setExpandedImage(url)}
        />
      ));
    
      const handleCloseExpandedImage = () => {
        setExpandedImage(null);
      };
    
      return (
        <>
          <h1>PARAMOUNT WAR</h1>
          <h3>SETLIST</h3>
          <div className='card'>{imageElements}</div>
    
          {/* Render the expanded image if one is selected */}
          {expandedImage && (
            <ExpandedImage imageUrl={expandedImage} onClose={handleCloseExpandedImage} />
          )}
        </>
      );
    }