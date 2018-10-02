import React from 'react';
import ReviewForm from '../components/ReviewForm';

class ReviewsFormsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: '',
      content: ''
    }
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    
    let newReview = ({
      restaurant_id: this.props.restaurantId,
      name: this.state.name,
      rating: this.state.rating * 100 / 5,
      content: this.state.content
    })
    this.props.addReview(newReview);
    this.setState({
      name: '',
      rating: '',
      content: ''
    })
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div>
        <ReviewForm
          restaurantId={this.props.restaurantId}
          name={this.state.name}
          rating={this.state.rating}
          content={this.state.content}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
      </div>
    )
  }
}

export default ReviewsFormsContainer;
