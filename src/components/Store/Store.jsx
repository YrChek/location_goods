import React from 'react'
import { useState } from 'react';
import IconSwitch from '../IconSwitch/IconSwitch';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';

function Store({ products }) {
  const [state, changeState] = useState({
    iconName: 'view_list',
    booleanValue: true
  })

  let bool = false;
  let icon = 'view_module'


  const onSwitch = () => {
    changeState(() => {
      return {
        iconName: icon,
        booleanValue: bool,
      }
    })
    bool = state.booleanValue === true ? false : true;
    icon = state.iconName === 'view_list' ? 'view_module' : 'view_list'
  }
  return (
    <div>
      <IconSwitch icon={state.iconName} onSwitch={onSwitch}/>
      {state.booleanValue ? <CardsView cards={products} /> : <ListView items={products} />}
    </div>
  )
}

export default Store
