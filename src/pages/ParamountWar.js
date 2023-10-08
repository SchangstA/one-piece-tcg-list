import React, { useState } from 'react';
import ExpandedImage from '../components/ExpandedImage';

export default function ParamountWar() {
    const common = [
      "https://product-images.tcgplayer.com/fit-in/437x437/482426.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/483094.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486451.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486391.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486392.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486407.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486485.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486438.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/483093.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486441.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486486.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486394.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486361.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486489.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486393.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486460.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486404.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486487.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486477.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486353.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/482706.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486471.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486382.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486340.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486336.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486344.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486399.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486359.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486408.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486371.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486416.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486483.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486425.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486455.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486480.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485243.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/482707.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486375.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486355.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486348.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486458.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486374.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486493.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486546.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486343.jpg"
    ];

    const uncommon = [
      "https://product-images.tcgplayer.com/fit-in/437x437/486405.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486396.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486490.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486398.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486445.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/482425.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486433.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486378.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486395.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486436.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486491.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486457.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486494.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486347.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486464.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486351.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486335.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486453.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486454.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486400.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486401.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486357.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486467.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486339.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486352.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486332.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486354.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486484.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486342.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486334.jpg"
    ];

    const leader = [
      "https://product-images.tcgplayer.com/fit-in/437x437/482424.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486387.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486345.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486410.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/482705.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486346.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486462.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485239.jpg"
    ];

    const rare = [
      "https://product-images.tcgplayer.com/fit-in/437x437/486363.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486397.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486349.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486406.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486448.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486488.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486389.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/482704.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486456.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486474.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486413.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486338.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486337.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486547.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486492.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486367.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486402.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486403.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486380.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486341.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486482.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486419.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486422.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486481.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/483095.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486369.jpg"
    ];

    const superRare = [
      "https://product-images.tcgplayer.com/fit-in/437x437/485246.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/482423.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486390.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486350.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486468.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486452.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485238.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486356.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485235.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485242.jpg"
    ];

    const parallel = [
      "https://product-images.tcgplayer.com/fit-in/437x437/483470.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/483949.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/483629.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/484134.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/483627.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/483628.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/484476.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/484314.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485813.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485457.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485863.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485864.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/484822.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/482337.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485087.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485861.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485812.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/484627.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485162.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485459.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485814.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/482429.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/486333.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485862.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485255.jpg"
    ];

    const secret = [
      "https://product-images.tcgplayer.com/fit-in/437x437/485397.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/485456.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/482718.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/483360.jpg"
    ];
      
      const [expandedImage, setExpandedImage] = useState(null);
  
      const commonElements = common.map((url, op02C) => (
        <img
          className='card-image'
          key={op02C}
          src={url}
          alt={`${op02C}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const uncommonElements = uncommon.map((url, op02UC) => (
        <img
          className='card-image'
          key={op02UC}
          src={url}
          alt={`${op02UC}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const leaderElements = leader.map((url, op02L) => (
        <img
          className='card-image'
          key={op02L}
          src={url}
          alt={`${op02L}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const rareElements = rare.map((url, op02R) => (
        <img
          className='card-image'
          key={op02R}
          src={url}
          alt={`${op02R}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const superRareElements = superRare.map((url, op02SR) => (
        <img
          className='card-image'
          key={op02SR}
          src={url}
          alt={`${op02SR}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const parallelElements = parallel.map((url, op02P) => (
        <img
          className='card-image'
          key={op02P}
          src={url}
          alt={`${op02P}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const secretElements = secret.map((url, op02SEC) => (
        <img
          className='card-image'
          key={op02SEC}
          src={url}
          alt={`${op02SEC}`}
          onClick={() => setExpandedImage(url)}
        />
      ));
    
      const handleCloseExpandedImage = () => {
        setExpandedImage(null);
      };
    
      return (
        <>
          <img className='img-card' src='https://en.onepiece-cardgame.com/images/products/boosters/op02/mv_01.jpg?v03' alt='paramount war set'></img>
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
            <ExpandedImage imageUrl={expandedImage} onClose={handleCloseExpandedImage} />
          )}
        </>
      );
    }