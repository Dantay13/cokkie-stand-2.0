'strict use'

let seattle = {
  min: 23,
  max: 65,
  avgCookies: 6.3,
  calRandomNum: function randomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },
}

seattle.calRandomNum();

console.log('this is the random numbers:', seattle.calRandomNum);

let tokyo = {
    min: 3,
    max: 24,
    avgCookies: 1.2,
    calRandomNum: function randomNumber(min, max) {
        return Math.random() * (max - min) + min;
      }
}

let dubai = {
    min: 11,
    max: 38,
    avgCookies: 3.7
}

let paris = {
    min: 20,   
    max: 38,
    avgCookies: 2.3
}

let lima = {
    min: 2,
    max: 16,
    avgCookies: 4.6
}

console.log(seattle, tokyo, dubai, paris, lima);