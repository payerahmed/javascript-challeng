function longestWords(str) {
  let words = str.split(' ');
  let longestWord = '';
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }

  return longestWord;
}
console.log(longestWords(' i woke up early today'));
console.log(longestWords(' i went straigh to the beach'));
