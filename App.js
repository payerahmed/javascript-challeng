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

function mathSeeqences(arr) {
  let arith = new Set();
  let geo = new Set();

  for (let i = 1; i < arr.length; i++) {
    let number1 = arr[i] - arr[i - 1];
    arith.add(number1);
    let number2 = arr[i] / arr[i - 1];
    geo.add(number2);
  }
  if (arith.size === 1) {
    return 'Arithmetic';
  }
  if (geo.size === 1) {
    return 'Geometric';
  }

  return -1;
}

console.log(mathSeeqences([10, 20, 30, 40]));
console.log(mathSeeqences([2, 4, 8, 16]));
console.log(mathSeeqences([2, 5, 67, 14, 68, 89]));

function capitalizeWords(str) {
  let words = str.split(' ').map((word) => {
    // let fistLater = word.slice(0, 1);
    // let rest = word.slice(1);
    // fistLater = fistLater.toUpperCase();
    // return `${fistLater} ${rest}`;
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  return words.join(' ');
}

console.log(capitalizeWords('i woke up early today'));
console.log(capitalizeWords('i went straigh to the beach'));

function unique(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }
  return true;

  // let value = {};
  // for (let letter of str) {
  //   if (value[letter]) {
  //     return false;
  //   }
  //   value[letter] = 'exists';
  // }
  // return true;

  // let value =[]
  // for (let letter of str){
  //   if(value.indexOf(letter) !== -1){
  //     return false
  //   }
  //   value.push(letter)
  // }
  // return true
}
console.log(unique('abcde'));
console.log(unique('adbecde'));

function ArraySum(arr) {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = tempArr.pop();
  let number = 0;
  tempArr.forEach((item) => (number += item));
  return largest === number;
}
console.log(ArraySum([1, 10, 3, 5, 19]));
console.log(ArraySum([1, 9, 12, 4, 5, 6, 2, 35]));
