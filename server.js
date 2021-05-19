const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const path = require('path')
require('dotenv').config()
const bodyParser = require('body-parser')
const cors = require('cors')


const uri = process.env.MONGODB_CONNECTION_STRING;
mongoose.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB has been connected"))
.catch((err) => console.log(err))

// here we create an instance of the express module and assign it to app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
const PORT = process.env.PORT || 5000;

// logs incomming requests
app.use(morgan('tiny'));


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
app.use(express.static(path.resolve(__dirname, './client/build')));
// Step 2:
app.get("/*", function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build", "index.html'));
});

app.listen(PORT, console.log(`Server is starting at ${PORT}`));