function sortarrayString(arr) {
  for (var a = 0; a < arr.length; a++) {
    for (var b = a + 1; b < arr.length; b++) {
      if (arr[a] > arr[b]) {
        var temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
      }
    }
  }
  return arr;
}
var arr = [
  "Spider-man",
  "Hulk",
  "Loki",
  "Thor",
  "Captain",
  "Dr.Strange",
  "Ironman",
];
console.log("input string:");
console.log(arr);
console.log("output sorted:");
console.log(sortarrayString(arr));
