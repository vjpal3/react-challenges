import React, { Component } from 'react';
import TextField from '../components/TextField';
import Label from '../components/Label';

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ['first-name']: '',
      ['last-name']: '',
      address: '',
      city: '',
      state: '',
      ['zip-code']: '',
      ['phone-number']: '',
      email: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    // console.log(`first name: ${this.state['first-name']}`)
    console.log(this.state)
    this.setState({
      ['first-name']: '',
      ['last-name']: '',
      address: '',
      city: '',
      state: '',
      ['zip-code']: '',
      ['phone-number']: '',
      email: ''
    })
  }

  render() {
    return (
      <form className="callout" id="shipping-address-form" onSubmit={this.handleFormSubmit}>
        <h1>Shipping Address</h1>
        <Label
          htmlFor='firstName'
          content='First Name:'
        />
        <TextField
          content={this.state['first-name']}
          id='first-name'
          name='firstName'
          handleChange={this.handleChange}
        />

        <Label
          htmlFor='lastName'
          content='Last Name:'
        />
        <TextField
          content={this.state['last-name']}
          id='last-name'
          name='firstName'
          handleChange={this.handleChange}
        />

        <Label
          htmlFor='address'
          content='Address:'
        />
        <TextField
          content={this.state.address}
          id='address'
          name='address'
          handleChange={this.handleChange}
        />

        <Label
          htmlFor='city'
          content='City:'
        />
        <TextField
          content={this.state.city}
          id='city'
          name='city'
          handleChange={this.handleChange}
        />

        <Label
          htmlFor='state'
          content='State:'
        />
        <TextField
          content={this.state.state}
          id='state'
          name='state'
          handleChange={this.handleChange}
        />

        <Label
          htmlFor='zipCode'
          content='Zip code:'
        />
        <TextField
          content={this.state['zip-code']}
          id='zip-code'
          name='zipCode'
          handleChange={this.handleChange}
        />

        <Label
          htmlFor='phoneNumber'
          content='Phone Number:'
        />
        <TextField
          content={this.state['phone-number']}
          id='phone-number'
          name='phoneNumber'
          handleChange={this.handleChange}
        />

        <Label
          htmlFor='email'
          content='Email:'
        />
        <TextField
          content={this.state.email}
          id='email'
          name='email'
          handleChange={this.handleChange}
        />


        {/* <div>
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="first-name" name="firstName" />
          </div>

          <div>
          <label htmlFor="lastName">Last Name:</label>
          <input type="text" id="last-name" name="lastName" />
          </div>

          <label htmlFor="address">Address:</label>
          <input type="text" id="address" name="address" />

          <div>
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" />
          </div>

          <div>
          <label htmlFor="state">State:</label>
          <input type="text" id="state" name="state" />
          </div>

          <div>
          <label htmlFor="zipCode">Zip Code:</label>
          <input type="text" id="zip-code" name="zipCode" />
          </div>

          <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="text" id="phone-number" name="phoneNumber" />
          </div>

          <div>
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" name="email" />
        </div> */}

        <input type="submit" className="button" value="Submit "/>
      </form>
    )
  }
}

export default FormContainer
