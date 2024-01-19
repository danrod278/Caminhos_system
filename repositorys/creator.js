const novoAluno = require("../models/novoAluno")
const Alunos = novoAluno.Alunos
const Usuarios = require('../models/novoUsuario').Usuarios
const { v4: uuidv4 } = require('uuid');
const conexao = require("../DB/connectionAtlas")
const connect = conexao.connect

async function add_aluno(form){
    const novoId = uuidv4()
    
    try{
        const add_aluno = new Alunos({
            _id:novoId,
            nome:form.nome,
            nome_responsavel:form.nome_responsavel,
            sexo:form.sexo,
            cpf:form.cpf,
            rg:form.rg,
            cidade_origem:form.cidade_origem,
            nascimento:date,
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
            username:form.cpf,
            password:`${form.cpf}`,
            type:"aluno",
            firstAcess:true
        })
        await add_in_usuarios.save()
        
    }catch(err){
        console.log("Houve um erro: "+err)
    }
}


module.exports = {add_aluno}

connect()

