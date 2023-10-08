import React, { useState } from 'react';
import ExpandedImage from '../components/ExpandedImage';

export default function PillarsofStrength() {
    const common = [
      "https://product-images.tcgplayer.com/fit-in/437x437/499897.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500065.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499904.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500058.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500081.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500073.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500072.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500084.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500005.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500022.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499882.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500056.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499895.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499888.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499972.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500015.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499976.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499985.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499887.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500039.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500013.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500027.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500026.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500124.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499994.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500021.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499981.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500008.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500007.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499907.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499885.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500035.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499908.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499903.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499899.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500050.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499884.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499896.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500112.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500002.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499909.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500110.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499971.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499983.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499982.jpg"
    ];

    const uncommon = [
      "https://product-images.tcgplayer.com/fit-in/437x437/499880.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500044.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499889.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499979.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499906.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499886.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499975.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500069.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499901.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499894.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500036.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499905.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500105.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499990.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499992.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499898.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499892.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499891.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500102.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499977.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499970.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499978.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500006.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499986.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500095.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500067.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500051.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499883.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500014.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500016.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500042.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500001.jpg"
    ];

    const leader = [
      "https://product-images.tcgplayer.com/fit-in/437x437/498063.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498483.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498481.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498296.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498038.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498253.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/497932.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498485.jpg"
    ];

    const rare = [
      "https://product-images.tcgplayer.com/fit-in/437x437/499980.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500038.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500037.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500107.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500085.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500083.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499910.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498783.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499893.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498861.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500011.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499881.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499900.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500019.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499973.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499997.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499890.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500009.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499902.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500010.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500063.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500054.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500030.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500094.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499988.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499283.jpg"
    ];

    const superRare = [
      "https://product-images.tcgplayer.com/fit-in/437x437/500077.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500092.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500088.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499497.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500017.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499028.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498595.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499399.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500040.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499190.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/501679.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/501677.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/501680.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/501678.jpg"
    ];

    const parallel = [
      "https://product-images.tcgplayer.com/fit-in/437x437/498064.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498484.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498482.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498297.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498039.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498254.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/497934.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498486.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500086.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498784.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498862.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500020.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500033.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499287.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500079.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500093.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500090.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499498.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500018.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499029.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/498597.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499400.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500041.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/499191.jpg"
    ];

    const secret = [
      "https://product-images.tcgplayer.com/fit-in/437x437/500120.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500122.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/501997.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500116.jpg",
      "https://product-images.tcgplayer.com/fit-in/437x437/500118.jpg"
    ];
      
      const [expandedImage, setExpandedImage] = useState(null);
  
      const commonElements = common.map((url, op03C) => (
        <img
          className='card-image'
          key={op03C}
          src={url}
          alt={`${op03C}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const uncommonElements = uncommon.map((url, op03UC) => (
        <img
          className='card-image'
          key={op03UC}
          src={url}
          alt={`${op03UC}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const leaderElements = leader.map((url, op03L) => (
        <img
          className='card-image'
          key={op03L}
          src={url}
          alt={`${op03L}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const rareElements = rare.map((url, op03R) => (
        <img
          className='card-image'
          key={op03R}
          src={url}
          alt={`${op03R}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const superRareElements = superRare.map((url, op03SR) => (
        <img
          className='card-image'
          key={op03SR}
          src={url}
          alt={`${op03SR}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const parallelElements = parallel.map((url, op03P) => (
        <img
          className='card-image'
          key={op03P}
          src={url}
          alt={`${op03P}`}
          onClick={() => setExpandedImage(url)}
        />
      ));

      const secretElements = secret.map((url, op03SEC) => (
        <img
          className='card-image'
          key={op03SEC}
          src={url}
          alt={`${op03SEC}`}
          onClick={() => setExpandedImage(url)}
        />
      ));
    
      const handleCloseExpandedImage = () => {
        setExpandedImage(null);
      };
    
      return (
        <>
          <img className='img-card' src='https://en.onepiece-cardgame.com/images/products/boosters/op03/mv_01.jpg?1' alt='pillars of strength set'></img>
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