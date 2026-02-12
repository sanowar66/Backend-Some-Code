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
    // get all users
router.get('/', async(req, res) => {
        try {
            const users = await User.find({})
            res.json(users)
        } catch {
            res.status(500).json({ message: "Something went wrong." })
        }
    })
    //get one user
router.get('/:id', async(req, res) => {
        try {
            const id = req.params.id
            const user = await User.findById(id)
            if (user) {
                res.json(user)
            } else {
                res.status(404).json({ message: "User not found." })
            }
        } catch {
            res.status(500).json({ message: "Something went wrong" })
        }
    })
    //update one user by id
router.put('/:id', async(req, res) => {
        try {
            const id = req.params.id
            const updateUser = await User.findByIdAndUpdate(id, {
                name: req.body.name,
                email: req.body.email
            }, { new: true })
            if (updateUser) {
                res.json(updateUser)
            } else {
                res.status(404).json({ message: "User not found." })
            }
        } catch {
            res.status(500).json({ message: "Something went wrong" })
        }
    })
    //delete one user by id
router.delete('/:id', async(req, res) => {
    try {
        const id = req.params.id
        const deleteUser = await User.findByIdAndDelete(id)
        if (deleteUser) {
            res.json({ message: "User Deleted Successfully," })
        } else {
            res.status(404).json({ message: "User not found." })
        }
    } catch {
        res.status(500).json({ message: "Something went wrong" })
    }
})

module.exports = router