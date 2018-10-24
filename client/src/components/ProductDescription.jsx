import React, { Component } from 'react';
import Details from './Details.jsx';
import Keywords from './Keywords.jsx';
import '../style.css';

class ProductDescription extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: {},
    }
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
      <div className='App'>
        <h1> Product Descriptions </h1>
        <div></div>

        <Keywords />
        <Details details={this.details}/>
      </div>
    );
  }
}

export default ProductDescription;
