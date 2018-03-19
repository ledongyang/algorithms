function longestSubstring(str) {
  // initialize some states
  let longest = [0, 1];
  let startIdx = 0;
  const ht = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let currIdx = i;
    // check if we see this character before
    if (char in ht) {
      // we need to make sure between startIdx and currIdx has no repeated characters
      startIdx = Math.max(startIdx, ht[char] + 1);
    }
    // check if update longest
    if (currIdx + 1 - startIdx > longest[1] - longest[0]) {
      longest = [startIdx, currIdx + 1];
    }
    // update hashtable
    ht[char] = i;
  }
  return longest[1] - longest[0];
}
