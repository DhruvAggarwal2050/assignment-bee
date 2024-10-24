const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

let posts = [
  { title: 'My First Blog Post', body: 'This is the body of my first post!' },
  { title: 'Learning EJS', body: 'EJS is a simple templating engine for Express.' }
];

app.get('/posts', (req, res) => {
  res.render('posts', { posts });
});

app.post('/posts', (req, res) => {
  const newPost = {
    title: req.body.title,
    body: req.body.body
  };
  
  posts.push(newPost);

  res.redirect('/posts');
});

app.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});