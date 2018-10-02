import React, { Component } from 'react';
import Tweet from '../components/Tweet'

class TwitterFeed extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // tweets: props.tweets
      tweets: []
    }
  }

  componentDidMount() {
    // console.log("** componentDidMount **")
    // console.log("render() was just called.")
    fetch('http://localhost:4567/api/v1/tweets')
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.text())
    .then(body => {
      let bodyParsed = JSON.parse(body);
      // console.log(bodyParsed);
      this.setState({
        tweets: bodyParsed
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let tweets = this.state.tweets.map(tweet => {
      return <Tweet key={tweet.id_str} tweet={tweet} />
    })

    return (
      <div className="row columns small-12 medium-9 large-6">
        <div className="twitter-feed">
          {tweets}
        </div>
      </div>
    );
  }
}

export default TwitterFeed;
