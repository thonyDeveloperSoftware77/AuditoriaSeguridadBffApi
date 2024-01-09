import { assert } from 'chai';
const sum = (a, b) => a + b;

describe('Sum', function() {
  it('adds 1 + 2 to equal 3', function() {
    assert.equal(sum(1, 2), 3);
  });
});
