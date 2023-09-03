
const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;

describe('User Routes', () => {
    it('should register a user and return a token', (done) => {
        request(app)
            .post('/api/users/register')
            .send({ 
                username: 'testuser', 
                email: 'test@email.com', 
                password: 'testpassword' 
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.have.property('token');
                done();
            });
    });
    
    // Other user-related tests...
});
