// src/app.js

require('express-async-errors'); 
const express = require('express');
const validateTeam = require('./middlewares/validateTeam');
const existingId = require('./middlewares/existingId');
const apiCredentials = require('./middlewares/apiCredentials');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');


const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];


app.get('/teams', (_req, res) => res.json(teams));

app.get('/teams/:id', existingId, (_req, res) => {
	const id = Number(_req.params.id);
  const team = teams.find(t => t.id === id);
	res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  if (
    // confere se a sigla proposta está inclusa nos times autorizados
    !req.teams.teams.includes(req.body.sigla)
    // confere se já não existe um time com essa sigla
    && teams.every((t) => t.sigla !== req.body.sigla)
  ) {
    return res.status(422).json({ message: 'Já existe um time com essa sigla'});
  }
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

	const index = teams.indexOf(team);
	const updated = { id, ...req.body };
	teams.splice(index, 1, updated);
	res.status(201).json(updated);
});

app.delete('/teams/:id', existingId,(req, _res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

	const index = teams.indexOf(team);
	teams.splice(index, 1);
  
});

app.use((req, res) => res.sendStatus(404));


module.exports = app;