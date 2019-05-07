import React, {Component} from  'react';
import CommentList from '../components/CommentList.js';

class CommentBox extends Component {

  constructor(props) {
    super(props)
    this.state = {
      comments: [
        { id: 1,
          author: "Seneca",
          text: "Luck is what happens when preparation meets opportunity."
        },
        { id: 2,
          author: "Dr. Suess",
          text: "Don't cry because it's over, smile because it happened."
        }
      ]
    }
  }

  render() {
    return (
      <div className="comments-box">
        <CommentList  comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentBox;
