const express = require('express');

const router = express.Router();

const productController = require('../controller/ProductController');

// Criando as rotas da nossa API

//1° Rota para obter todos os produtos
router.get('/', productController.getAllProducts);

//2° Rota para obter um produto por ID
router.get('/:id', productController.getProductById);

//3° Rota para obter um produto por nome
router.get('/name/:name', productController.getProductByName);

//4° Rota para criar um novo produto
router.post('/', productController.createProduct);

//5° Rota para atualizar um produto existente
router.patch('/:id', productController.updateProducts);

//6° Rota para deletar um produto existente
router.delete('/:id', productController.deleteProducts)

module.exports = router;
