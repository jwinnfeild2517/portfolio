const express = require('express')
const morgan = require('morgan')
const path = require('path')

// here we create an instance of the express module and assign it to app
const app = express();
const PORT = process.env.PORT || 8080;

// logs incomming requests
app.use(morgan('tiny'));


app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes ex()
app.get('/api', (req, res) => {
  const data = {
    mame: 'jenner',
    age: '25',
    role: 'QA Analyst and Dev'
  };
  res.json(data);
})

//verify application is in heroku and then serve the build folder
app.use(express.static(path.join(__dirname, './Client/build')))

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, './Client/build/index.html'))
})

app.listen(PORT, console.log(`Server is starting at ${PORT}`));