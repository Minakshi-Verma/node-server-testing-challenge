const db = require("../data/db-config")

module.exports = {
    getAll,
    getById,
    remove
}

//----getAll---
function getAll(){
return db("users")
}

//----getById---

function getById(id){
    return db('users')
    .where({id})
    .first()

}

//----delete-----

function remove(id){
    return db("users")
    .where({id})
    .del()
}