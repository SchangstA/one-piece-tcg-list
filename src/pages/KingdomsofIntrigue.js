import React, { useState } from 'react';
import ExpandedImage from '../components/ExpandedImage';

export default function KingdomsofIntrigue() {
    const common = [
      "https://product-images.tcgplayer.com/fit-in/437x437/516759.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516777.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516806.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516768.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516811.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516815.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516816.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516798.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516807.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516750.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516751.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516756.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516748.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516823.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516767.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516743.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516764.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516791.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516760.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516730.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516731.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516747.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516780.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516782.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516787.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516738.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516739.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516792.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516793.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516808.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516771.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516819.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516821.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516822.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516770.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516733.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516796.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516758.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516776.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516818.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516737.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516799.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516745.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516790.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516783.jpg"
    ];

    const uncommon = [
      "https://product-images.tcgplayer.com/fit-in/437x437/516752.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516817.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516824.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516773.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516744.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516746.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516757.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516804.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516794.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516800.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516820.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516774.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516766.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516813.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516732.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516754.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516802.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516753.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516740.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516784.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516785.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516786.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516789.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516769.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516763.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516765.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516797.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516735.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516809.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516729.jpg"
    ];

    const leader = [
      "https://product-images.tcgplayer.com/fit-in/437x437/511765.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/510896.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/510995.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/510762.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/511397.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/510993.jpg"
    ];

    const rare = [
      "https://product-images.tcgplayer.com/fit-in/437x437/516742.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516801.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515280.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516795.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516734.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516814.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516788.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/512959.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516779.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516772.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516825.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516728.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516812.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516762.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514436.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516781.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514253.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516810.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516803.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516741.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516749.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516755.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/513306.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516805.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516761.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514030.jpg"
    ];

    const superRare = [
      "https://product-images.tcgplayer.com/fit-in/437x437/514247.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/513464.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/513822.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515278.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514245.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/512612.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514543.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515282.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/512875.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515309.jpg"
    ];

    const parallel = [
      "https://product-images.tcgplayer.com/fit-in/437x437/511766.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/510897.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/510996.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/510774.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/511401.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/510994.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515281.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/512961.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514437.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/513308.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514031.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514248.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/513466.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/513823.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515279.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514246.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/512613.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/514544.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516558.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515283.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/512876.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515310.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516555.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516553.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516556.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516557.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/516554.jpg"
    ];

    const secret = [
      "https://product-images.tcgplayer.com/fit-in/437x437/515594.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515848.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515312.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/515333.jpg"
    ];
      
      const [expandedImage, setExpandedImage] = useState(null);
  
      const commonElements = common.map((url, op04C) => (
        <img
          className='card-image'
          key={op04C}
          src={url}
          alt={`${op04C}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const uncommonElements = uncommon.map((url, op04UC) => (
        <img
          className='card-image'
          key={op04UC}
          src={url}
          alt={`${op04UC}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const leaderElements = leader.map((url, op04L) => (
        <img
          className='card-image'
          key={op04L}
          src={url}
          alt={`${op04L}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const rareElements = rare.map((url, op04R) => (
        <img
          className='card-image'
          key={op04R}
          src={url}
          alt={`${op04R}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const superRareElements = superRare.map((url, op04SR) => (
        <img
          className='card-image'
          key={op04SR}
          src={url}
          alt={`${op04SR}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const parallelElements = parallel.map((url, op04P) => (
        <img
          className='card-image'
          key={op04P}
          src={url}
          alt={`${op04P}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const secretElements = secret.map((url, op04SEC) => (
        <img
          className='card-image'
          key={op04SEC}
          src={url}
          alt={`${op04SEC}`}
          onClick={() => setExpandedImage(url)}
        />
      ));
    
      const handleCloseExpandedImage = () => {
        setExpandedImage(null);
      };
    
      return (
        <>
          <img className='img-card' src='https://en.onepiece-cardgame.com/images/products/boosters/op04/mv_01.jpg?2' alt='pillars of strength set'></img>
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