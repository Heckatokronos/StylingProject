import React from 'react'

import Item from '../Item/Item'
import './List.css'

const List = (props) => {
  return (
    <ul className="goal-list">
      {props.items.map(goal => (
        <Item
          key={goal.id}
          id={goal.id}
          onDelete={props.onDeleteItem}
        >
          {goal.text}
        </Item>
      ))}
    </ul>
  )
}

export default List
