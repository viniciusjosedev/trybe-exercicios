const config = {
	"username": process.env.MYSQL_USER || 'root',
	"password": process.env.MYSQL_PASSWORD || 'teste123',
	"database": process.env.MYSQL_DATABASE || 'teste',
	"host": process.env.MYSQL_HOST || 'localhost',
	"dialect": 'mysql',
};

module.exports = {
	development: config,
	test: config,
	production: config,
};
