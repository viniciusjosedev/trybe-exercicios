const BooksSchema = (Sequelize, DataTypes) => {
	const Books = Sequelize.define('Book', {
		title: DataTypes.STRING,
		author: DataTypes.STRING,
		pageQuantity: DataTypes.INTEGER,
		createdAt: DataTypes.DATE,
		updatedAt: DataTypes.DATE
	})

	return Books;
}

module.exports = BooksSchema;
