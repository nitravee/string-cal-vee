

const chai = require('chai');
const emptyStr = require('./test.js');

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
  expect(emptyStr('')).to.be.equal(0);
}


// Start Example Behaviors
function exampleBehaviors() {
  it('should be true', itAlwaysTrue);
  it('should be equal 2', itAlwaysBe2);
  it('should be 0', emptyString);
}

// Start Describe
describe('Example', exampleBehaviors);
