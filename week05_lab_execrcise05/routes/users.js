
const express = require('express');
const routerUser = express.Router();
const user = require('../user.json');

// Return all user details
routerUser.get('/profile', (req, res) => {
    res.json(user);
});

// Login
routerUser.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username !== user.username) {
        return res.status(401).json({
            status: false,
            message: 'User Name is invalid'
        });
    }

    if (password !== user.password) {
        return res.status(401).json({
            status: false,
            message: 'Password is invalid'
        });
    }

    res.json({
        status: true,
        message: 'User Is valid'
    });
});

// Logout
routerUser.get('/logout/:username', (req, res) => {
    const username = req.params.username;
    res.send(`<b>${username} successfully logged out.</b>`);
});

module.exports = routerUser;
