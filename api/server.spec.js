const request = require("supertest")
const server = require('./server')

// describe('server', function(){
    describe('get /', function(){

        it('should return 200 ok', async function(){
            const response = await request(server).get('/users')            
                expect(response.status).toBe(200)            
        })

        it ('should return 200 ok (using promise)', function(){
            return request(server)
            .get('/users')
            .then(response=>{
                expect(response.status).toBe(200);
            })
        })

        it('should return json', function(){
            return request(server)
            .get("/users")
            .then(res=>{
                expect(res.type).toMatch(/json/i)
            })
        })
    })

    describe('delete /', function(){
            
        it ("should return 204 ok", async function(){
            const response = await request(server).delete("/users/:id")
            expect(response.status).toBe(204)
        })

        it("should return 500", async function(){
            const response =  await request(server)
            .delete("/users/:id")
            // console.log(response.body)            
            expect(response.body).toEqual({}) 
                      
        })
    })
// })