import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class UserFriends extends React.Component {
  constructor() {
    super();
    this.state = {
      peeps: [],
      friendsUrl: ''
      // Do we need something here?
    };
  }

  componentDidMount(props) {
  // This function isn't needed
  // console.log("Props:", this.props);
  }

  componentDidUpdate(prevProps, prevState) {
    
    // Store the new URL when it's ready.
    if (this.props !== prevProps) {
      this.setState({friendsUrl: this.props.friendsUrl});
    }

    // User the new URL to get the list of friends
    if (this.state !== prevState) {
      if( this.state.friendsUrl !== '' && 
          this.state.friendsUrl !== prevState.friendsUrl) {
        axios
        .get(this.state.friendsUrl)
        .then(res => {
          this.setState({ peeps: res.data })
        })
        .catch(err => console.error(err));
      } // New URL received
    } // New State
  } // componentDidUpdate

  render() {
    return (
      <div className="friends">
        {this.state.peeps.map(friend => 
          (<UserCard person={friend} key={friend.id} />))}
      </div>
    );
  }
}

export default UserFriends;