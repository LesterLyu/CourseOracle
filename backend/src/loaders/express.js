const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cookieSession = require('cookie-session');
const cors = require('cors')

const userRouter = require("../routes/userRouter");
const ratingRouter = require("../routes/ratingRouter");
const materialsRouter = require("../routes/materialsRouter");
const searchRouter = require("../routes/searchRouter");
const transactionRouter = require("../routes/transactionRouter");

const {authMiddleware, errorHandler} = require('../middlewares');
const config = require('../../config');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors({
  credentials: true,
  origin: config.allowedOrigins
}));
app.use(cookieParser());
app.use(cookieSession(config.cookieSession));


app.use("/api", userRouter);
app.use("/api", ratingRouter);
app.use('/api', materialsRouter);
app.use('/api', searchRouter);

// Routes below require authentication
app.use('/api', authMiddleware('Authentication Required'));
app.use('/api', transactionRouter);

app.use(errorHandler);

// 404 handler
app.use(function (req, res, next) {
  res.status(404).json({success: false, code: 404, message: "Sorry can't find that!"});
})

module.exports = app;
