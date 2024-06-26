import React, { useState } from 'react';
import ExpandedImage from '../components/ExpandedImage';

export default function RomanceDawn() {
    const common = [
      "https://product-images.tcgplayer.com/fit-in/437x437/454591.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454643.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454641.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454542.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454584.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454606.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454519.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454522.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454520.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454620.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454659.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454645.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454549.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454540.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454651.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454543.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454555.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454569.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454562.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454560.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454525.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454593.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454635.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454634.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454546.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454611.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454612.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454613.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454572.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454618.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454558.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454605.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454574.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454548.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454527.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454639.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454568.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454661.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454567.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454601.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454640.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454624.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454592.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454578.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454580.jpg"
    ];

    const uncommon = [
      "https://product-images.tcgplayer.com/fit-in/437x437/454590.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454660.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454553.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454621.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454642.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454545.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454581.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454619.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454544.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454526.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/455808.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453512.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454554.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454532.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454563.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454566.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454633.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454628.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454614.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454615.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454616.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454518.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454582.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454607.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454550.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454577.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454636.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454533.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454662.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454644.jpg"
    ];

    const leader = [
      "https://product-images.tcgplayer.com/fit-in/437x437/454588.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454585.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453517.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454622.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454551.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454515.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454512.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453505.jpg"
    ];

    const rare = [
      "https://product-images.tcgplayer.com/fit-in/437x437/454604.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454573.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454646.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454597.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454570.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454602.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454596.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454547.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454637.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454600.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454565.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454610.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454534.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454538.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454556.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454617.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454648.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454583.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454631.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454529.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454663.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454625.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454516.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454517.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454579.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454652.jpg"
    ];

    const superRare = [
      "https://product-images.tcgplayer.com/fit-in/437x437/454608.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453519.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454598.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454575.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453521.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453514.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454629.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453508.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453510.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454571.jpg"
    ];

    const parallel = [
      "https://product-images.tcgplayer.com/fit-in/437x437/454589.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454586.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454587.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454623.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454552.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453506.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454513.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454514.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454603.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454638.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454536.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454632.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454530.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454626.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454609.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454594.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454599.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454576.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454627.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454564.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454630.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453509.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453511.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/453515.jpg"
    ];

    const secret = [
      "https://product-images.tcgplayer.com/fit-in/437x437/454664.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454665.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454666.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454667.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/454669.jpg"
    ];
      
      const allCardArrays = [common, uncommon, leader, rare, superRare, parallel, secret];
      const [currentCardArrayIndex, setCurrentCardArrayIndex] = useState(0);

      const [expandedImage, setExpandedImage] = useState(null);
      const [currentImageIndex, setCurrentImageIndex] = useState(null);

      const commonElements = common.map((url, index) => {
        return (
          <img
            className='card-image'
            key={index}
            src={url}
            alt={`${index}`}
            onClick={() => {
              setExpandedImage(url);
              setCurrentImageIndex(index);
              setCurrentCardArrayIndex(0);
            }}
          />
        );
      });

      const uncommonElements = uncommon.map((url, index) => {
        return (
          <img
            className='card-image'
            key={index}
            src={url}
            alt={`${index}`}
            onClick={() => {
              setExpandedImage(url);
              setCurrentImageIndex(index);
              setCurrentCardArrayIndex(1);
            }}
          />
        );
      });
      
      const leaderElements = leader.map((url, index) => {
        return (
          <img
            className='card-image'
            key={index}
            src={url}
            alt={`${index}`}
            onClick={() => {
              setExpandedImage(url);
              setCurrentImageIndex(index);
              setCurrentCardArrayIndex(2);
            }}
          />
        );
      });

      const rareElements = rare.map((url, index) => {
        return (
          <img
            className='card-image'
            key={index}
            src={url}
            alt={`${index}`}
            onClick={() => {
              setExpandedImage(url);
              setCurrentImageIndex(index);
              setCurrentCardArrayIndex(3);
            }}
          />
        );
      });

      const superRareElements = superRare.map((url, index) => {
        return (
          <img
            className='card-image'
            key={index}
            src={url}
            alt={`${index}`}
            onClick={() => {
              setExpandedImage(url);
              setCurrentImageIndex(index);
              setCurrentCardArrayIndex(4);
            }}
          />
        );
      });

      const parallelElements = parallel.map((url, index) => {
        return (
          <img
            className='card-image'
            key={index}
            src={url}
            alt={`${index}`}
            onClick={() => {
              setExpandedImage(url);
              setCurrentImageIndex(index);
              setCurrentCardArrayIndex(5);
            }}
          />
        );
      });

      const secretElements = secret.map((url, index) => {
        return (
          <img
            className='card-image'
            key={index}
            src={url}
            alt={`${index}`}
            onClick={() => {
              setExpandedImage(url);
              setCurrentImageIndex(index);
              setCurrentCardArrayIndex(6);
            }}
          />
        );
      });
    
      const handleCloseExpandedImage = () => {
        setExpandedImage(null)
      };

      const handlePrevExpandedImage = () => {
        if (currentImageIndex !== null && currentImageIndex >= 0) {
          const newIndex = currentImageIndex - 1;
          if (newIndex >= 0) {
            setExpandedImage(allCardArrays[currentCardArrayIndex][newIndex]);
            setCurrentImageIndex(newIndex);
          } else {
            // If at the beginning of the current array, go to the previous array
            const prevArrayIndex = (currentCardArrayIndex - 1 + allCardArrays.length) % allCardArrays.length;
            setCurrentCardArrayIndex(prevArrayIndex);
            const lastIndexInPrevArray = allCardArrays[prevArrayIndex].length - 1;
            setExpandedImage(allCardArrays[prevArrayIndex][lastIndexInPrevArray]);
            setCurrentImageIndex(lastIndexInPrevArray);
          }
        }
      };
    
      const handleNextExpandedImage = () => {
          if (currentImageIndex !== null && currentImageIndex >= 0 && currentCardArrayIndex !==null) {
          const newIndex = currentImageIndex + 1;
          if (newIndex < allCardArrays[currentCardArrayIndex].length) {
            setExpandedImage(allCardArrays[currentCardArrayIndex][newIndex]);
            setCurrentImageIndex(newIndex);
          } else {
            // If at the end of the current array, go to the next array
            const nextArrayIndex = (currentCardArrayIndex + 1) % allCardArrays.length;
            setCurrentCardArrayIndex(nextArrayIndex);
            setExpandedImage(allCardArrays[nextArrayIndex][0]);
            setCurrentImageIndex(nextArrayIndex);
          }
        }
      };
      
      return (
        <>
          <img className='img-card' src='https://en.onepiece-cardgame.com/images/products/boosters/op01/mv_01.jpg?v3' alt='romance dawn set'></img>
          <ul className='rarity-links'>
            <li><a className='rarity-btn' href='#common'><button className='button'>Common</button></a></li>
            <li><a className='rarity-btn' href='#uncommon'><button className='button'>Uncommon</button></a></li>
            <li><a className='rarity-btn' href='#leader'><button className='button'>Leader</button></a></li>
            <li><a className='rarity-btn' href='#rare'><button className='button'>Rare</button></a></li>
            <li><a className='rarity-btn' href='#superRare'><button className='button'>Super Rare</button></a></li>
            <li><a className='rarity-btn' href='#parallel'><button className='button'>Parallel</button></a></li>
            <li><a className='rarity-btn' href='#secret'><button className='button'>Secret Rare</button></a></li>
          </ul>

          <h2 id="common">
            Common
          </h2>
          <div className='card'>{commonElements}</div>
          <h2 id="uncommon">
            Uncommon
          </h2>
          <div className='card'>{uncommonElements}</div>
          <h2 id="leader">
            Leader
          </h2>
          <div className='card'>{leaderElements}</div>
          <h2 id="rare">
            Rare
          </h2>
          <div className='card'>{rareElements}</div>
          <h2 id="superRare">
            Super Rare
          </h2>
          <div className='card'>{superRareElements}</div>
          <h2 id="parallel">
            Parallel
          </h2>
          <div className='card'>{parallelElements}</div>
          <h2 id="secret">
            Secret
          </h2>
          <div className='card'>{secretElements}</div>
          
          {/* Render the expanded image if one is selected */}
          {expandedImage && (
            <ExpandedImage 
            imageUrl={expandedImage} 
            onClose={handleCloseExpandedImage} 
            onPrev={handlePrevExpandedImage} 
            onNext={handleNextExpandedImage}/>
          )}
        </>
      );
    }