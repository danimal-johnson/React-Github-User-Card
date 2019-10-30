import React from 'react';
// import axios from "axios"

class UserFriends extends React.Component {
  constructor() {
    super();
    this.state = {
      peeps: []
      // Do we need something here?
    };
  }

  componentDidMount(props) {
    console.log("Props:", this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    // Not using this function yet.
    if (this.props.url !== prevProps.url) {
      console.log("Yeah, I noticed it too.");
    }
  }

  render() {
    return (
      <div className="App">
        <p>Whelp, we done got to the place where the friends will live.</p>
      </div>
    );
  }
}

export default UserFriends;