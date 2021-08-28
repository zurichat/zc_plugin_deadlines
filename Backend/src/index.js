console.log('hello')
const express = require('express')

const app = express()

app.get('/user', async (req, res) => res.send('HELLO'))

app.listen(3000, () => console.log('Listening'))
