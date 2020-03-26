<!-- const request = require("supertest")
const express = require("express")
const router = express.Router()

describe('router',function(){
    describe('Get /users', function(){

        it('should return 200 ok (asynce way)', async function(){
            const response = await request(router).get("/users");
            expect(response.status).toBe(200)
        })

        it ('shuld return 200 ok (using promise)', function(){
            return request(server)
            .get('/users')
            .then(response=>{
                expect(response.status).toBe(200);
            })
        })

    })

})


module.exports = router; -->


