
const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;

describe('Search Routes', () => {
    it('should return search results', (done) => {
        request(app)
            .get('/api/search?query=test')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});
