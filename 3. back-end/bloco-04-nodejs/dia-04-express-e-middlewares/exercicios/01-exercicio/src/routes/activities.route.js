const express = require('express');
const fs = require('fs/promises');
const path = require('path');
require('express-async-errors');

const router = express.Router();

const readActivites = async (req, res, next) => {
  const readFile = JSON.parse(await fs.readFile(path.resolve(__dirname, 'activites.json')));
	req.readFile = readFile;
	next();
};

const validationName = (req, res, next) => {
	const { body } = req;
	if(!body.name || body.name === '') throw new Error('name'); 
	if(!(body.name.length >= 4)) throw new Error('4 caracteres');
	next()
}

const validationPrice = (req, res, next) => {
	const { body: { price } } = req;
	if(!price || price === '') throw new Error('price'); 
	if(price >= 0) throw new Error('price > 0');
	next()
}

const validationDescription = (req, res, next) => {
	const { body: { description } } = req;
	if(!description) throw new Error({ "message": "O campo description é obrigatório" }); 
	if(!description.createdAt) throw new Error({ "message": "O campo createdAt é obrigatório" });
	// if(description.createdAt) throw new Error({ "message": "O campo createdAt é obrigatório" });
	if(!description.rating) throw new Error({ "message": "O campo rating é obrigatório" })
	if(!description.difficulty) throw new Error({ "message": "O campo difficulty é obrigatório" });
	next()
}

router.post('/activities', readActivites, validationName, 
		validationPrice, validationDescription, async (req, res) => {
	const { readFile } = req;
	const { body } = req;
	readFile.push(body)
	await fs.writeFile(path.resolve(__dirname, 'activites.json'), JSON.stringify(readFile));
	return res.status(201).json({ "message": "Atividade cadastrada com sucesso!" });
})

module.exports = router;
