import React from 'react';
import axios from "axios"
import './App.css';
import UserFriends from './components/UserFriends';
// import { userInfo } from 'os';


const GITHUB_USERNAME = 'wvanorder';
const API_BASE_URL = 'https://api.github.com/';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: GITHUB_USERNAME,
      userinfo: {}
    };
  }

  componentDidMount() {
    axios
      .get(`${API_BASE_URL}users/${this.state.username}`)
      .then(res => {
        this.setState({ userinfo: res.data })
      })
      .catch(err => console.error(err));
  }

  componentDidUpdate(prevProps, prevState) {
    // Not necessary
    //if (this.state.userinfo !== prevState.userinfo)
    //  console.log("Now available: ",this.state.userinfo.followers_url)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header"></header>
        <h1>{`GitHub calendar and friends of ${this.state.userinfo.name}`}</h1>
        <img src={`http://ghchart.rshah.org/${GITHUB_USERNAME}`}
            alt="Github calendar graph"></img>
        <UserFriends friendsUrl={this.state.userinfo.followers_url} uncle="uncle" />
      </div>
    );
  }
}

export default App;
