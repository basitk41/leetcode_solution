/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word === word.toLowerCase()) return true;
  else if (word === word.toUpperCase()) return true;
  else {
    word = word.substring(1);
    if (word == word.toLowerCase()) return true;
  }
  return false;
};
