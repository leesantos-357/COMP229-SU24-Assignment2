const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router.post('/products', controller.createProduct);
router.get('/products', controller.getProducts);
router.get('/products/:id', controller.getProductById);
router.put('/products/:id', controller.updateProduct);
router.delete('/products/:id', controller.deleteProduct);
router.delete('/products', controller.deleteAllProducts);

module.exports = router;
