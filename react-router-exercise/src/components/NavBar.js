import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div>
        <div className="navbar">
          <Link to='/'>Greetings!</Link>&emsp;
          <Link to='/goodbye'>Say Bye!</Link>&emsp;
          <Link to='/custom'>Create Custom Greeting</Link>
        </div>
        <div className="content">
          <h1 className="page-title">Greeting Generator</h1>
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default NavBar;
