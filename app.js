const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

const db = require('./config/mongoose-connection');

const path = require('path');
const ownersRouter = require('./routes/ownersRouters')
const productsRouter = require('./routes/productsRouter')
const usersRouter = require('./routes/userRouters')

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000);