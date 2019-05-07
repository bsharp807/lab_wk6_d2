import React from 'react';
import ListItem from './ListItems.js'
import PropTypes from 'prop-types'

const CommentList = (props) => {

  const commentItems = props.comments.map((comment) => {
    return <ListItem text={comment.text} author={comment.author} key={comment.id}/>
  });

  return (
    <div class='comment-list'>
      <ul>
        {commentItems}
      </ul>
    </div>
  );
}

CommentList.defaultProps = {
  comments: []
}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  })).isRequired
};

export default CommentList;
