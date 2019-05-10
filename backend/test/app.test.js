const chai = require('chai');
const expect = require('chai').expect;
const app = require('../server');

chai.use(require('chai-http'));

describe('test', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});

describe('API Endpoint /auth/signup', () => {
  const data = {
    email: 'patikav@g.cn',
    firstN: 'Fidele',
    lastN: 'Mbula',
    password: 'Patie123',
  };
  const endPointPost = '/auth/signup';

  it('Should create a new user', () => {
    return chai.request(app)
      .post(endPointPost)
      .send(data)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.a('array');
        expect(res.body).length.to.be.eql(2);
      });
  });

  // POST Bad request
  it('Should return a bad request', () => {
    return chai.request(app)
      .post(endPointPost)
      .type('form')
      .send(data)
      .then((res) => {
        throw new Error('Invalid content type!');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      });
  });
});

describe('API Endpoint /auth/signin', () => {
  const data = {
    email: 'patikav@g.cn',
    password: 'Patie123',
  };
  const endPointPost = '/auth/signin';

  it('Should sign a new user in', () => {
    return chai.request(app)
      .post(endPointPost)
      .send(data)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
      //expect(res.body).to.be.an('object');
      //expect(res.body).to.be.a('array');
      //expect(res.body).length.to.be.eql(2);
      });
  });

  // POST Bad request
  it('Should return a bad request', () => {
    return chai.request(app)
      .post(endPointPost)
      .type('form')
      .send(data)
      .then((res) => {
        throw new Error('Invalid content type!');
      })
      .catch((err) => {
        expect(err).to.have.status(404);
      });
  });
});
