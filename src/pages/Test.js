import React, { useState } from 'react';
import ExpandedImage from '../components/ExpandedImage';

export default function Test() {
      
      const [expandedImage, setExpandedImage] = useState(null);
    
      const handleCloseExpandedImage = () => {
        setExpandedImage(null);
      };
    
      return (
        <>
          <img className='img-card' src='https://en.onepiece-cardgame.com/images/products/other/dp02/mv_01.jpg?v' alt='test'></img>

          {/* Render the expanded image if one is selected */}
          {expandedImage && (
            <ExpandedImage imageUrl={expandedImage} onClose={handleCloseExpandedImage} />
          )}
        </>
      );
    }