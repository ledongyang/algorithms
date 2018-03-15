function isSubsetSum(array, sum) {
  // Helper function for recursion
  return isSubsetSumHelper(array, array.length, sum);
}

function isSubsetSumHelper(array, len, sum) {
  // break the problem to two subproblem
  // 1. include the last element, recur for the remaining elements, (array, len-1, sum-array[len-1])
  // 2. exclude the last element, recur for the remaining elements, (array, len-1, sum)
  // base case
  if (sum === 0) {
    return true;
  }
  if (sum < 0 || len === 0) {
    return false;
  }
  // exclude last element if it is greater than sum
  if (array[len-1] > sum) {
    return isSubsetSumHelper(array, len - 1, sum);
  }
  // recur both cases
  return isSubsetSumHelper(array, len - 1, sum) || isSubsetSumHelper(array, len - 1, sum - array[len-1]);
}

isSubsetSum([3, 45, 8, 15, 3, 9], 24); // true
isSubsetSum([3, 45, 8, 15, 3, 9], 10); // false
