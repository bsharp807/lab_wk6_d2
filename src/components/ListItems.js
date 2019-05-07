import React from 'react';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  return (
    <li className='list-item comment'>
      <a className='avatar'>
        <img src='https://imgur.com/I80W1Q0.png'/>
      </a>
      <div className='content'>
        <a className='author'>{props.author}</a>
        <div className='text'>{props.text}</div>
      </div>
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
