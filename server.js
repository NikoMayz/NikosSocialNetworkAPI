const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use(routes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api', {
  // Removed deprecated options
});

// Log MongoDB queries being executed
mongoose.set('debug', true);

// Start the server
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
