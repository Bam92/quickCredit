import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';
import route from '../routes/index.routes';

const expect = chai.expect;

chai.use(chaiHttp);


describe('User sign up', () => {
  const data = {
    email: 'patikav@g.cn',
    firstN: 'Fidele',
    lastN: 'Mbula',
    //password: 'Patie123',
  };
  const endPointPost = '/api/v1/auth/signup';

  it('Should return a 200 response', () => {
    return chai.request('app')
      .post(endPointPost)
      .send(data)
      .then((res) => {
        expect(res).to.have.status(200);
      });
  });
  it('Should be an object with keys and values', () => {
    return chai.request(app)
      .post(endPointPost)
      .send(data)
      .then((res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('email');
        expect(res.body.email).to.not.equal(null);
        expect(res.body).to.have.property('fistName');
        expect(res.body.firstName).to.not.equal(null);
        expect(res.body).to.have.property('lastName');
        expect(res.body.lastName).to.not.equal(null);
      });
  });
});

describe('User sign in', () => {
  const data = {
    email: 'patikav@g.cn',
    password: 'Patie123',
  };
  const endPointPost = '/api/v1/auth/signin';

  it('Should sign a new user in', () => {
    return chai.request(app)
      .post(endPointPost)
      .send(data)
      .then((res) => {
        expect(res).to.have.status(200);

        //expect(res).to.be.json;
      //expect(res.body).to.be.an('object');
      //expect(res.body).to.be.a('array');
      //expect(res.body).length.to.be.eql(2);
      });
  });
});
