import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails() {
    let that = this;

    fetch('http://localhost:1337/1/descriptions')
    .then(function(response) {
      return response.json();
    })
    .then(function(details) {
      console.log('This is where the response goes', details[0]);
      that.setState({
        details: details[0],
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Description:</h2>
        <h2>Product Size:</h2>
        <h2>Product Color:</h2>
      </div>
    );  
  }
}

export default Details;
