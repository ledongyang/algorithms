# Subsum Problem

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
