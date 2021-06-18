const express = require('express');
const Product = require('../model/product');

const router = express.Router();

// GET : /products
router.get('/', async (req, res) => {

  try {
    const result = await Product.find({});
    res.json(result);
  } catch (err) {
    res.json(err);
  }
  // Product.find({})
  //     .then((docs) => {
  //       res.json(docs);
  //     })
  //     .catch((err) => {
  //       res.json(err);
  //     });
});
// GET : /products/:id
router.get('/:id', async (req, res) => {

  const result = await Product.findOne({"id": req.params.id });
  res.json(result);
});
// POST : /products
router.post('/', (req, res) => {

  const product = new Product(req.body);
  product.save().then(() => console.log('insert ok..'));
  res.json('상품 등록 완료');
});
// PUT : /products -- //TODO 차후 구현
router.put('/', async (req, res) => {
  const data = req.body;
  const product = new Product(data);
  const result = await product.save();
  res.json(result);
});
// DELETE : /products/:id
router.delete('/:id', async (req, res) => {
  const result = await Product.findOneAndRemove({"id": req.params.id });
  res.json(result);
});


module.exports = router;
