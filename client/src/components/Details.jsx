import React, { Component } from 'react';

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      details: '',
      productColor: '',
      packagingType: '',
      productSize: '',
      productImage: '',
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
    .then(function(detailArray) {
      let details = detailArray[0];
      console.log('This is where the response goes', details);

      that.setState({
        details: details.details,
        productColor: details.product_color,
        packagingType: details.packaging_type_id,
        productSize: details.product_size || 'N/A',
        productImage: details.product_image_id,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Description:</h2>
          <p>{this.state.details}</p>
        <h2>Packaging Type:</h2>
          <p>{this.state.packagingType}</p>
        <h2>Product Size:</h2>
          <p>{this.state.productSize}</p>
        <h2>Product Color:</h2>
          <p>{this.state.productColor}</p>
      </div>
    );  
  }
}

export default Details;
