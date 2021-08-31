require('dotenv').config()
const express = require('express')

const app = express() // create express app
const path = require('path')
const apiServerApp = require('./dist/index')

// resolve the build folder
const build = path.join(__dirname, 'frontend', 'build')

// serve the index.html inside html by default
app.use(express.static(build))

// route for the backend code
app.use('/api/v1', apiServerApp)

// so that client-side router in react could work
app.use((req, res, next) => {
	console.log('hello')
	res.sendFile(path.join(build, 'index.html'))
})

const PORT = process.env.PORT || 5000
// start express server on port 5000
app.listen(PORT, () => {
	console.log('server started on port 5000')
})
