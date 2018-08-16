

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


// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
  it('should be 0', emptyString);
  it('should be 10', numString);
  it('should be 5', sumString);
  it('should be 5', sumNewline);
}

// Start Describe
describe('Example', exampleBehaviors);
