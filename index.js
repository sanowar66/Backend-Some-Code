const express = require('express');
const app = express();
//request of content type of body
const bodyParser = require('body-parser')
app.use(bodyParser.json())
    //define a simple route
app.get('/', (req, res) => {
        res.json({ message: ' Finally Welcome to my application.' })
    })
    //create user
let users = []
let lastId = 0
app.post('/users', (req, res) => {
        const user = req.body
        user.id = ++lastId
        users.push(user)
        res.json(user)
    })
    //retrieve the all users
app.get('/users', (req, res) => {
        res.json(users)
    })
    //start server here
const port = 3001
app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})