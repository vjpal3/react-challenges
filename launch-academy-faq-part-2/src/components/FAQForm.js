import React from 'react';

const FAQForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <label htmlFor='question'>Question: </label>
        <input
          type='text'
          name='question'
          value={props.question}
          onChange={props.handleInputChange}
        />

        <label htmlFor='answer'>Answer: </label>
        <textarea
          name='answer'
          value={props.answer}
          onChange={props.handleInputChange}
        />

        <input type='submit' name='submit' value='Submit FAQ' />
      </form>
    </div>
  )
}

export default FAQForm;
