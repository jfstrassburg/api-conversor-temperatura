const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../src/index');

chai.use(chaiHttp);

const url = `http://localhost:${process.env.PORT | 3001}`;

describe('Temperature Converter', () => {
  describe('/GET Server status', () => {
    it('Could return server status', (done) => {
      chai
        .request(url)
        .get('/')
        .set('content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          should.equal(err, null);
          res.status.should.be.equal(200);
          res.should.be.json;
          res.body.should.have.property('status');
          res.body['status'].should.equal('OK');
          done();
        });
    });
  });
});
