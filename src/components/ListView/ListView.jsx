import React from 'react';
import ShopItem from './ShopItem';
import './ListView.css';

function ListView({ items }) {
  let key = 0;
  return (
    <div className='listView'>
      {items.map((el) => <ShopItem item={el} key={key += 1} />)}
    </div>
  )
}

export default ListView
