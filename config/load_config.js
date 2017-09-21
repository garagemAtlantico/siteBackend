var dotenv = require('dotenv');

var configFile = '.env';
if(process.env.NODE_ENV === "test") {
  configFile = '.env.test'
}

dotenv.load({ path: configFile });
