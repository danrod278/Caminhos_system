const mongoose = require("mongoose")
require("dotenv/config")
const Schema  = mongoose.Schema
const uri_database =  process.env.DB_CONNECTIONPASS

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};


async function connect() {
    try {
        await mongoose.connect(uri_database, options);
        console.log('Conectado ao MongoDB Atlas com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB Atlas:', error);
    }
}
    
exports.connect = connect