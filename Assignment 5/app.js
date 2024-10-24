const express = require('express');
const app = express();

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Middleware to serve static files
app.use(express.static('public'));

// Route to render the search form and display search results
app.get('/search', (req, res) => {
  const searchTerm = req.query.q || ''; // Capture the query parameter 'q'
  
  // Mock search results for demonstration purposes
  const items = [
    'Book: "Node.js Basics"',
    'Movie: "The Matrix"',
    'Product: "Apple iPhone"',
    'Book: "JavaScript: The Good Parts"',
    'Movie: "Inception"'
  ];

  // Filter items based on the search term
  const filteredItems = items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render the EJS template and pass the search term and filtered results
  res.render('search', { searchTerm, filteredItems });
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});