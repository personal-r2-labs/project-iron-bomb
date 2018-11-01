const QEASY = [
  {
    code: "<code class= 'javascript'> Question 1 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 2 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 3 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 4 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 5 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 6 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 7 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 8 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 9 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 10 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 11 <code>",
    result: 'true',
    points: 100
  },
  {
    code: "<code class= 'javascript'> Question 12 <code>",
    result: 'true',
    points: 100
  }
];
let player1Questions = [];
let player2Questions = [];


function sliceQuestions(arr) {
  const MIDDLE = arr.length / 2;
  const END = arr.length;
  player1Questions = arr.slice(0, MIDDLE);
  player2Questions = arr.slice(MIDDLE, END);
}

function shuffleQuestions(arr) {
  const ARRQ = arr;
  let currentIndex = arr.length;
  let temporaryValue;
  let ramdomIndex;
  while (currentIndex !== 0) {
    ramdomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = ARRQ[currentIndex];
    ARRQ[currentIndex] = ARRQ[ramdomIndex];
    ARRQ[ramdomIndex] = temporaryValue;
  }
  sliceQuestions(ARRQ);
}
