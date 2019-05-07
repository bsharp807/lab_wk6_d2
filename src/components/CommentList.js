import React from 'react';
import ListItem from './ListItems.js'

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

export default CommentList;
