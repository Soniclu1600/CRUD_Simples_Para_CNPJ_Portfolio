const sqlite3 = require('sqlite3');

var connection = new sqlite3.Database("cnpj.db");

module.exports = connection;