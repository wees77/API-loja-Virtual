// Simulação de um banco de dados em memória
let products = [
    {id:1, name: 'Tijolo', descricao: 'Tijolo baiano de 6 furos', preco: 1.50, categoria: 'Construção', estoque: 5049, ativo: true},
    {id:2, name: 'Cimento', descricao: 'Cimento Votoran 50kg', preco: 31.90, categoria: 'Construção', estoque: 438, ativo: true},
    {id:3, name: 'Cerâmica', descricao: 'Cerâmica Portinari 50x50', preco: 62.49, categoria: 'revestimento', estoque: 275, ativo: true},
    {id:4, name: 'Tinta', descricao: 'Tinta Acrílica Coral 18L, cinza médio', preco: 369.90, categoria: 'Pintura', estoque: 0, ativo: false},
];

// Função para buscar todos os produtos
const findAll = () => {
    return products;
}

// Função para buscar um produto por ID
const findById = (id) => {
    return products.find(products => products.id === id);
}

// Função para buscar um produto por nome
const findByName = (name) => {
    return products.find(products => products.name.toLowerCase() === name.toLowerCase());
}

// Função para adicionar um novo produto
const create = (newProduct) => {
    const newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;
    const productWithId = { id: newId, ...newProduct };
    products.push(productWithId);
    return productWithId;
}

// Função para atualizar produtos
const update = (id, updateProducts) => {
    const index = products.findIndex(product => product.id === id);
    if (index === -1){
        return null;
    }
    products[index] = {...products[index], ...updateProducts};
    return products[index];
}

// Função para deletar um produto
const deleteProduct = (id) => {
    const index = products.findIndex(product => product.id === id);
    if (index === -1){
        return false;
    }
    products.splice(index, 1);
    return true;
}

// Exportar as funções
module.exports = {
    findAll,
    findById,
    findByName,
    update,
    deleteProduct,
    create
}