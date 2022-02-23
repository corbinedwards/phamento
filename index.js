const express = require("express");
const app = express();
const path = require("path");
const lang = require('./languages.json');
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/language', (req,res) => res.json(lang));
app.get('/', (req,res) => res.sendFile(path.join(__dirname, '/index.html')));

app.listen(port, () => console.log(`Listening on http://localhost:3000/`));
