const QEASY = [
  {
    code: "<code class= 'javascript'> Question 1 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 2 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 3 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 4 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 5 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 6 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 7 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 8 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 9 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 10 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 11 <code>",
    result: 'true'
  },
  {
    code: "<code class= 'javascript'> Question 12 <code>",
    result: 'true'
  }
];
let player1Questions = [];
let player2Questions = [];


function sliceQuestions(arr) {
  let middle = arr.length / 2;
  let end = arr.length;
  player1Questions = arr.slice(0, middle);
  player2Questions = arr.slice(middle, end);
}

function shuffleQuestions(arr) {
  const arrQuestions = arr;
  let currentIndex = arr.length;
  let temporaryValue;
  let ramdomIndex;
  while (currentIndex !== 0) {
    ramdomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = arrQuestions[currentIndex];
    arrQuestions[currentIndex] = arrQuestions[ramdomIndex];
    arrQuestions[ramdomIndex] = temporaryValue;
  }
  sliceQuestions(arrQuestions);
}



// code: "<code class= 'javascript'>  function ClockBomb() {<br>"
//     + '    this.seconds = 600 <br>'
//     + '    this.minClock = 10;<br>'
//     + '    this.secClock = 0;<br>'
//     + '    this.error = 0;'
//     + '</code>',
//   result: 'true'
