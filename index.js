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