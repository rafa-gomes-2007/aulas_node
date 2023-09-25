const express = require("express") // importa o express

const app = express()

app.get('/', (requisição, resposta) => {
    resposta.send("Seja bem_vindo ao meu servidor!")
}) // esta barra representa o loalhost 3000

app.listen(3000 , () => {
    console.log("Vai Corinthinas !!!")
})


//http://localhost:3000/ O USUARIO  ENTRARA NESTE LINK E RECEBERA UMA MENSAGEM