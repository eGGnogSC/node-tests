const request = require('supertest');
const expect = require('expect');

const app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Todo App v1.0'
      });
    })
    .expect(200)
    .end(done);
});

it('should return me as a user', (done) => {
  request(app)
    .get('/users')
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Kyle Greenwell',
        age: 34
      });
    })
    .expect(200)
    .end(done);
});
