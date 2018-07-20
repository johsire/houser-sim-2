require('dotenv').config();
const massive = require('massive');
const express = require('express');
const bodyParser = require('body-parser');

const controller = require ('./controller');

const app = express();

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
   app.set('db', dbInstance)})
  .catch(err => console.log(err));

app.use(bodyParser.json());


const SERVER_PORT = process.env.SERVER_PORT || 4200;
app.listen(SERVER_PORT, () => {
  console.log(`Kevin Hart cracking em up on port: ~ ${SERVER_PORT}!`);
});