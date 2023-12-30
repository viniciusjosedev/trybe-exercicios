'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert(
		'Books', [
			{
				title: 'teste',
				author: 'teste',
				pageQuantity: 55
			}
		]
	),

  down: async (queryInterface, Sequelize) => queryInterface.bulkDelete(
		'Books', null, {})
};
