// Simulação de um banco de dados em memória
let clientes = [
    {id:1, name: 'Klebi', email: 'klebi@gmail.com', telefone: '1194785-6325', endereco: 'Rua da água', datacadastro: new Date(), ativo: true},
    {id:2, name: 'Silva', email: 'dasilva@gmail.com', telefone: '11947584-2123', endereco: 'Rua das flores', datacadastro: new Date(), ativo: true},
    {id:3, name: 'Shaolin', email: 'shaolin.matador.de.porco', telefone: '1196325-1327', endereco: 'Rua das lâmpadas', datacadastro: new Date(), ativo: true},
    {id:4, name: 'Edimilsu', email: 'edimilsu@gmail.com', telefone: '114576-3123', endereco: 'Rua dos Baianos', datacadastro: new Date(), ativo: false},
];

// Função para buscar todos os clientes
const findAll = () => {
    return clientes;
}

// Função para buscar um cliente por ID
const findById = (id) => {
    return clientes.find(clientes => clientes.id === id);
}

// Função para buscar um cliente por nome
const findByName = (name) => {
    return clientes.find(clientes => clientes.name.toLowerCase() === name.toLowerCase());
}

// Função para adicionar um novo cliente
const create = (newCliente) => {
    const newId = clientes.length > 0 ? clientes[clientes.length - 1].id + 1 : 1;
    const dataCadastro = new Date()
    const clienteWithId = { id: newId, ...newCliente };
    clientes.push(clienteWithId);
    return clienteWithId;
}

// Função para atualizar clientes
const update = (id, updateClientes) => {
    const index = clientes.findIndex(cliente => cliente.id === id);
    if (index === -1){
        return null;
    }
    clientes[index] = {...clientes[index], ...updateClientes};
    return clientes[index];
}

// Função para deletar um cliente
const deleteCliente = (id) => {
    const index = clientes.findIndex(cliente => cliente.id === id);
    if (index === -1){
        return false;
    }
    clientes.splice(index, 1);
    return true;
}

// Exportar as funções
module.exports = {
    findAll,
    findById,
    findByName,
    update,
    deleteCliente,
    create
}