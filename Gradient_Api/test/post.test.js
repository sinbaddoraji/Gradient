
const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;

describe('Post Routes', () => {
    it('should retrieve all posts', (done) => {
        request(app)
            .get('/api/posts')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });

    // Other post-related tests...
});
