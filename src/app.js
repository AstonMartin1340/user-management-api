// src/app.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./models');

// Middleware
app.use(express.json());

// Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
db.sequelize.sync()
.then(() => {
console.log('Database models synchronized successfully.');
})
.catch((err) => {
console.error('Error synchronizing database models:', err);
});
});