function stringPermutation(str) {
  // recursive function,
  // str: input string
  // 0: starting left index
  // str.length-1: right index
  // []: return array
  let arr = str.split('');
  return permute(arr, 0, arr.length - 1, []);
}

function permute(arr, leftIdx, rightIdx, result) {
  if (leftIdx === rightIdx) {
    result.push(arr.join(''));
  }
  for (let i = leftIdx; i <= rightIdx; i++) {
    swap(arr, leftIdx, i);
    permute(arr, leftIdx + 1, rightIdx, result);
    swap(arr, leftIdx, i);
  }
  return result;
}

function swap(arr, l, i) {
  let temp = arr[l];
  arr[l] = arr[i];
  arr[i] = temp;
}

let result = stringPermutation('ABCD');
console.log(result);
