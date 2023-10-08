import React from 'react';

function ExpandedImage({ imageUrl, onClose, onPrev, onNext }) {
  return (
    <div className='expanded-image-overlay'>
      <div
      className='on-close-btn'
      onClick={onClose}>X
      </div>
      <div 
      className='prev-btn' 
      onClick={onPrev}>       
      </div>
      <div className='expanded-image-container'>
        <img src={imageUrl} alt='' />
      </div>
      <div 
      className='next-btn'
      onClick={onNext}>
      </div>
    </div>
  );
}

export default ExpandedImage;