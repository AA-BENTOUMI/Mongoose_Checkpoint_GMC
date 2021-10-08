// part import
// 1require express
const express = require("express");

const connectDb = require("./config/connectDB");
//2 instance methods of all express methods
const app = express();
require("dotenv").config();
// *****************************************************************
// call function that connect with the database
connectDb();
// --------------------------------------------------------------------
// middleware to read the json type
app.use(express.json());
//  middleware for Person API
app.use("/api/person", require("./router/person"));
// -----------------------------------------------------------------------
// create a server Part
// 3port
PORT = process.env.PORT;
// 4create server
app.listen(PORT, (err) =>
  err
    ? console.log(err)
    : console.log("server is runnig with successfully", PORT)
);
