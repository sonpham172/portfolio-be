const express = require('express');
const routes = require('./routes');
const bodyParser = require("body-parser");
const { default: mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3999;

app.use(bodyParser.json())
app.use(cookieParser())
routes(app);

mongoose.connect(process.env.MONGODB)
.then(() => {
  console.log('Connect DB success');
})
.catch((err) => {
  console.log('Error connect DB: ', err);
})

app.listen(PORT, () => {
  console.log('Server is running on port: ', PORT);
})