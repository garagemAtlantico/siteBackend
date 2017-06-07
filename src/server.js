var express = require('express')

var app = express()
var cors = require('cors');
var bodyParser = require('body-parser');

const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

require('./routes')(app);
app.listen(PORT);

module.exports = app;
