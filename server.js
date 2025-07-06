const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Route for homepage
app.get('/', (req, res) => {
  res.render('home');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
