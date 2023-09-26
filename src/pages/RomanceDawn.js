import React, { useState } from 'react';
import ExpandedImage from '../components/ExpandedImage';

export default function RomanceDawn() {
    const romanceDawn = [
        "https://product-images.tcgplayer.com/fit-in/437x437/454666.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454513.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454514.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454536.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/453511.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454586.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454609.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454587.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/453506.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/453515.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454603.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454589.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454599.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454669.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454552.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454623.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454530.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/453509.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454665.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454576.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454627.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454667.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454571.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454598.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/453520.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/453510.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454630.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454594.jpg",
        "https://product-images.tcgplayer.com/fit-in/437x437/454626.jpg"
      ];
      
      const [expandedImage, setExpandedImage] = useState(null);
  
      const imageElements = romanceDawn.map((url, op01) => (
        <img
          className='card-image'
          key={op01}
          src={url}
          alt={`${op01}`}
          onClick={() => setExpandedImage(url)}
        />
      ));
    
      const handleCloseExpandedImage = () => {
        setExpandedImage(null);
      };
    
      return (
        <>
          <h1>ROMANCE DAWN</h1>
          <h3>SETLIST</h3>
          <div className='card'>{imageElements}</div>
    
          {/* Render the expanded image if one is selected */}
          {expandedImage && (
            <ExpandedImage imageUrl={expandedImage} onClose={handleCloseExpandedImage} />
          )}
        </>
      );
    }