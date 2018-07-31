const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const { javascript } = require('./database/db-javascript')
const { react } = require('./database/db-react')
const { redux } = require('./database/db-redux')
const { html } = require('./database/db-html')
const { css } = require('./database/db-css')


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/api/javascript', (req, res) => {
  res.send({ flashcards: javascript });
});

app.get('/api/react', (req, res) => {
  res.send({ flashcards: react });
});

app.get('/api/redux', (req, res) => {
  res.send({ flashcards: redux });
});

app.get('/api/html', (req, res) => {
  res.send({ flashcards: html });
});
app.get('/api/css', (req, res) => {
  res.send({ flashcards: css });
});

app.listen(port, () => console.log(`Hey, this is server.js listening on port ${port}!`));