'strict use'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// global function for all the object 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
  min: 23,
  max: 65,
  avgCookies: 6.3,
  customersEachhour: [],
  cookiesPerHour: [],
  totalCookies: 0,
  calCustomerPerhour: function() {
      for (let i = 0; i < hours.length; i++){
          let hour = randomNumber(this.min, this.max)
          console.log(hour);
          this.customersEachhour.push(hour);
      }
  },
  calCustomerCookiesPerHour: function(){
      this.calCustomerPerhour();
      for (let i = 0; i < hours.length; i++){
          let avrCookiesPerCustomer = Math.ceil(this.avgCookies * this.customersEachhour[i]);
          this.cookiesPerHour.push(avrCookiesPerCustomer);
          this.totalCookies = this.totalCookies + avrCookiesPerCustomer
      }
  }
}

console.log(seattle);
console.log(seattle.calCustomerCookiesPerHour());

// seattle.calRandomNum(23,65);

// console.log('seattle random num:',seattle.calRandomNum(23,65));

// let tokyo = {
//     min: 3,
//     max: 24,
//     avgCookies: 1.2,
//     data: [],
//     // the below method generate a random number between the object min and max number. but it makes sure that number is an intager and it is inclusive of the min and max number
//     calRandomNum: function randomNumber(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     },
//     // this is a loop method to generate more than one random number
//     looping: function randomNumLoop(){
//         for (let i = 0; i < this.calRandomNum(this.min, this.max); i++){
//             // this console log makes all the random generated number log into the console
//             console.log('flusj',this.calRandomNum(this.min, this.max));
//             // this push all of the random generated numbers into the object data pproperty empty array
//             this.data.push(this.calRandomNum(this.min, this.max));
//         }
//     },
//     productOf: function ProductOfTwoNum(avgCookies, this.){
//         let total = this.avgCookies * data.length;

//     }
// }

// console.log('this the data',tokyo.data);

// tokyo.looping();
// // console.log(tokyo.looping);

// tokyo.calRandomNum(3,24);

// console.log('tokyo random num:',tokyo.calRandomNum(3,24));


// let dubai = {
//     min: 11,
//     max: 38,
//     avgCookies: 3.7,
//     calRandomNum: function randomNumber(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//       }
// }

// dubai.calRandomNum(11,38);

// console.log('dubai random num:', dubai.calRandomNum(11,38));

// let paris = {
//     min: 20,   
//     max: 38,
//     avgCookies: 2.3,
//     calRandomNum: function randomNumber(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max -min + 1) + min);
//     }
// }

// paris.calRandomNum(20, 38);
// console.log('paris random num:', paris.calRandomNum(20, 38));

// let lima = {
//     min: 2,
//     max: 16,
//     avgCookies: 4.6,
//     calRandomNum: function randomNumber(min, max) {
//         min = Math.ceil(min);
//         max = Math.floor(max);
//         return Math.floor(Math.random() * (max - min + 1) + min);
//     }
// }

// lima.calRandomNum(2, 16);
// console.log('lima random num:', lima.calRandomNum(2, 16));

// console.log(seattle, tokyo, dubai, paris, lima);