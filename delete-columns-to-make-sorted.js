/**
 * @param {string[]} strs
 * @return {number}
 */
const minDeletionSize = (strs) => {
  let output = 0;
  for (let i = 0; i < strs[0].length; i++) {
    let isSorted = true;
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j + 1][i] < strs[j][i]) {
        isSorted = false;
        break;
      }
    }
    if (!isSorted) output++;
  }

  return output;
};
