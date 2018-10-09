import React, { Component } from 'react';
import LauncherTile from './LauncherTile'

class LauncherList extends Component {
  constructor(props){
    super(props)
    this.state = {
      launchers: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:4567/api/v1/launchers')
    .then(response => {
      if(response.ok){
        return response;
      } else {
      let errorMessage=`${response.status} ${response.statusText}`,
          error = new Error(errorMessage)
          throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({launchers: [...this.state.launchers, ...body]});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let launcherList = this.state.launchers.map((launcher) => {
      return(
        <li key={launcher.id}>
          <LauncherTile
            id={launcher.id}
            name={launcher.name}
          />
        </li>
      )
    })

    return(
      <div className="page">
        <h1>A list of Famous Launchers</h1>
        <div className="launcher-list">
          <ul>
            {launcherList}
          </ul>
        </div>
      </div>
    )
  }
}

export default LauncherList;
