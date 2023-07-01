import React from 'react';
import ShopCard from './ShopCard';

function CardsView({ cards }) {
  let key = 0;
  return (
    <div className='cardsView'>
      {cards.map((el) => <ShopCard card={ el } key={key += 1}/>)}
    </div>
  )
}

export default CardsView
