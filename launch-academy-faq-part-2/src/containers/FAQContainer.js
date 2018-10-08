import React from 'react';
import Question from '../components/Question';
import FAQFormContainer from './FAQFormContainer';

class FAQContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedQuestion: null,
      questions: []
    }

    this.toggleQuestionSelect = this.toggleQuestionSelect.bind(this);
    this.addToFAQ = this.addToFAQ.bind(this);
  }

  componentDidMount(){
    // console.log("Component mounted")
    fetch('http://localhost:4567/api/v1/questions')
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
      // console.log(body);
      this.setState({questions: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  toggleQuestionSelect(id) {
    if (id === this.state.selectedQuestion) {
      this.setState({ selectedQuestion: null})
    } else {
      this.setState({ selectedQuestion: id })
    }
  }

  addToFAQ(submission) {
    submission.id = this.state.questions.length + 1;
    this.setState({questions: [...this.state.questions, submission]})
  }

  render() {
    let questions = this.state.questions.map(question => {
      let selected;
      if (this.state.selectedQuestion === question.id) {
        selected = true
      }

      let handleClick = () => { this.toggleQuestionSelect(question.id) }

      return(
        <Question
          key={question.id}
          question={question.question}
          answer={question.answer}
          selected={selected}
          handleClick={handleClick}
        />
      )
    })

    return(
      <div className='page'>
        <h1>We Are Here To Help</h1>
        <div className='question-list'>
          {questions}
        </div>
        <FAQFormContainer addToFAQ={this.addToFAQ}/>
      </div>
    )
  }
}

export default FAQContainer;
