const express = require('express');
const sqlite3 = require('sqlite3');
const cors = require('cors');

const { getMunicipios, getEmpresas, getCidadeCod } = require('./sqliteAPI.js');

const app = express();


app.use(cors());


var connection = new sqlite3.Database("cnpj.db");

// var connection = new sqlite3('cnpj.db');

app.get('/testeDaMamae/Hello', (req, res) => {
    res.json({ testedepalavra: 'Hello World Mamis' });
});

// const statement = db.prepare("INSERT INTO users (name) VALUES (?)");statement.run("John");statement.run("Jane");statement.finalize();

app.get('/CNPJ/Get/Municipios/:description', async (req, res) => {
    const description = req.params.description;
    const municipios = await getMunicipios(description);
    res.json({ municipios });
});

app.get('/CNPJ/Get/Cidade/:codigo', async (req, res) => {
    const codigo = req.params.codigo;
    const cidadeCod = await getCidadeCod(codigo);
    res.json({ cidadeCod });
});

app.get('/CNPJ/Get/Estabelecimentos/:codMunicipio', async (req, res) => {
    const codMunicipio = req.params.codMunicipio;
    const allEstabelecimentos = await getEmpresas(codMunicipio);
    res.json({ municipios: allEstabelecimentos });
});

app.listen(3000 , () => {
    console.log("Server Connected.");
});