import React, { Component } from 'react';

class Course extends Component {
  render() {
    const query = new URLSearchParams(this.props.location.search);
    let title = '';
    for (let param of query.entries()) {
      title = param[1];
      console.log(param);
    }
    return (
      <div>
        <h1>{title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
