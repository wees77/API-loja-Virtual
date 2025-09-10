const productModel = require('../model/ProductModel');

// Método do controlador para listar todos os usuários
const getAllProducts = (req, res) => {
    const products = productModel.findAll();
    res.status(200).json(products);
}

// Método do controlador para obter um produto por ID
const getProductById = (req, res) => {

    // Pegando o ID que foi enviado na requisição
    const id = parseInt(req.params.id);

    // Chamando o metodo do FindById do productModel
    const product = productModel.findById(id);

    // Responder com status code de 200 (Sucesso!) e devolver os dados do produto em formato json
    if(product){
        res.status(200).json(product);
    }else{
        res.status(404).json({mensagem: 'Produto não encontrado!'});
    }
};

// Método do controlador para obter um produto por nome
const getProductByName = (req, res) => {
    //Pegando o nome que foi enviado na requisição
    const name = req.params.name;

    //Chamando o método do FindByName do productModel
    const product = productModel.findByName(name);

    //Responder com status code de 200 (Sucesso!) e devolver os dados do produto em formato de json
    if(product){
        res.status(200).json(product);
    }else{
        res.status(404).json({mensagem: 'Produto não encontrado no bando de dados!'})
    }
};

// Método do controlador para criar um novo produto
const createProduct = (req, res) => {

    // Pegando os dados enviados pelo body (corpo) da requisição
    const {name, descricao, preco, categoria, estoque, ativo} = req.body;

    // Validar se foram enviados
    if(!name || !descricao || !preco || !categoria || estoque === undefined || ativo === undefined){
        return res.status(400).json({mensagem: 'Por favor, preencha todos os campos obrigatórios!'});
    }

    else{
        const newProduct = productModel.create({name, descricao, preco, categoria, estoque, ativo});
        res.status(201).json(newProduct);
    }
}

// Método do controlador para atualizar um produto existente
const updateProducts = (req, res) => {

    // Pegando o ID que foi enviado na requisição
    const id = parseInt(req.params.id);

    // Pegando os dados enviados pelo body (corpo) da requisição
    const {name, descricao, preco, categoria, estoque, ativo} = req.body;

    // Validar se foram enviados
    if(!name || !descricao || !preco || !categoria || estoque === undefined || ativo === undefined){
        return res.status(400).json({mensagem: 'Por favor, preencha todos os campos obrigatórios!'});
    }

    const updatedPdt = productModel.update(id, {name, descricao, preco, categoria, estoque, ativo});

    if(updatedPdt){
        res.status(200).json(updatedPdt);
    }else{
        res.status(404).json({mensagem: 'Produto não encontrado no banco de dados!'});
    }
}

// Método do controlador para deletar um produto existente
const deleteProducts = (req, res) => {

    //Pegando o Id que foi enviado na requisição
    const id = parseInt(req.params.id);

    const deletePdt = productModel.deleteProduct(id);

    if(deletePdt){
        res.status(200).json(deletePdt);
    }else{
        res.status(404).json({mensagem: 'Produto não encontrado no banco de dados!'});
    }
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    updateProducts,
    deleteProducts,
    createProduct
}
