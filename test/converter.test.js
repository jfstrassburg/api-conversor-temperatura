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

  describe('/GET:value Convert fahrenheit to celsius', () => {
    it('Should return status 400 when the value other than number', (done) => {
      chai
        .request(url)
        .get('/fahrenheit/fc/celsius')
        .set('content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          should.equal(err, null);
          res.status.should.be.equal(400);
          done();
        });
    });

    it('Status 200 must be returned and the converted value equal to 0.00', (done) => {
      chai
        .request(url)
        .get('/fahrenheit/32/celsius')
        .set('content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          should.equal(err, null);
          res.status.should.be.equal(200);
          res.should.be.json;
          res.body.should.have.property('celsius');
          res.body.celsius.should.equal('0.00');
          done();
        });
    });

    it('Status 200 must be returned and the converted value equal to 18.33', (done) => {
      chai
        .request(url)
        .get('/fahrenheit/65/celsius')
        .set('content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          should.equal(err, null);
          res.status.should.be.equal(200);
          res.should.be.json;
          res.body.should.have.property('celsius');
          res.body.celsius.should.equal('18.33');
          done();
        });
    });
  });

  describe('/GET:value Convert celsius to fahrenheit', () => {
    it('Should return status 400 when the value other than number', (done) => {
      chai
        .request(url)
        .get('/celsius/fc/fahrenheit')
        .set('content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          should.equal(err, null);
          res.status.should.be.equal(400);
          done();
        });
    });

    it('Status 200 must be returned and the converted value equal to 89.60', (done) => {
      chai
        .request(url)
        .get('/celsius/32/fahrenheit')
        .set('content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          should.equal(err, null);
          res.status.should.be.equal(200);
          res.should.be.json;
          res.body.should.have.property('fahrenheit');
          res.body.fahrenheit.should.equal('89.60');
          done();
        });
    });

    it('Status 200 must be returned and the converted value equal to 149.00', (done) => {
      chai
        .request(url)
        .get('/celsius/65/fahrenheit')
        .set('content-Type', 'application/json')
        .set('Accept', 'application/json')
        .end((err, res) => {
          should.equal(err, null);
          res.status.should.be.equal(200);
          res.should.be.json;
          res.body.should.have.property('fahrenheit');
          res.body.fahrenheit.should.equal('149.00');
          done();
        });
    });
  });
});
