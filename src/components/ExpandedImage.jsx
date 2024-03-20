import React from 'react';

function ExpandedImage({ imageUrl, onClose }) {
  return (
    <div 
      className='expanded-image-overlay' onClick={onClose}>
    <div className='expanded-image-container'>
      <img src={imageUrl} alt='' />
    </div>
    </div>
  );
}

export default ExpandedImage;