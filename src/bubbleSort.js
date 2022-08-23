function bubbleSort(array) {
  if (array.length <= 1) return array;

  const swap = (i, j) => {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };

  for (let i = 0; i < array.length; ++i) {
    for (let j = 0; j < array.length - 1 - i; ++j) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1);
      }
    }
  }

  return array;
}

module.exports = bubbleSort;
