const partition = (arr, m, g) => {
  let vkg = arr[m];
  let a = m,
    b = g;
  do {
    do {
      a++;
    } while (arr[a] <= vkg);
    do {
      b--;
    } while (arr[b] > vkg);
    if (a < b) {
      let temp = arr[a];
      arr[a] = arr[b];
      arr[b] = temp;
    }
  } while (a < b);
  let temp = arr[b];
  arr[b] = arr[m];
  arr[m] = temp;
  return b;
};

const quickSort = (arr, m, g) => {
  let b;
  if (m < g) {
    b = partition(arr, m, g);
    quickSort(arr, m, b);
    quickSort(arr, b + 1, g);
  }
};

let arr = [1, 5, 3, 4, 15, 10];
quickSort(arr, 0, arr.length);
console.log(arr);
