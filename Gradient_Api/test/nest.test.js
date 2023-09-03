
const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;

describe('Nest Routes', () => {
    it('should retrieve all nests', (done) => {
        request(app)
            .get('/api/nests')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });

    // Other nest-related tests...
});
