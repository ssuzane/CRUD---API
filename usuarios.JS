'use strict'

/async function cadastrarUsuario (usuario) {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    }
    const response = await fetch(url, options)
    console.log (response.ok)
    return response.ok
}
cadastrarUsuario(usuario)
/*
async function listarUsuarios () {
    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch(url)
    const data = await response.json()
    console.log (data)
    return data
}

async function atualizarUsuario (usuario) {
    const url = `http://10.107.140.2:8080/usuarios/${usuario}`
   const   options = {
       method: 'PUT',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(usuario)
   }
   const response = await fetch(url, options)
   console.log(response.ok)
   return response.ok
}

const usuarioAtualizado = {

    id: 91,
    nome: 'Sususs ',
    email: 'suuu@gmai.com'
}

const novoUsuario = {
    nome: 'Susu',
    email: 'susu@gmail.com'
}



async function deletarUsuario (id){
    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE'
    }

    const response = await fetch(url, options)

    console.log(response.ok)
    return response.ok
}*/



