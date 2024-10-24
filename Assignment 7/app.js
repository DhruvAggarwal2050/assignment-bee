const express = require('express');
const app = express();

app.set('view engine', 'ejs');

let isLoggedIn = false;

app.get('/', (req, res) => {
  res.render('index', { isLoggedIn });
});

app.listen(3002, () => {
  console.log('Server running on http://localhost:3002');
});