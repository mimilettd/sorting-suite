function insertionSort(array) {
  var length = array.length;
  var i = 1;
  var x, j;
  while (i < length) {
    x = array[i];
    j = i - 1;
    while (j >= 0 && array[j] > x) {
      array[j+1] = array[j];
      j = j - 1;
    }
    array[j+1] = x;
    i = i + 1;
  }
  return array
}

module.exports = insertionSort

