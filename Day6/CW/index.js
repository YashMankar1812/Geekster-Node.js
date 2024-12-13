const express = require('express');
const loggerMiddleware = require('./loggerMiddleware'); // Import the middleware

const app = express();

// Use the logger middleware
app.use(loggerMiddleware);

// Example routes
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
