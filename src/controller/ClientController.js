const clienteModel = require('../model/ClientModel');

// Método do controlador para listar todos os usuários
const getAllClientes = (req, res) => {
    const clientes = clienteModel.findAll();
    res.status(200).json(clientes);
}

// Método do controlador para obter um usuário por ID
const getClientesById = (req, res) => {

    // Pegando o ID que foi enviado na requisição
    const id = parseInt(req.params.id);

    // Chamando o metodo do FindById do productModel
    const cliente = clienteModel.findById(id);

    // Responder com status code de 200 (Sucesso!) e devolver os dados do cliente em formato json
    if(cliente){
        res.status(200).json(cliente);
    }else{
        res.status(404).json({mensagem: 'Produto não encontrado!'});
    }
};

// Método do controlador para obter um usuário por nome
const getClientesByName = (req, res) => {
    //Pegando o nome que foi enviado na requisição
    const name = req.params.name;

    //Chamando o método do FindByName do productModel
    const cliente = clienteModel.findByName(name);

    //Responder com status code de 200 (Sucesso!) e devolver os dados do cliente em formato de json
    if(cliente){
        res.status(200).json(cliente);
    }else{
        res.status(404).json({mensagem: 'cliente não encontrado no bando de dados!'})
    }
};

// Método do controlador para criar um novo usuário
const createCliente = (req, res) => {

    // Pegando os dados enviados pelo body (corpo) da requisição
    const {name, email, telefone, endereco, dataCadastro, ativo} = req.body;

    // Validar se foram enviados
    if(!name || !email || !telefone || !endereco || dataCadastro || ativo === undefined){
        return res.status(400).json({mensagem: 'Por favor, preencha todos os campos obrigatórios!'});
    }

    else{
        const newCliente = clienteModel.create({name, email, telefone, endereco, dataCadastro, ativo});
        res.status(201).json(newCliente);
    }
}

// Método do controlador para atualizar um cliente existente
const updateCliente = (req, res) => {

    // Pegando o ID que foi enviado na requisição
    const id = parseInt(req.params.id);

    // Pegando os dados enviados pelo body (corpo) da requisição
    const {name, email, telefone, endereco, dataCadastro, ativo} = req.body;

    // Validar se foram enviados
    if(!name || !email || !telefone || !endereco || dataCadastro || ativo === undefined){
        return res.status(400).json({mensagem: 'Por favor, preencha todos os campos obrigatórios!'});
    }

    const updatedClt = clienteModel.update(id, {name, email, telefone, endereco, dataCadastro, ativo});

    if(updatedClt){
        res.status(200).json(updatedClt);
    }else{
        res.status(404).json({mensagem: 'Cliente não encontrado no banco de dados!'});
    }
}

// Método do controlador para deletar um usuário existente
const deleteClientes = (req, res) => {

    //Pegando o Id que foi enviado na requisição
    const id = parseInt(req.params.id);

    const deleteClt = clienteModel.deleteCliente(id);

    if(deleteClt){
        res.status(200).json(deleteClt);
    }else{
        res.status(404).json({mensagem: 'Produto não encontrado no banco de dados!'});
    }
}

module.exports = {
    getAllClientes,
    getClientesById,
    getClientesByName,
    updateCliente,
    deleteClientes,
    createCliente
}