
const request = require('supertest');
const chai = require('chai');
const app = require('../server');
const expect = chai.expect;

describe('Media Routes', () => {
    it('should handle media upload', (done) => {
        request(app)
            .post('/api/media/upload')
            .attach('file', 'path/to/test/image.jpg')
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
});
