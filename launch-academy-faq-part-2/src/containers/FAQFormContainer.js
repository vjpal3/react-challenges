import React from 'react';
import FAQForm from '../components/FAQForm';

class FAQFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: '',
      errors: {}
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.validateQuestion = this.validateQuestion.bind(this);
    this.validateAnswer = this.validateAnswer.bind(this);
  }

  handleInputChange(event) {
    if(event.target.name === 'question') {
      this.validateQuestion(event.target.value)
    } else {
      this.validateAnswer(event.target.value)
    }
    this.setState({[event.target.name]: event.target.value})
  }

  validateQuestion(input) {
    if(input.trim() === "") {
      let newError = { questionEntered: "Please enter a valid question" };
      this.setState({errors: Object.assign({}, this.state.errors, newError)})
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.questionEntered;
      this.setState({ errors: errorState })
      return true;
    }
  }

  validateAnswer(input) {
    if(input.trim() === "") {
      let newError = { answerEntered: "Please enter a valid answer" };
      this.setState({errors: Object.assign({}, this.state.errors, newError)})
      return false;
    } else {
      let errorState = this.state.errors;
      delete errorState.answerEntered;
      this.setState({ errors: errorState })
      return true;
    }
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if((this.validateQuestion(this.state.question)) && (this.validateAnswer(this.state.answer))) {
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
    let errorDiv, errorItems;
    if(Object.keys(this.state.errors).length > 0){
      errorItems = Object.values(this.state.errors).map((error) => {
        return (
          <li key={error}>{error}</li>
        );
      });
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return (
      <div className='question-list'>
        {errorDiv}
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
