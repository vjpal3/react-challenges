import React from 'react';
import FAQForm from '../components/FAQForm';

class FAQFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      successMessage: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if(!this.state.question || !this.state.answer) {
      this.setState({successMessage: "Please enter valid data."});
    } else {
      fetch('http://localhost:4567/api/v1/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: this.state.question,
          answer: this.state.answer
        })
      }).then(res=>res.json())
        .then(res => {
          this.setState({successMessage: 'Your data was submitted successfully!'});
          let formPayLoad = {question: this.state.question, answer: this.state.answer}

          this.props.addToFAQ(formPayLoad);
          //Important to put handleClearForm() here and not outside the fetch.
          //It will clear out the state before async call fetch finishes.
          this.handleClearForm(); //
        });
    }
  }

  handleClearForm() {
    this.setState({question: '', answer: ''})
  }

  render() {
    return (
      <div className='question-list'>
        {this.state.successMessage}
        <FAQForm
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          question={this.state.question}
          answer={this.state.answer}
        />
      </div>
    )
  }
}

export default FAQFormContainer;
