const express = require('express')
const mongoose = require('morgan')
const morgan = require('morgan')
const path = require('path')

// here we create an instance of the express module and assign it to app
const app = express();
const PORT = process.env.PORT || 8080;

// logs incomming requests
app.use(morgan('tiny'));

// routes
app.get('/api', (req, res) => {
  const data = {
    mame: 'jenner',
    age: '25',
    role: 'QA Analyst and Dev'
  };
  res.json(data);
})


app.listen(PORT, console.log(`Server is starting at ${PORT}`));