'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
		return queryInterface.addColumn('Books', 'publisher', {
			allowNull: false,
			defaultValue: 'produtora teste',
			type: Sequelize.STRING
		});
  },

  down: async (queryInterface, Sequelize) => {
		return queryInterface.removeColumn('Books', 'publisher');
  }
};
