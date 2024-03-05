// src/routes/user.routes.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// Create a new user
router.post('/', userController.createUser);

// Read a single user
router.get('/:id', userController.getUser);

// Read all users
router.get('/', userController.getUsers);

// Update a user
router.put('/:id', userController.updateUser);

// Delete a user
router.delete('/:id', userController.deleteUser);

module.exports = router;