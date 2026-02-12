const express = require('express')
const router = express.Router()
const User = require('../../models/User')

//create user
router.post('/', async(req, res) => {
    const userObj = {
        name: req.body.name,
        email: req.body.email
    }
    const user = new User(userObj)
    await user.save()
    res.status(201).json(user)
})
module.exports = router