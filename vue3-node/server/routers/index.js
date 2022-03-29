const Router = require("koa-router");

const router = new Router();
router.prefix("/api");


const {
  create,
  update,
  remove,
  list,
  listByName
} = require('../controller/product.controller.js')


// get products list
router.get('/products', list);
router.get('/products/search/:name', listByName);

// post a product
router.post('/products', create);

// update a product
router.put('/products/:id',  update);
// deletea product
router.delete('/products/:id',  remove);

module.exports = router;
