var nomesElementos = ["viewport",'formulario','nome', 'nome_responsavel', 'sexo', 'cpf', 'rg', 'cidade_origem', 'dia_nas', 'mes_nas', 'ano_nas','rua',
                            'numero',"bairro", 'cep', 'telefone_responsavel1', 'telefone_responsavel2', 'cpf_responsavel'  ]
    
    for(let i=0;i<nomesElementos.length;i++){
        console.log(`${i}: ${nomesElementos[i]}`)
    }
    function cadastro(){
        const elementos = document.querySelectorAll('[name]')
        
        
        const verificacao =""+[verificar_cpf(elementos[5].value),
        verificar_rg(elementos[6].value),
        verificar_nascimento(elementos[8].value, elementos[10].value),
        verificar_cep(elementos[14].value), verificar_telefone(elementos[15].value),
        verificar_telefone(elementos[16].value), verificar_cpf(elementos[17].value)]+""

        const comparador = ""+[true, true, true, true, true, true, true]+""
        if((verificacao)==(comparador)){
           
            elementos[1].submit()
        }
        
        
    }

    function verificar_cpf(cpf){
        const regex = /^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}|^[0-9]{11}|^[0-9]{11}/
        return (regex.test(cpf))
        
    }

    function verificar_rg(rg){
        const regex = /^[0-9]{3}[.][0-9]{3}[.][0-9]{3}[-][0-9]{2}|^[0-9]{11}|^[0-9]{11}|^[0-9]{11}/
        return (regex.test(rg))
    }

    function verificar_nascimento(dianas, anonas){
        
        const regex_ano = /^[0-9]{4}/
        const regex_dia = /^[0-9]{2}|[0-9]{1}/
        if(regex_ano.test(anonas)&&regex_dia.test(dianas)&&parseInt(dianas)<=31){
            return true
        }else{
            return false
        }
}

    function verificar_cep(cep){
        const regex = /^[0-9]{8}|^[0-9]{5}[-.][0-9]{3}$/
        return (regex.test(cep))
    }
    function verificar_telefone(telefone){
        const regex = /^[0-9]{11}$|^[(][0-9]{2}[)][0-9]{5}[-][0-9]{4}|^[0-9]{5}[-][0-9]{4}|^[0-9]{5}[0-9]{4}/
        return regex.test(telefone)
    }