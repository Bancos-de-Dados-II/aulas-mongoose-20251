import mongoose, { mongo } from 'mongoose';

//Conectando ao MongoDB
main();
async function main() {
    await mongoose.connect(
        'mongodb://localhost:27017/aula');
    console.log('Conectado ao MongoDB');
}

//Definindo o schema
const produtoSchema = new mongoose.Schema({
    descricao: String,
    preco: Number,
    categoria:{
        type: String,
        enum: ['Alimentício', 'Limpeza', 'Higiene']
    },
    validade: {
        type: Date,
        default: Date.now
    }
});

//Criando o modelo
const Produto = mongoose.model('Produto', 
    produtoSchema);

//Salvando um produto
// salvarProduto();
async function salvarProduto() {
    await Produto.create({
        descricao: 'Feijão',
        preco: 8.50,
        categoria: 'Alimentício'
    });
    console.log('Produto salvo com sucesso');
}

//Listando produtos
listarProdutos();
async function listarProdutos() {
    const produtos = await Produto
        .find({preco:{ $gte: 5 }});
    console.log(produtos);
}