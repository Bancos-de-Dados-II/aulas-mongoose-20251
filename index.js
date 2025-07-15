import mongoose, { mongo } from 'mongoose';

//Conectando ao MongoDB
main();
async function main() {
    await mongoose.connect(
        'mongodb://localhost:27017/aula');
    console.log('Conectado ao MongoDB');
}

const usuarioSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    nome: String
});
const Usuario = mongoose.model('Usuario', 
    usuarioSchema);

const taskSchame = new mongoose.Schema({
    titulo: String,
    descricao: String,
    dataHora: Date,
    tipo:{
        type: String,
        enum: ['Pessoal', 'Profissional'],
        required: true
    },
    local: {
        type: {
            type: String,
            enum: ['Point'], 
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    }
});