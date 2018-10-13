// Function to create a single product description record, given a product ID
function generateDescription(productId) {
  return {
    productSize: productSize(),
    productColor: '',
    productDetails: '',
    packagingType: '',
    productImageId: ''
  };
}


// Function to create a list of keywords, given a product ID (to get the description)
function generateKeywords(productId) {

}

// Helper functions for product description record
function productSize() {
  var quantity = Math.floor(Math.random() * 100);

  // provide a measurement type: feet, ounces, or nothing
  var measurementTypes = {
    0: 'feet',
    1: 'ounces'
  }

  // 2 should be undefined
  var randomIndex = Math.floor(Math.random() * 2);

  if (measurementTypes[randomIndex]) {
    return quantity.concat(' ', measurementTypes[randomIndex]);
  }
}

function productColor() {
  var colorSpectrum = {
    0: 'red',
    1: 'orange',
    2: 'yellow',
    3: 'green',
    4: 'blue',
    5: 'indigo',
    6: 'purple',
  }

  // 7 should be undefined
  var randomIndex = Math.floor(Math.random() * 7);

  if (colorSpectrum[randomIndex]) {
    return colorSpectrum[randomIndex];
  }

}

function productDetails() {

}

function packagingType() {

}

// TODO: this will need to be swapped out to actual filenames as soon as we have
function productImageId() {

}
