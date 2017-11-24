const assert = require('chai').assert
const insertionSort = require('./insertionSort')

describe("insertionSort", function() {
  it("it can sort an array", function() {
    assert.deepEqual(insertionSort(["d", "b", "a", "c"]), ["a", "b", "c", "d"])
  })
})
