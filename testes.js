const mongoose = require("mongoose")
const Schema  = mongoose.Schema
const uri = 'mongodb+srv://danrod278:emMSgvbLOInAibEj@cluster0.tanatjt.mongodb.net/teste05?retryWrites=true&w=majority' 
//const client = new MongoClient(url_database,{useNewUrlParser: true, useUnifiedTopology: true })


const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

// Função para conectar ao MongoDB Atlas
async function connect() {
    try {
        await mongoose.connect(uri, options);
        console.log('Conectado ao MongoDB Atlas com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB Atlas:', error);
    }
}
const teste = new Schema({
    _id:String,
    username:String,
    password:String,
    type:String,
    firstAcess:Boolean
})


const Usuario = mongoose.model("usuarios", teste)

async function create(){
    try{
        const pessoas = await Usuario.find({username:"danrod278"})
        console.log(pessoas)
    }catch(err){
        console.log(err)
    }
}


create()
connect()
