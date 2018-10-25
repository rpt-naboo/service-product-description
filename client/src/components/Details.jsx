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

    fetch(`http://localhost:1337/${1}/description`) // TODO: update for proxy
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
        <h2>Packaging Type: {this.state.packagingType}</h2>
        <h2>Product Size: {this.state.productSize}</h2>
        <h2>Product Color: {this.state.productColor}</h2>
        <p>{this.state.details}</p>
        <img src={this.state.product_image_id} alt="Description Picture"/>
      </div>
    );  
  }
}

export default Details;
