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
salvarProduto();
async function salvarProduto() {
    await Produto.create({
        descricao: 'Arroz',
        preco: 5,
        categoria: 'Alimentício',
        validade: new Date('2025-10-03')
    });
    console.log('Produto salvo com sucesso');
}