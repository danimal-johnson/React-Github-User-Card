import React from 'react';
import axios from "axios"
import './App.css';
import UserFriends from './components/UserFriends';
// import { userInfo } from 'os';


const GITHUB_USERNAME = 'danimal-johnson';
const API_BASE_URL = 'https://api.github.com/';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userinfo: {}
    };
  }

  componentDidMount() {
    axios
      .get(`${API_BASE_URL}users/${GITHUB_USERNAME}`)
      .then(res => {
        console.log(res);
        this.setState({ userinfo: res.data })
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    // Not using this function yet.
    if (this.state.userinfo !== prevState.userinfo)
      console.log("Something changed!");
      console.log("We need",this.state.userinfo.followers_url)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>{`GitHub friends of ${GITHUB_USERNAME}`}</h1>
        </header>
        <p>Going to send this: {this.state.userinfo.followers_url}</p>
        <UserFriends friendsUrl={this.state.userinfo.followers_url} uncle="uncle" />
      </div>
    );
  }
}

export default App;
