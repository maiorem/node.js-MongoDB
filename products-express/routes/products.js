var express = require('express');
var router = express.Router();

// GET :/products
router.get('/', function(req, res, next) {
  res.json('상품 전체 보기');
});

// GET : /products/:id
router.get('/:id', (req, res)=>{
  res.json(req.params.id + '번 상품 상세보기')
})

// POST : /products
router.post('/', (req, res)=>{
  res.json('상품 등록')
})

// PUT : /products
router.put('/', (req, res)=>{
  res.json('상품 수정')
})

// DELETE : /products/:id
router.delete('/:id', (req, res)=>{
  res.json(req.params.id + '번 상품 삭제하기')
})

module.exports = router;
