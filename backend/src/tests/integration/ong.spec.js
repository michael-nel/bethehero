const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../database/connection')

describe('ONG', () => {
    beforeEach(async  ()=> {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () =>{
        const response =  await request(app)
        .post('/ongs')
        .send({
            name:"APAD2",
            email:"teste@teste",
            whatsapp:"993939",
            city:"Sao Paulo",
            uf:"SP"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveProperty(8);
    });
});