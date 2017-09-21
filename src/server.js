var express = require('express');
var path = require('path');

var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

require(path.resolve('config', 'load_config.js'))

const sequelize = require('./sequelizer_wrapper')();

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

sequelize
  .authenticate()
  .then(() => {
    /* eslint-disable no-console */
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    /* eslint-disable no-console */
    console.error('Unable to connect to the database:', err);
  });
require('./idea/idea.model')(sequelize);

require('./routes')(app);
app.listen(PORT);

// const pg = require('pg');
// const connectionString = process.env.DATABASE_URI || 'postgres://localhost:5432/garage';
//
// /* eslint-disable no-unused-vars */
// const client = new pg.Client(connectionString);

module.exports = app;
