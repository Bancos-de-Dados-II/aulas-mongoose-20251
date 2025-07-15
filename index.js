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

const taskSchema = new mongoose.Schema({
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
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

taskSchema.index({
    titulo: 'text',
    descricao: 'text'
},{
    default_language: 'portuguese',
    weights:{
        titulo: 2,
        descricao: 1
    }
});
const Task = mongoose.model('Task', taskSchema);

// adicionarUsuario();
async function adicionarUsuario() {
    const retorno = await Usuario.create({
        email: 'maria@gmail.com',
        nome: 'Maria'
    });
    console.log(retorno);
}

adicionarTarefa();
async function adicionarTarefa() {
    await Task.create({
        titulo: 'Fazer o projeto de Banco II',
        descricao: 'Fazer o projeto de Mongoose',
        dataHora: new Date('2025-08-04T15:30:00'),
        tipo: 'Profissional',
        local: {
            type: 'Point',
            coordinates:[-38.544, -6.889]
        },
        userId: '6876a1da6f59fba41dca4def'
    });
}