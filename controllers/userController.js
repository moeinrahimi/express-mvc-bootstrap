const express = require('express')
const db = require('../models')
let userController = express.Router();
userController.get(`/users`, getUsers)

async function getUsers(req, res) {
    try {
        let users = await db.User.all({ attributes: ['id'] })
        return res.status(200).json({ success: true, users })
    } catch (e) {
        return res.status(504).json({ success: false, message: e.message })
    }
}


module.exports = userController