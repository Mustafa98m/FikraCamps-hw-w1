/** Q1
 * Assume you have the USD prices for this week from Saturday to Thursday
 * in contrast to the Iraqi Dinar as an array
 * arr = [150, 146, 142, 143, 145, 144]
 * calculate the max profit at which day you should buy at and what day should you sell at
 * for this example we buy at Monday and we sell at Wednesday
 */

function BestProfit(arr) {
  const days = ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu']
  let buy = Math.min(...arr);
  let sell = Math.max(...arr);
  let buyDay = arr.indexOf(buy);
  let sellDay = arr.indexOf(sell);

  return ('You should buy at ' + buy + ' ' + days[buyDay] + ' And sell at ' + sell + ' ' + days[sellDay]);
}
console.log(BestProfit([150, 146, 142, 143, 145, 144]));

/** Q2
 * assume you have two time periods
 * for example
 * period1 = 13/5/2021 01:00 to 14/5/2021 01:00
 * period2 = 15/5/2021 01:00 to 16/5/2021 01:00
 * write a function that tells us whether two given periods overlap or not
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "15/5/2021 13:00","16/5/2021 13:00" ) => no overlap
 * example CheckOverlap("13/5/2021 13:00","14/5/2021 13:00", "14/5/2021 13:00","16/5/2021 13:00" ) => overlap
 */

function CheckOverlap(t1Start, t1End, t2Start, t2End) {
  if (t1Start === t2Start || t1End === t2End) {
    return ('Overlap !!');
  }
  else if (t1Start === t2End || t1End === t2Start) {
    return ('Overlap !!');
  }
  else
    return ('No Overlap !!');
}
console.log(CheckOverlap(
  "13/5/2021 13:00",
  "14/5/2021 13:00",
  "14/5/2021 13:00",
  "16/5/2021 13:00"
)
);

/** Q3
 * assume you have a shoes factory and the production lines produces shoes as follows
 * L R LL R R RR LL
 * write a function that takes these shoes as in a string
 * shoes = "RLRLRRLL"
 * then return how many pairs in it
 * result = 4
 * example HowManyPairs("RLRLRRLL") => 4
 * example HowManyPairs("RRLLRRRLLR") => 2
 */

function HowManyPairs(shoes) {
  var c = 1;
  var pair = 0;
  var pairConter = 0;
  while (c <= shoes.length) {
    if (shoes[pair] === shoes[c]) {
      pairConter += 1;
    }
    pair += 2;
    c += 2;

  }

  return (pairConter);
}
console.log(HowManyPairs("RLRLRRLL"));

/** Q4
 *    Write a function that takes a string and return JSON of all the letters and its count. check the example to know more
 *    letterCount('abcac') => {a: 2, b: 1, c: 2}
 */

function HowManyLetters(word) {
  var duplicate = []
  for (const c of word) {
    let k = 0;
    if (c !== temp) {
      for (let i = 0; i < word.length; i++) {

        if (c === word[i]) k++;
        var temp = c;
      }
      duplicate.push({ letter: c, duplication: k });
    }
    else continue;

  }
  return (duplicate);
}
console.log(HowManyLetters("kkssffoos"));

/** Q5
  * Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

 Examples
 sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]

 sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]

 sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]
 Notes
 The arrays can contain either positive or negative elements.
 The arrays will only contain integers.
 The arrays won't contain duplicate numbers.
 This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.
  */

function sortArray(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
  }
  return (arr);
}
console.log(sortArray([23, 15, 34, 17, -28]))

/** Q6
  * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

 Examples
 minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

 minMax([2334454, 5]) ➞ [5, 2334454]

 minMax([1]) ➞ [1, 1]
  */
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];

  if (arr.length == 1) return (arr);
  arr.forEach(num => {

    if (min > num) min = num;
    if (max < num) max = num;

  });
  return ([min, max]);
}

minMax([22, 333, 5, 1, 444, 5555, -1]);

/** Q7
  * Create a function that takes an array of numbers between 1 and 10 (excluding one number) and returns the missing number.

 Examples
 missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) ➞ 5

 missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) ➞ 10

 missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) ➞ 7
 Notes
 The array of numbers will be unsorted (not in order).
 Only one number will be missing.
  */

function missingNum(arr) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  for (let i = 0; i < numbers.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length; j++) {
      if (numbers[i] === arr[j]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return (numbers[i])
    }
  }
}

console.log(missingNum([1, 2, 3, 5, 6, 7, 8, 9, 10]))

/** Q8
  * Write a function that accepts a positive integer between 0 and 999 inclusive and returns a string representation of that integer written in English.

 Examples
 numToEng(0) ➞ "zero"

 numToEng(18) ➞ "eighteen"

 numToEng(126) ➞ "one hundred twenty six"

 numToEng(909) ➞ "nine hundred nine"
 Notes
 There are no hyphens used (e.g. "thirty five" not "thirty-five").
 The word "and" is not used (e.g. "one hundred one" not "one hundred and one").
  */
 
 function numToEng(num) {
  const ones = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'ninteen'
  ]

  const tens = [
    'zero',
    'ten',
    'twinty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninty'
  ]
  
  if (num < 20 && num >= 0) return (ones[num])
  if (num >= 20 && num < 100) {
    if (num % 10 === 0) return tens[Math.floor(num / 10)]
    else return (tens[Math.floor(num / 10)] + ' ' + ones[num % 10])
  }

  if(num>=100 && num<1000){
    let hundred = Math.floor(num/100);
    let ten = num%100;
    let one = ten%10;
		if (one === 0 && ten === 0) return (ones[hundred] +' hundred');
   else if (one === 0 ) return (ones[hundred] +' hundred' +' '+ tens[Math.floor(ten/10)]);
   else if (Math.floor(ten/10) === 0) return (ones[hundred] +' hundred' +' '+ ones[one]);
    else  return (ones[hundred] + ' hundred ' + tens[Math.floor(ten/10)]+ ' '+ ones[one])
  }
}

console.log(numToEng(105));