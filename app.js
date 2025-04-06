const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const expressSession = require('express-session');
const flash = require("connect-flash");

require('dotenv').config();

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

app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());

app.use("/", indexRouter)
app.use("/owners", ownersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(3000);