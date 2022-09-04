(() => {
  Array.prototype.swap = function swap(i, j) {
    const temp = this[i];
    this[i] = this[j];
    this[j] = temp;
  };
})();

const sort = (array, start, end) => {
  console.log(array);
  if (start === end) return array;

  const pivot = array[Math.floor(end / 2)];

  let i = 0;
  for (let j = 0; j < end; ++j) {
    if (array[j] <= pivot) {
      array.swap(i, j);
      ++i;
    }
  }

  return sort(array, start, Math.floor(start + (end - start) / 2), end);
};

const quickSort = (array) => {
  return sort(array, 0, array.length);
};

module.exports = quickSort;
