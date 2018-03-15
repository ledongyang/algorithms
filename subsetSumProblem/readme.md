# Subset Sum Problem

### Given a set of non-negative integers, and a value sum, check if there is a subset of the given set with sum equal to given sum value.

 Example:
 Input: set = [3, 45, 8, 15, 3, 9], sum = 24
 Output: true ([15, 9])
 Input: set = [3, 45, 8, 15, 3, 9], sum = 10
 Output: false (not possible)

 Solution (naive recursive solution):
 1. Break the problem into two subproblems.
 2. First, include the last element, recur the remaining elements with sum = sum - set[n-1] (n is length of the set).
 3. Second, exclude the last element, recur the remaining elements with same sum.
 4. Base case, return true if sum is 0, return false if sum is less than 0 or length of the set is 0

 Solution (dynamic programming):
 1. Create a 2d array, dynamically build the array by check whether current set [0, i-1] can form a sum j.
 2. Initialization. When sum j is 0, all set will be true. When set is empty, all sum j will be false except 0.
 3. When sum j is less than current element, we have to exclude current element, so check if previous set can form sum j.
 4.  When sum j is greater than or equal to current element, we have 2 choices, either exclude it or include it. If exclude it, same as step 3. If include it, go to sum j - current element, check previous set can form the new sum j.
 5. Return the answer in bottom right of the 2d array.
