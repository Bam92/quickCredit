// Require the depencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const should = require('should');

//const should = chai.should();

chai.use(chaiHttp);
//chai.should();

/**
* Test the /POST route for user sign in
*/
describe('/POST signIn w/o data', () => {
  const sign_in_data = {
    email: '',
    password: '',
  };
  it('Should respond with status 400', (done) => {
    chai.request('app')
    .post('/api/v1/auth/signin')
    .send(sign_in_data)
    .end((err, res) => {
    res.should.have.status(400);
      /*res.body.should.be.a('array');
      res.body.length.should.be.eql(2); */// default length
      done();
  });
  });
});
