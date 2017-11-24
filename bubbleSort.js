function bubbleSort(array) {
  var length = array.length
  for (var i = (length - 1); i >= 0; i--) {
    for (var j = (length - i); j >= 0; j--) {
      if (array[j] < array[j-1]) {
        var temp = array[j];
        array[j] = array[j-1];
        array[j-1] = temp;
      }
    }
  }
  return array
}

module.exports = bubbleSort
