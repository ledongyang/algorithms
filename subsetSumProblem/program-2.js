function isSubsetSum(array, sum) {
  // construct a 2d array, row (i) indices of array (current set), col (j) current sum
  const len = array.length;
  const subset = [];
  for (let i = 0; i < len+1; i++) {
    subset[i] = [];
  }
  // when current sum is 0, current set will all be true
  for (let i = 0; i < len+1; i++) {
    subset[i][0] = true;
  }
  // when current set is empty, every sum will be false except 0
  for (let i = 1; i < sum+1; i++) {
    subset[0][i] = false
  }
  // dynamically build the 2d array
  // 1. when current sum is less than current element, we have to exclude it, so check if previous set can form the current sum.
  // 2. when current sum is greater than or equal to current element, we have 2 choices, either exclude it or include it. If exclude, same as step 1. If include, update current sum, check previous set can form the new sum.
  for (let i = 1; i < len+1; i++) {
    for (let j = 1; j < sum+1; j++) {
      if (j < array[i-1]) {
        subset[i][j] = subset[i-1][j];
      } else {
        subset[i][j] = subset[i-1][j] || subset[i-1][j-array[i-1]];
      }
    }
  }
  return subset[len][sum];
}
