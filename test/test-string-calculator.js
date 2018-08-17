

const chai = require('chai');
const checkString = require('./test.js');

const { expect } = chai;

// Start test cases for Example Behaviors
function itAlwaysTrue() {
  // Chai API Reference can be found at http://www.chaijs.com/api/bdd/
  expect(true).to.be.true;
}

function itAlwaysBe2() {
  expect(2).to.be.equal(2);
}


function emptyString() {
  expect(checkString('')).to.be.equal(0);
}

function numString() {
  expect(checkString('10')).to.be.equal(10);
}

function sumString() {
  expect(checkString('2,3')).to.be.equal(5);
}

function sumNewline() {
  expect(checkString('2\n3')).to.be.equal(5);
}

function sum3Num() {
  expect(checkString('1,2\n3')).to.be.equal(6);
}

function callNagative() {
  return checkString('-2,1,3');
}

function nagative() {
  expect(callNagative).to.throw(Error);
  // expect(checkString('1,2,-5')).to.not.throw();
}

function IgnoredNumber() {
  expect(checkString('1,2,3000')).to.equal(3);
}

// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
  it('should be 0', emptyString);
  it('should be 10', numString);
  it('should be 5', sumString);
  it('should be 5', sumNewline);
  it('should be 6', sum3Num);
  it('Nagative', nagative);
  it('Ignored Number >1000', IgnoredNumber);
}

// Start Describe
describe('Example', exampleBehaviors);
