const assert = require('chai').assert
const bubbleSort = require('./bubbleSort')

describe("bubbleSort", function() {
  it("it can sort an array", function() {
    assert.deepEqual(bubbleSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
  })
})
