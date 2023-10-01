import React from 'react';

export default function Home() {
    const news = [
      "https://pbs.twimg.com/media/F7GkOD4aIAAPCRc?format=jpg&name=medium",
      "https://pbs.twimg.com/media/F6n2IIPa4AAVaj-?format=jpg&name=medium",
    ];

      const newsElements = news.map((url, news) => (
        <>
        <img
          className='news-image'
          key={news}
          src={url}
          alt={`${news}`}
        />
        </>
      ));
    
      return (
        <>
          <img 
            className='img-card' 
            src='https://wallpapercave.com/wp/eIfaYQb.jpg' 
            alt='romance dawn set' 
          />
          <h2 id="common">
            NEWS
          </h2>
          <div className='card'>
            {newsElements}
            </div>
        </>
      );
    }