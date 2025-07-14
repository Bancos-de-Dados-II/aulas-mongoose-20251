import mongoose from 'mongoose';

//Conectando ao MongoDB
main();
async function main() {
    await mongoose.connect(
        'mongodb://localhost:27017/aula');
    console.log('Conectado ao MongoDB');
}