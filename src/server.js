var express = require('express')

var app = express()
var cors = require('cors');
var bodyParser = require('body-parser');
var dotenv = require('dotenv');

let configFile = '.env';
if(process.env.NODE_ENV === "test") {
  configFile = '.env.test'
}

dotenv.load({ path: configFile });

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
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
require('./idea/idea.model')(sequelize);

require('./routes')(app);
app.listen(PORT);

const pg = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/garage';

const client = new pg.Client(connectionString);

module.exports = app;
