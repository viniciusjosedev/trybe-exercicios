const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
	const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
	if (team) {
		next()
	} else {
		res.sendStatus(404).send({ message: 'ID não encontrado' })
	}
}

module.exports = existingId;
