function middle(low, high) {
  return Math.floor(low + (high - low) / 2);
}

function search(array, low, high, value) {
  if (low > high) return false;
  const mid = middle(low, high);

  if (array[mid] === value) return true;
  if (array[mid] < value) return search(array, mid + 1, high, value);
  if (array[mid] > value) return search(array, low, mid - 1, value);

  return false;
}

// function search(array, low, high, value) {
//   do {
//     let midd = middle(low, high);
//
//     if (array[midd] === value) return true;
//
//     if (array[midd] > value) {
//       high = midd - 1;
//     }
//
//     if (array[midd] < value) {
//       low = midd + 1;
//     }
//   } while (low <= high);
//
//   return false;
// }

function binarySearch(array, value) {
  return search(array, 0, array.length - 1, value);
}

module.exports = binarySearch;
