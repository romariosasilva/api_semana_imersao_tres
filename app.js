const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('./models/home');
const Home = mongoose.model('Home');

require('./models/contato');
const Contato = mongoose.model('Contato');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
 
    app.use(cors());
    next();
});

mongoose.connect('mongodb://localhost/celke', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com o mongodb realizado com sucesso!");
}).catch((err) => {
    console.log("Erro: Não foi possível conectar ao banco de dados mongodb!\nDetalhes do erro: " + err);
});

app.get('/home', async (req, res) => {
    await Home.findOne({}).then((home) => {
        return res.json({
            error: false,
            home
        });
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: "Nenhum registro encontrado!"
        });
    });
});

app.post('/home', async (req, res) => {
    const homeExists = await Home.findOne({});
    
    if(homeExists) {
        return res.status(400).json({
            error: true,
            message: "Erro: A página home já possui um registro"
        });
    }

    await Home.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível cadastrat o conteúdo da página home"
        });
    });

    return res.json({
        error: false,
        message: "Conteúdo da página home cadastrado com sucesso"
    })
});

app.post('/contato', async(req, res) => {
    await Contato.create(req.body, (err) => {
        if(err) return res.status(400).json({
            error: true,
            message: "Erro: Não foi possível cadastrar a mensagem do contato"
        });
    })

    return res.json({
        error: false,
        message: "Mensagem do contato cadastrada com sucesso"
    });
});

app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080: http://localhost:8080");
});
