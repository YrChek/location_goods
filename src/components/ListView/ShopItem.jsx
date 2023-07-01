import React from 'react'

function ShopItem({ item }) {
  const style = {
    backgroundImage: `url(${item.img})`,
    backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
  }
  return (
    <div className="listView-item">
      <div className="listView-picture" style={style}></div>
      <div className="listView-title">{item.name}</div>
      <div className="listView-color">{item.color}</div>
      <div className="listView-price">${item.price}</div>
      <div className="listView-button">
        <button className="listView-button-item">ADD TO CARD</button>
      </div>
    </div>
  )
}

export default ShopItem
