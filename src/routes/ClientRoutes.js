const express = require('express');

const router = express.Router();

const clienteController = require('../controller/ClientController');

// Criando as rotas da nossa API

//1° Rota para obter todos os clientes
router.get('/', clienteController.getAllClientes);

//2° Rota para obter um produto por ID
router.get('/:id', clienteController.getClientesById);

//3° Rota para obter um produto por nome
router.get('/name/:name', clienteController.getClientesByName);

//4° Rota para criar um novo produto
router.post('/', clienteController.createCliente);

//5° Rota para atualizar um produto existente
router.patch('/:id', clienteController.updateCliente);

//6° Rota para deletar um produto existente
router.delete('/:id', clienteController.deleteClientes)

module.exports = router;