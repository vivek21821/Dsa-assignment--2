const merge = (arr1, arr2) => {
  let viv = [],
    jk = 0;
  vr = 0;
  while (jk < arr1.length && vr < arr2.length) {
    if (arr1[jk] < arr2[vr]) {
      viv.push(arr1[jk]);
      jk++;
    } else {
      viv.push(arr2[vr]);
      vr++;
    }
  }
  if (arr1[jk]) {
    let rem = arr1.slice(jk);
    for (let i = 0; i < rem.length; i++) {
      viv.push(rem[i]);
    }
  }
  if (arr2[vr]) {
    let rem = arr2.slice(vr);
    for (let i = 0; i < rem.length; i++) {
      viv.push(rem[i]);
    }
  }
  return viv;
};

let mergeSort = (arr) => {
  let n = arr.length;
  if (n <= 1) {
    return arr;
  }
  let m = Math.floor(n / 2);
  let aed = arr.slice(0, m);
  let wed = arr.slice(m);
  return merge(mergeSort(aed), mergeSort(wed));
};

let arr = [1, 2, 8, 5, 21, 11];
console.log(mergeSort(arr));
