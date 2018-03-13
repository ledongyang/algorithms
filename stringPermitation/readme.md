# String Permutation

## Write a program to store all permutations of a string to a array, and return that array.

## Example:
## Input: ABC
## Output: ABC, ACB, BAC, BCA, CAB, CBA

## Solution using backtracking recursion:
## 1. Initialize a left index as 0
## 2, For each recursion, swap the character in left index with rest of the characters, including itself. So first recursion for above example will be: 'ABC', 'BAC', 'CBA' (well, the program does not run in this order, but it is easier to understand, think about these three as child nodes of parent node of 'ABC').
## 3. Recursive call the function with left index incremented by 1.
## 4. The base case is when left index is equals to right index (last character).
## 5. After base case hit, you need to backtrack (swap back to original string), imagine track back to parent node.

## Tip: For better and easier understanding this algorithm, try to draw out a tree structure.
