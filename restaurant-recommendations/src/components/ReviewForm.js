import React from 'react'

// your code, here
const ReviewForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <input type='hidden' value={props.restaurantId} />

        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          name='name'
          value={props.name}
          onChange={props.handleInputChange}
        />

        <label htmlFor='rating'>Rating:</label>
        <input
          type='text'
          name='rating'
          value={props.rating}
          onChange={props.handleInputChange}
        />

        <label htmlFor='content'>Write Review:</label>
        <textarea
          name='content'
          rows='5' cols='100'
          value={props.content}
          onChange={props.handleInputChange}
        />

        <input type='submit' name='submit' value='Submit Review' />
      </form>
    </div>
  )
}

export default ReviewForm;
