import React, { useState } from 'react';
import Cards from '../CardJson/RomanceDawn.json';
import CheckboxFilter from '../components/CheckboxFilter';
import ExpandedImage from '../components/ExpandedImage';
import MagnifyingGlass from '../images/magnifying-glass.svg'
import PlusIcon from '../images/plus-icon.svg'
import MinusIcon from '../images/minus-icon.svg'

const DeckBuilder = () => {
  const [expandedImage, setExpandedImage] = useState(null);
  const [zoomCard, setZoomCard] = useState(null)
  const [deckImages, setDeckImages] = useState(Array.from({ length: 51 }, () => []));
  const [gridIndex, setGridIndex] = useState(0);
  const [filteredCards, setFilteredCards] = useState([]);
  
  const handleClick = (imgUrl) => {
    setExpandedImage(imgUrl);
  };

  const handleCloseExpandedImage = () => {
    setZoomCard(null)
  };

  const increment = (deckIndex, cardIndex) => {
    const updatedDeckImages = [...deckImages];
    const card = updatedDeckImages[deckIndex][cardIndex];
    
    if (card.count < 4) {
      card.count += 1;
      setDeckImages(updatedDeckImages); // Update state with the new array
      return deckIndex;
    }
  };
  
  
  const handleAdd = (card, imgUrl) => {
    if (gridIndex < 51) {
      const updatedDeckImages = [...deckImages];
      const currentDeck = [...updatedDeckImages[gridIndex]];
  
      // Check if the card with the same CardNum exists in the deck
      const cardExists = updatedDeckImages.some(deck => deck.some(item => item.CardNum === card.CardNum));

      if (!cardExists) {
        currentDeck.push({ ...card, imgUrl, count: 1 });
          
        updatedDeckImages[gridIndex] = currentDeck;
        setDeckImages(updatedDeckImages);
        setGridIndex((prevIndex) => prevIndex + 1);

        console.log(updatedDeckImages);
        
      } else {
        return null;
      }
    }
  };
  

  const gridItems = deckImages.map((deck, index) => (
    <div key={index} className='grid-item'>
      {deck.map((card, deckIndex) => (
        <div key={deckIndex}>
          {Array.from({ length: card.count }, (_, i) => (
            <div className='deck-cards-container inline'>
              <img
                key={i}
                className='deck-cards'
                src={card.imgUrl}
                alt={`Selected for Deck ${index + 1}`}
              />
              <div className='vertical-grid'>
                <div id='icons-background'>
                  <img  
                    src={MagnifyingGlass} 
                    alt='zoom in'
                    className='card-icons'
                    onClick={() => setZoomCard(card.imgUrl)} 
                  />
                  <img  
                    src={PlusIcon} 
                    alt='add card'
                    className='card-icons'
                    onClick={() => increment(index, deckIndex)}  // Pass deckIndex and cardIndex
                  />

                  <img  
                    src={MinusIcon}
                    alt='minus card'
                    className='card-icons'
                    onClick={() => increment()} 
                  />
                  <div id='count-container'>
                    <span 
                      id='card-count'>
                      {card.count}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  ));

  return (
    <div id='deck-builder-container'>
    <div id='deck-builder-bg'>
      <div id='deck-nav'>
      <span>
        <button 
          className='deck-button'>
            Save
        </button>
        <button 
          className='deck-button'>
            Import
        </button>
        <button 
          className='deck-button'>
            Export
        </button>
        <button 
          className='deck-button'>
            Cost
        </button>
      </span>
      </div>
      <div id='filter-cards-db'>
        <CheckboxFilter id='cards-db' Cards={Cards} setFilteredCards={setFilteredCards} />
      </div>
      <div id='deck'>{gridItems}</div>
      <div id='cards-db'>
        <div className='card-db'>
        {filteredCards.map((card, index) => (
          <img
            className='card-image-db'
            key={index}
            src={card.Img}
            alt={`Card ${index + 1}`}
            onMouseOver={() => handleClick(card.Img)}
            onClick={() => handleAdd(card, card.Img)}
            onMouseLeave={() => handleClick()}
          />
        ))}
        </div>
      </div>
      {expandedImage && (
        <div className='expanded-image-container-db'>
          <img
            src={expandedImage}
            alt='Expanded Image'
            className='expanded-image-db'
            onMouseOver={() => setExpandedImage(null)}
          />
        </div>
      )}  
      
      {zoomCard && (
        <div >
        <ExpandedImage
          className='zoomed-image-container'
          imageUrl={zoomCard} 
          onClose={handleCloseExpandedImage} 
        />
        </div>
      )}
    </div>
    </div>
  );
};

export default DeckBuilder;

