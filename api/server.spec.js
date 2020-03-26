const request = require("supertest")
const server = require('./server')

describe('server', function(){
    describe('get /', function(){

        it('should return 200 ok', async function(){
            const response = await request(server).get('/')            
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
            return 
    })
})