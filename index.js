// require("dotenv").config();

const express = require("express");
const app = express();
const path = require("path");
const lang = require('./languages.json');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/language', (req,res) => res.json(lang));
app.get('/', (req,res) => res.sendFile(path.join(__dirname, '/index.html')));

app.listen(process.env.PORT, () => console.log(`Listening...`));
