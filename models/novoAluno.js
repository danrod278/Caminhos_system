const mongoose = require('mongoose')
const Schema = mongoose.Schema



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


const Alunos = mongoose.model("Dados_Gerals", novoAluno)

exports.Alunos = Alunos