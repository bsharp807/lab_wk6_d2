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
        },
        { id: 3,
          author: "The Dude",
          text: "That's just like your opinion man."
        },
        { id: 4,
          author: "Ser Bronn of the Blackwater",
          text: "There's no cure for being a c*nt"
        },
        { id: 5,
          author: "Danaerys Targaryen",
          text: "I go to Starbucks for their great chai latte"
        },
      ]
    }
  }

  render() {
    return (
      <div className="comments-box ui comments">
        <h2 class='ui dividing header'>Comments</h2>
        <CommentList  comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentBox;
