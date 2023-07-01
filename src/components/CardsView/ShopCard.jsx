import React from 'react';
import './cardView.css'

function ShopCard({ card }) {
  const style = {
    backgroundImage: `url(${card.img})`,
    backgroundSize: 'contain'
  }
  return (
    <div className='card' style={style}>
      <div className="card-title">
      <h2 className="card-h2">{card.name}</h2>
      <p className="card-p">{card.color}</p>
      </div>
      <div className="card-price">
        <span>${card.price}</span>
        <button className="card-btn">ADD TO CARD</button>
      </div>
    </div>
  )
}

export default ShopCard
