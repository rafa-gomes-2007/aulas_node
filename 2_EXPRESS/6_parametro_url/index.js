const express = require("express") // importa o express
const path = require("path") // path serve para transfomrar uma URL(./index.html por exemplo) relativa em uma URL absoluta


const app = express()

const caminho = path.join(__dirname, "templates")//dirname quer dizer pasta, esta linhna cria um camihno direto (URL) da pasta tamplates para o index.html

app.get('/usuarios/:id', (requisição, resposta) => {
    const id = requisição.params.id

    console.log(`O usuario ${id} esta desaparecido`)

    resposta.sendFile(`${caminho}/usuarios.html`)
})

app.get('/', (requisição, resposta) => {
    resposta.sendFile(`${caminho}/index.html`)
}) // esta barra representa o loalhost 3000

app.listen(3000 , () => {
    console.log("Vai Corinthinas !!!")
})


//http://localhost:3000/ O USUARIO  ENTRARA NESTE LINK E RECEBERA UMA MENSAGEM