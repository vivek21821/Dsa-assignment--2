const binarySearch = (arr, key) => {
  let left = 0,
    right = arr.length - 1,
    center;
  while (left <= right) {
    center = parseInt((left + right) / 2);
    if (arr[center] == key) {
      console.log(
        `element ${key} is found at position ${center} in given array [${arr}]`
      );
      return center;
    } else if (arr[center] > key) {
      right = center - 1;
    } else {
      left = center + 1;
    }
  }
  return "element not found";
};

console.log(binarySearch([3, 4, 5, 6], 10));
