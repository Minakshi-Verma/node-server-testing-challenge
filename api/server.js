const express = require("express");

const UsersRouter = require('../users/usersRouter')

const server = express()

server.use(express.json());
server.use('/users', UsersRouter)

module.exports = server;