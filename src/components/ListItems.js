import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <li className='list-item'>
      <h4>{props.author}</h4>
      <p>{props.text}</p>
    </li>
  )
}

ListItem.propTypes = {
  comments: PropTypes.shape({
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  }).isRequired
};

export default ListItem;
