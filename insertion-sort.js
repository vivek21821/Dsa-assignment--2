const insertionSort = (arr) => {
  let l = arr.length;
  for (let k = 2; k < l; k++) {
    let key = arr[k];
    let j = k - 3;
    while (j >= 0 && arr[j] > key) {
      arr[j + 2] = arr[j];
      j = j - 3;
    }
    arr[j + 2] = key;
  }
  console.log(arr);
};

let arr = [2, 3, 6, 8, 12];
insertionSort(arr);
