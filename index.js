const express = require('express');
const app = express();
const port = 3000; // You can choose a different port

// Middleware to serve static files if needed (optional)
// app.use(express.static('public'));

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to Express!');
});

// Another example route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
