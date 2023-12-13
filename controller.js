const {MongoClient} = require("mongodb")
const { v4: uuidv4 } = require('uuid');
const mongoose = require("mongoose")
const Schema  = mongoose.Schema
const url_database = 'mongodb://localhost:27017/teste05' 
const client = new MongoClient(url_database,{useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connect(url_database, {useNewUrlParser:true, useUnifiedTopology:true})
//Models
const novoUsuario = new Schema({
    _id:String,
    username:String,
    password:String,
    type:String,
    firstAcess:Boolean
})

const novoAluno = new Schema({
    _id:String,
    nome:String,
    nome_responsavel:String,
    sexo:String,
    cpf:String,
    rg:String,
    cidade_origem:String,
    dia_nascimento:String,
    mes_nascimento:String,
    ano_nascimento:String,
    rua:String,
    numero:String,
    bairro:String,
    cep:String,
    telefone_R1:String,
    telefone_R2:String,
    cpf_responsavel:String
})

const Usuarios = mongoose.model("Usuarios", novoUsuario)
const Alunos = mongoose.model("Dados_Geral", novoAluno)
 
async function add_aluno(form){
    const novoId = uuidv4()
    console.log(form.dia)
    try{
        const add_aluno = new Alunos({
            _id:novoId,
            nome:form.nome,
            nome_responsavel:form.nome_responsavel,
            sexo:form.sexo,
            cpf:form.cpf,
            rg:form.rg,
            cidade_origem:form.cidade_origem,
            dia_nascimento:form.dia,
            mes_nascimento:form.mes,
            ano_nascimento:form.ano,
            rua:form.rua,
            numero:form.numero,
            bairro:form.bairro,
            cep:form.cep,
            telefone_R1:form.telefone_responsavel1,
            telefone_R2:form.telefone_responsavel2,
            cpf_responsavel:form.cpf_responsavel
        })
        await add_aluno.save()
        const add_in_usuarios = new Usuarios({
            _id:novoId,
            username:form.nome,
            password:`${form.dia}${form.ano}`,
            type:"aluno",
            firstAcess:true
        })
        await add_in_usuarios.save()
        
    }catch(err){
        console.log("Houve um erro: "+err)
    }
}

async function testa_acesso(usernamep, passwordp){
    try{
        const pessoas = await Usuarios.find({username:usernamep, password:passwordp})
        console.log(pessoas)
        if(pessoas.length===0){
            return [false]
        }else{
            return [true, ""+pessoas[0]._id+"", pessoas[0].type]
        }
        
    }catch(err){
        console.log(err) 
    }
} 




module.exports = {testa_acesso, add_aluno}

