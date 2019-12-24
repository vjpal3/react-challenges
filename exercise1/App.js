import React, { Component } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      userName: "Vrishali"
    }
  }

  changeNameHandler = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
        <hr />
        <p><br /></p>

        <UserInput name={this.state.userName} onChangeName={this.changeNameHandler}/>
        <UserOutput 
          userName={this.state.userName}
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut etiam sit amet nisl. Nunc faucibus a pellentesque sit amet. Nunc non blandit massa enim nec. Habitasse platea dictumst quisque sagittis. Ultrices dui sapien eget mi proin sed libero. At auctor urna nunc id cursus metus aliquam. Ac placerat vestibulum lectus mauris ultrices eros. Nec ullamcorper sit amet risus nullam eget felis. Dictum fusce ut placerat orci nulla pellentesque."
          
          text2="Ac turpis egestas sed tempus urna et pharetra. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Urna nunc id cursus metus aliquam eleifend mi in. Scelerisque fermentum dui faucibus in ornare. Tristique et egestas quis ipsum suspendisse. Nulla porttitor massa id neque aliquam. Cursus metus aliquam eleifend mi in nulla posuere. A scelerisque purus semper eget. Penatibus et magnis dis parturient montes nascetur ridiculus mus."
         /> 
        <UserOutput
          userName="ILoveIcecream" 
          text1="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut etiam sit amet nisl. Nunc faucibus a pellentesque sit amet. Nunc non blandit massa enim nec. Habitasse platea dictumst quisque sagittis. Ultrices dui sapien eget mi proin sed libero. At auctor urna nunc id cursus metus aliquam. Ac placerat vestibulum lectus mauris ultrices eros. Nec ullamcorper sit amet risus nullam eget felis. Dictum fusce ut placerat orci nulla pellentesque."

          text2="Ac turpis egestas sed tempus urna et pharetra. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Urna nunc id cursus metus aliquam eleifend mi in. Scelerisque fermentum dui faucibus in ornare. Tristique et egestas quis ipsum suspendisse. Nulla porttitor massa id neque aliquam. Cursus metus aliquam eleifend mi in nulla posuere. A scelerisque purus semper eget. Penatibus et magnis dis parturient montes nascetur ridiculus mus."
         /> 

      </div>
    );
  }
}

export default App;
