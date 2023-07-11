Olá, agradeço desde já a oportunidade.

Passo a passo para rodar e testar o projeto

# Após cloná-lo
Abra a pasta do projeto no terminal ou seu editor de código favorito e rode - npm install

# Para start do server
node server.js

# defini a porta 4000 como porta a ser utilizada

# Para testar as rotas:
    # Rota que gera a piada RANDONICA: 
        localhost:4000/joke
    #rota que salva a piada favorita em um arquivo
        localhost:4000/favorite

# A segunda rota (salvar piada favorita) espera receber no corpo da requisição (body) um JSON com o a propriedade joke, segue exemplo abaixo:
{
    "joke":"Teste de envio de piada favorita."
}        