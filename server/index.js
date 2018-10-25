require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;
const { pg } = require('../db/index');

app.use(express.static('client'));

app.get('/:productId/description', (req, res) => {
  pg.select().table('descriptions').where('product_id', req.params.productId)
  .then(function(rows) {
    res.send(rows);
  });
});

app.listen(port, () => console.log(`Server is now listening on port ${port}`));
