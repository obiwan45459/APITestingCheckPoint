const express = require('express')
const bodyParser = require("body-parser")
const app = express()

//const studentsRouter = require('./routes/students')
//const gradesRouter = require('./routes/grades')
//const registerRouter = require('./routes/register')
const orderRouter = require('./routes/order')

const PORT = 8080

app.use(express.json())

app.get('/', (req, res) => {
  res.send('welcome to the application')
})

//app.use('/students', studentsRouter)
//app.use('/grades', gradesRouter)
//app.use('/register', registerRouter)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/order', orderRouter)

app.listen(PORT)

module.exports = app