
function test(arr) {
  let res = [];
  let aux = [];
  let isNested = false;

  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          let j = 0;
          while (j < arr[i].length) {
              if (j > 0) {
                  res.pop();
              }
              res.push(arr[i][j]);
              if (Array.isArray(arr[i + 1])) {
                  isNested = true;
                  let k = 0;
                  while (k < arr[i + 1].length) {
                      if (Array.isArray(arr[i + 1][k])) {
                          arr[i + 1] = arr[i + 1].flat();
                      }
                      if (k > 0) {
                          res.pop();
                      }
                      res.push(arr[i + 1][k]);
                      aux.push([...res])
                      if (k + 1 === arr[i + 1].length) {
                          res.pop();
                      }
                      k++;
                  }
              } else {
                  if (!isNested) {
                      aux.push([...res]);
                  }
              }
              j++;
          }
      } else {
          res.push(arr[i]);
          if (i + 1 === arr.length) {
              aux.push([...res]);
          }
      }
  }
  return aux;
}

console.log('test1', test([1, 2, 3]));
console.log('test2', test([1, 2, [3, 4]]));
console.log('test3', test([1, [2, 3],
  [4, 5]
]));
console.log('test4', test([1, [2, 3],
  [4, 5, 6]
]));
console.log('test5', test([1, [2, 3],
  [4, [5, 6]]
]));
