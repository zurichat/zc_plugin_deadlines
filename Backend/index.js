console.log('hello')
const express = require('express')

const app = express()

app.get('/', async (req, res) => res.send('home'))
app.get('/', async (req, res) => res.send('post'))
app.get('/', async (req, res) => res.send('user'))
app.listen(4000, () => console.log('Listening on 4000'))
