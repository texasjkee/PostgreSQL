const express = require("express");
require("dotenv").config();
const http = require("http");
const config = require("../config/express.config");
const {routeInit} = require("./presentation-layer/routes");

const app = express();

const name = "Michael";

module.exports = name;

//createServer?????
const server = http.createServer(app);

routeInit(app, express);

server.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`)
});

