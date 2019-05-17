import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../app';

const expect = chai.expect;

chai.use(chaiHttp);

describe('Test Travis-ci', () => {
  it('should return a string', () => {
    expect('ci with travis').to.equal('ci with travis');
  });
});