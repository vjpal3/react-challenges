import React from 'react';

class LauncherShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      launcherInfo: {}
    }
  }

  componentDidMount(){
    let launcherId = this.props.params.id
    fetch(`/api/v1/launcher/${launcherId}`)
    .then(response => {
      let parsed = response.json()
      return parsed
    }).then(launcher => {
      this.setState({ launcherInfo: launcher})
    })
  }

  render() {
    return (
      <div className="question-list">
        <h3>About a Launcher....</h3>
        <p><strong>Name:</strong> {this.state.launcherInfo.name}</p>
        <p><strong>Bio:</strong> {this.state.launcherInfo.bio}</p>
      </div>

    );
  }
}

export default LauncherShow;
