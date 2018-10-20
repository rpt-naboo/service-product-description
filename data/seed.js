const { pg } = require('../db/index');

var dummyData = [];
for (var i = 0; i < 100; i++) {
  dummyData.push(generateDescription(i));
}

console.log(dummyData);

pg('packaging_types')
.insert([{packaging_type_label: 'Standard Packaging'}, {packaging_type_label: 'Frustration Free Packaging'}])
.then(function() {
  pg('descriptions')
  .insert(dummyData)
  .then(function() {
    pg.destroy();
  });
});

// Function to create a single product description record from nothing
function generateDescription(productId) {
  return {
    product_id: productId,
    product_size: productSize(),
    product_color: productColor(),
    details: productDetails(),
    packaging_type_id: packagingType(),
    product_image_id: productImageId()
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
  var randomIndex = Math.floor(Math.random() * 3);

  if (measurementTypes[randomIndex]) {
    return quantity.toString().concat(' ', measurementTypes[randomIndex]);
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
  var randomIndex = Math.floor(Math.random() * 8);

  if (colorSpectrum[randomIndex]) {
    return colorSpectrum[randomIndex];
  }

}

function productDetails() {
  var details = {
    0: 'Lorem ipsum dolor amet banh mi paleo shaman chillwave, incididunt keytar lo-fi ipsum crucifix keffiyeh. Deep v anim cred pitchfork tote bag meh drinking vinegar portland kogi +1 do artisan hot chicken austin irure. Id fashion axe microdosing, stumptown wolf elit commodo in cardigan. Wayfarers drinking vinegar umami air plant tbh aliquip pabst deserunt. Vice ad portland gastropub waistcoat excepteur put a bird on it cred skateboard prism plaid microdosing pitchfork cold-pressed. Selvage wolf vice jianbing +1 blog pour-over fixie green juice.',
    1: 'Actually affogato keytar artisan aute kickstarter master cleanse tumblr. PBR&B +1 truffaut echo park raclette gochujang blue bottle exercitation chillwave edison bulb cronut occaecat adipisicing. Cred pork belly organic sint. Live-edge hammock put a bird on it laboris ex wolf ullamco. Tofu taxidermy vexillologist shaman keytar ethical ex. Affogato leggings ut beard non lyft celiac, knausgaard banjo occaecat umami microdosing lo-fi. Reprehenderit kinfolk tempor, viral vaporware synth microdosing tattooed mumblecore.',
    2: 'Tumblr velit sint, do normcore labore pickled aute actually artisan poutine salvia XOXO tilde. Neutra lo-fi magna dolore food truck succulents af est. Consectetur elit kitsch mustache, ex microdosing cray sriracha deserunt chia. Blog exercitation hot chicken, authentic umami esse chambray distillery bespoke. Hot chicken venmo humblebrag pinterest echo park banh mi occaecat hoodie locavore man braid pop-up. Listicle excepteur aliquip hexagon, whatever selfies shoreditch art party kogi. Affogato quinoa consequat selfies, flannel chambray pug jean shorts magna.',
    3: 'Minim qui cardigan, lo-fi blog in irony dolor cupidatat 90\'s. Distillery seitan gochujang scenester slow-carb est mollit freegan hoodie roof party aliquip lorem coloring book fashion axe. Velit unicorn asymmetrical officia. Pop-up 3 wolf moon poke before they sold out ad. Mlkshk messenger bag craft beer, lorem fam voluptate master cleanse drinking vinegar photo booth cloud bread gochujang nisi poutine. Post-ironic cronut meditation, non leggings truffaut four dollar toast hoodie tilde palo santo cornhole occaecat keffiyeh shabby chic.',
    4: 'Cardigan food truck sint edison bulb mumblecore woke. Pour-over post-ironic sed, yr quinoa ennui everyday carry jean shorts aliqua etsy next level bespoke brooklyn vaporware. Velit meggings flexitarian, ut proident fixie sunt cold-pressed microdosing shaman echo park pariatur taiyaki. Biodiesel deserunt viral XOXO. Drinking vinegar freegan lyft lumbersexual before they sold out.',
  }

  var randomIndex = Math.floor(Math.random() * 6);

  if (details[randomIndex]) {
    return details[randomIndex];
  }

}

function packagingType() {
  var packagingTypes = {
    0: 1,
    1: 2
  }

  var randomIndex = Math.floor(Math.random() * 3);

  if (packagingTypes[randomIndex]) {
    return packagingTypes[randomIndex];
  }

}

// TODO: this will need to be swapped out to actual filenames as soon as we have
function productImageId() {

}
