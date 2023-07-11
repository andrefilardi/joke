const express = require('express');
const axios = require('axios');
const fs = require('fs');


const server = express();
server.use(express.json()); // Analisa o corpo da requisição como Json

server.get('/ping', (req, res) => res.json({ pong: true }));

server.get('/joke', async (req, res) => {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any');
        const joke = response.data;

        res.json({
            joke
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao listar a piada.' });
    }
});

server.post('/favorite', (req, res) => {
    const { joke } = req.body;
    
    if (!joke) {
        return res.status(400).json({ error: 'Nenhuma piada encontrada' });
    }

    fs.appendFile('piadasSalvas.txt', joke + '\n', (err) => {
        if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erro ao salvar sua(s) piada(s) favorita(s)' });
        }

        res.json({ message: 'Piada salva com sucesso' });
    });
});  

const port = 4000; 

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});