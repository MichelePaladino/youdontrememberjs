const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const { javascript } = require('./database/db-javascript')
const { react } = require('./database/db-react')


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/javascript', (req, res) => {
  res.send({ flashcards: javascript });
});

app.get('/api/react', (req, res) => {
  res.send({ flashcards: react });
});

app.listen(port, () => console.log(`Hey, this is server.js listening on port ${port}!`));