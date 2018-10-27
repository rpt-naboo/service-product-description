require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;
const { pg, bookshelf, PackagingType, Description } = require('../db/index');

app.use(express.static('client'));

app.get('/:productId/description', (req, res) => {
  Description
    .query()
    .join('packaging_types', 'packaging_types.id', 'descriptions.packaging_type_id')
    .where('product_id', req.params.productId)
    .then(function(modelArray) {
      let description = modelArray[0];
      res.send(description);
    });
});

app.listen(port, () => console.log(`Server is now listening on port ${port}`));
