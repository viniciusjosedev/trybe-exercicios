const { Book } = require('../models');

const getAll = async (author, order) => {
	if (!author) return Book.findAll(
		{
			order: order ? [['title', 'ASC']] : [],
		}
	);
  return Book.findOne(
		{
			where: { author: author },
	    order: order ? [['title', 'ASC']] : [[]],
    }
	);
};

const getById = async (id) => Book.findByPk(id);

const create = async (data) => Book.create(data);

const update = async (id, data) => Book.update(
	data,
	{where: { id }}
);

const remove = async (id) => Book.destroy({where: { id }});

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove,
}
