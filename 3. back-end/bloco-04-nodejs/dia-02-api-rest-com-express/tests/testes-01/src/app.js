const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();

app.use(express.json());

const teams = [
	{
		"id": 1,
		"name": "São Paulo Futebol Clube",
		"initials": "SPF"
	},
	{
		"id": 2,
		"name": "Clube Atlético Mineiro",
		"initials": "CAM"
	}
]


app.get('/', (req, res) => {
	console.log(req)
	res.status(200).json({ message: 'Olá Mundo!' });
});

app.get('/teams', async (req, res) => {
	const data = JSON.parse(await fs.readFile(path.resolve(__dirname, 'data.json')));
	return res.status(200).json(data);
})

app.post('/teams', (req, res) => {
	const newTeam = { ...req.body };
	console.log(req.body)
	teams.push(newTeam);

	

	res.status(201).json({ team: newTeam });
});

app.put('/teams', (req, res) => {
	const { id, name, initials } = req.body;

	const updateTeam = teams.find((team) => team.id === Number(id));
	console.log(updateTeam)

	if (!updateTeam) {
		res.status(404).json({ message: 'Team not found' });
	}

	updateTeam.name = name;
	updateTeam.initials = initials;
	res.status(200).json({ updateTeam });
});

app.delete('/teams/', (req, res) => {
  const { id } = req.body;
  const arrayPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrayPosition, 1);

  res.status(200).end();
});



module.exports = app;
