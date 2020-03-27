const express = require("express");
// const UsersRouter = require('../users/usersRouter')
Users = require('../users/usersModel')

const server = express()

server.use(express.json());
// server.use('/users', UsersRouter)

server.get("/", (req, res) => {
    res.status(200).json({ api: "up" });
  });

//GET request
server.get('/users', (req,res)=>{
    Users.getAll()
    .then(users=>{
        res.status(200).json(users)
    })
    .catch(err=>{
        res.status(500).json(error)
    })
  })  
  
  //GET by ID request  
  server.get('/users/:id', (req,res)=>{
      const {id} = req.params
  
      Users.getById(id)
      .then(user=>{
          res.status(200).json(user)
      })
      .catch(err=>{
          res.status(500).json({message:"We can not find the user with this id"})
      })
  })
  
  //DELETE request  
  server.delete('/users/:id', (req,res)=>{
      const {id} = req.params
      Users.remove(id)
      .then(deleted=>{         
            res.status(204).json({message:"No data available"})       
      })
      .catch(err=>{
          res.status(500).json(err)
      })
  })

module.exports = server;