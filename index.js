const express = require('express');
const err404 = require('./src/middleware/error-404')
const app = express();
const indexRouter = require('./src/routes/index')
const path = require("path");

app.use(express.urlencoded());
app.set('views', path.join(__dirname, './src/views'));
app.set("view engine", "ejs");

app.use('/', indexRouter)

app.use(err404)

const PORT = process.env.PORT || 3001;
app.listen(PORT);

