const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
  var res = utils.add(33, 11);
  expect(res).toBeA('number').toBe(44);
});

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7).toBeA('number');
    done();
  });
});

it('should square a number', () => {
  var res = utils.square(10);
  expect(res).toBeA('number').toBe(100);
});

it('should async square a number', (done) => {
  utils.asyncSquare(3, (sum) => {
    expect(sum).toBe(9).toBeA('number');
    done();
  });
});

it('should verify first and last names are set', () => {
  var user = {location: 'Dallas', age: 34};
  var res = utils.setName(user, 'Kyle Greenwell');
  expect(user).toBeA('object').toInclude({
    firstName: 'Kyle',
    lastName: 'Greenwell'
  });
});
