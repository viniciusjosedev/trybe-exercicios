const config = {
	"username": "root",
	"password": process.env.MYSQL_PASSWORD,
	"database": process.env.MYSQL_DATABASE,
	"host": process.env.MYSQL_HOST,
	"dialect": "mysql"
}

module.exports = {
	development: config,
	test: config,
	production: config
}

