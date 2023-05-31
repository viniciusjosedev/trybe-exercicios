const booksService = require('../services/Books.service');

const getAll = async (_req, res) => {
	const { author, order } = _req.query;
  const data = await booksService.getAll(author, order);
	// console.log(data);
	return res.status(200).json(data);
}

const getById = async (req, res) => {
	const { id } = req.params;
	const data = await booksService.getById(id);
	if (data === null) return res.status(200).json([]);
	return res.status(200).json(data);
}

const create = async (req, res) => {
	const { body } = req;
	const teste = await booksService.create(body);
	// console.log(teste.dataValues);
	return res.status(200).json(teste);
}

const update = async (req, res) => {
  const { body, params: { id } } = req;
	const [rowEffectd] = await booksService.update(id, body);
	if(rowEffectd === 0) return res.status(400).json({message: 'Book not found!'})
	return res.status(200).json({message: 'Book updated!'});
}

const remove = async (req, res) => {
	const { id } = req.params;
	const data = await booksService.remove(id);
	// console.log(data);
	if (data === 0) return res.status(500).json({message: 'Algo deu errado'});
	return res.status(500).json({message: 'Book deleted!'});
}

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove
};
