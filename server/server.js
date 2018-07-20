require('dotenv').config();
const massive = require('massive');
const espress = require('express');
const bodyParser = require('body-parser');

import controller from './controller'

const app = express();

massive(process.env.CONNECTION_STRING)
.then(dbInstance => {
  console.log(dbInstance)
  app.set('db', dbInstance)})
.catch(err = console.log(err, 'Alert! Error! We got one!'))
app.use(bodyParser.json());


const SERVER_PORT = process.env.SERVER_PORT || 4200;
app.listen(SERVER_PORT, () => {
  console.log(`Kevin Hart cracking em up on port: ${SERVER_PORT}!!`);
});