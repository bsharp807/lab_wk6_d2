import React from 'react';

const ListItem = (props) => {
  return (
    <li className='list-item'>
      <h4>{props.author}</h4>
      <p>{props.text}</p>
    </li>
  )
}

export default ListItem;
