const express = require("express");

const app = express();
const errorMiddleware = require("./middlewares/errors")

app.use(express.json())

const apointments = require("./routes/apointments")

app.use("/api/v1",apointments);

//middleware to handle error
app.use(errorMiddleware)


module.exports = app;