// src/app.js

const express = require('express');
const cacauTrybe = require('./cacauTrybe');
const fs = require('fs/promises');
const path = require('path')

const app = express();

app.use(express.json());

app.put('/chocolate/:id', async (req, res) => {
	const {id} = req.params;
	const { body } = req;
	console.log(typeof body);
	const find = await cacauTrybe.getChocolateById(Number(id));

	if(!find) return res.status(404).json({"message": "chocolate not found"})

	const chocolate = await cacauTrybe.readCacauTrybeFile();
	const index = chocolate.chocolates.findIndex(e => e.id === Number(id))

	chocolate[index] = {...chocolate[index], body}

	await fs.writeFile(path.resolve(__dirname, 'files/cacauTrybeFile.json'), chocolate);

	return res.status(200).json({
		chocolate: {
			...chocolate.chocolates[index]
		}
	})

})

app.get('/chocolates', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
	const data = await cacauTrybe.readCacauTrybeFile();

	return res.status(200).json({ totalChocolates: data.chocolates.length });
})

app.get('/chocolates/search', async (req, res) => {
	const data = await cacauTrybe.readCacauTrybeFile();
	const { name } = req.query;
	
	const filter = data.chocolates.filter(e => (e.name).toLowerCase().includes(name))

	if(filter.length === 0) return res.status(404).json([])

	return res.status(200).json(filter);
})

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

module.exports = app;
