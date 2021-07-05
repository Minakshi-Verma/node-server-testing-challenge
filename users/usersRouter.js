const express = require("express")

Users = require('./usersModel')

const router = express.Router()

//GET request
router.get('/', (req,res)=>{
  Users.getAll()
  .then(users=>{
      res.status(200).json(users)
  })
  .catch(err=>{
      res.status(500).json(error)
  })
})


//GET by ID request

router.get('/:id', (req,res)=>{
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

router.delete('/:id', (req,res)=>{
    const {id} = req.params
    Users.remove(id)
    .then(deleted=>{
        res.status(204).json({message:"No data available"})
    })
    .catch(err=>{
        res.status(404).json(err)
    })
})


module.exports = router;