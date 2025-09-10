// Importar o módulo do Express
const express = require('express');

//Importa as rotas de produtos
const productsRoutes = require('./src/routes/ProductRoutes');
const clientesRoutes = require('./src/routes/ClientRoutes')

// Criar uma aplicação Express
const app = express();

//Definir um middleware para analisar Json no corpo das requisições
app.use(express.json());

// Defininer a porta em que o servidor irá escutar
const porta = 7000;

// Rota de teste da API
app.get('/', (req, res) => {
    res.send('API de produtos está funcionando!');
})

//Usando as rotas de produto
app.use('/api/products', productsRoutes);
app.use('/api/clientes', clientesRoutes);


// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`);
})