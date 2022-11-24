'strict use'

// global hours array created to rrun the loop at the lenght of the different hours
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// global function for all the object 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let seattle = {
  min: 23,
  max: 65,
  avgCookies: 6.3,
//   empy property array to store the number of customers per hour generated from calCustomerPer hour loop method
  customersEachHour: [],
// Empty array to house the avaerage number of cookies per hour generated from the calCustomerPerhour loop method
  cookiesPerHour: [],
// created a key-value pair of total cookies and assigned it zero to start the count from zero.
  totalCookies: 0,
// This method is used to iterate over the hours array with a loop and generate a random number of customers per hour and push it into the empty array
  calCustomerPerhour: function() {
      for (let i = 0; i < hours.length; i++){
        //   assigned different hours to the random numbers generated with Math random function by creating an argument where we assigned hour to the randomNumber generator 
          let hours = randomNumber(this.min, this.max)
          console.log(hours);
          this.customersEachHour.push(hours);
      }
  },
  calCustomerCookiesPerHour: function(){
      this.calCustomerPerhour();
      for (let i = 0; i < hours.length; i++){
          let avrCookiesPerCustomer = Math.ceil(this.avgCookies * this.customersEachHour[i]);
          this.cookiesPerHour.push(avrCookiesPerCustomer);
          this.totalCookies = this.totalCookies + avrCookiesPerCustomer
      }
  }
}

console.log(seattle);
console.log(seattle.calCustomerCookiesPerHour());

let tokyo = {
    min: 3,
    max: 24,
    avgCookies: 1.2,
    customersEachHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    calCustomerPerhour: function() {
      for (let i = 0; i < hours.length; i++){
        let hours = randomNumber(this.min, this.max);
        console.log(hours);
        this.customersEachHour.push(hours);
      }
    },
    calCustomerCookiesPerHour: function(){
      this.calCustomerPerhour();
      for (let i = 0; i < hours.length; i++){
          let avrCookiesPerCustomer = Math.ceil(this.avgCookies * this.customersEachHour[i]);
          this.cookiesPerHour.push(avrCookiesPerCustomer);
          this.totalCookies = this.totalCookies + avrCookiesPerCustomer
      }
  }
}

console.log(tokyo);
console.log(tokyo.calCustomerCookiesPerHour());


let dubai = {
    min: 11,
    max: 38,
    avgCookies: 3.7,
    customersEachHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    calCustomerPerhour: function(){
      for (let i = 0; i < hours.length; i++){
        let hours = randomNumber(this.min, this.max);
        console.log(hours);
        this.customersEachHour.push(hours);
      }
    },
    calCustomerCookiesPerHour: function(){
      this.calCustomerPerhour();
      for (let i = 0; i < hours.length; i++){
        let avrCookiesPerCustomer = Math.ceil(this.avgCookies * this.customersEachHour[i]);
        this.cookiesPerHour.push(avrCookiesPerCustomer);
        this.totalCookies = this.totalCookies + avrCookiesPerCustomer
      }
    }
}

console.log(dubai);
console.log(dubai.calCustomerCookiesPerHour());

let paris = {
    min: 20,   
    max: 38,
    avgCookies: 2.3,
    customersEachHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    calCustomerPerhour: function(){
      for (let i = 0; i < hours.length; i++){
        let hours = randomNumber(this.min, this.max);
        console.log(hours);
        this.customersEachHour.push(hours);
      }
    },
    calCustomerCookiesPerHour: function(){
      this.calCustomerPerhour();
      for (let i = 0; i < hours.length; i++){
        let avrCookiesPerCustomer = Math.ceil(this.avgCookies * this.customersEachHour[i]);
        this.cookiesPerHour.push(avrCookiesPerCustomer);
        this.totalCookies = this.totalCookies + avrCookiesPerCustomer
      }
    }
}

console.log(paris);
console.log(paris.calCustomerCookiesPerHour());

let lima = {
    min: 2,
    max: 16,
    avgCookies: 4.6,
    customersEachHour: [],
    cookiesPerHour: [],
    totalCookies: 0,
    calCustomerPerhour: function(){
      for (let i = 0; i < hours.length; i++){
        let hours = randomNumber(this.min, this.max);
      console.log(hours);
      this.customersEachHour.push(hours);
      }
    },
    calCustomerCookiesPerHour: function(){
      this.calCustomerPerhour();
      for (let i =0; i < hours.length; i++){
        let avrCookiesPerCustomer = Math.ceil(this.avgCookies * this.customersEachHour[i]);
        this.cookiesPerHour.push(avrCookiesPerCustomer);
        this.totalCookies = this.totalCookies + avrCookiesPerCustomer
      }
    }
}

console.log(lima);
console.log(lima.calCustomerCookiesPerHour());

// 4 STEPS OF DOM MANIPULATION
// STEP 1: select the parent element - document.getElementById()
// STEP 2: create a new element - codument.createElement()
// STEP 3: fill the created element with 'stuff' - .innerText <---- this is a PROPERTY
// STEP 4: append the created element to the parent element - document.appendChild()

// STEP 1
let seattleOrders = document.getElementById('seattleOrders')
// console.log('the list name is:', seattleOrders)

// // STEP 2
// let seattleOrderList = document.createElement('li')

// // STEP 3
// seattleOrderList.innerText = 'text';

// // STEP 4
// seattleOrders.appendChild(seattleOrderList)

for (let i = 0; i < hours.length; i++){
  let seattleOrderList = document.createElement('li');
  seattleOrderList.innerText = `${hours[i]}: ${seattle.cookiesPerHour[i]} Cookies`;
  seattleOrders.appendChild(seattleOrderList);
}

let seattleListTotal = document.getElementById('seattleOrders');
let seattleOrderTotalList = document.createElement('li');
seattleOrderTotalList.innerText = 'Total cookies: ' + seattle.totalCookies;
seattleListTotal.appendChild(seattleOrderTotalList)

let tokyoOrders = document.getElementById('tokyoOrders')

for (let i = 0; i < hours.length; i++) {
  let tokyoOrdersList = document.createElement('li');
  tokyoOrdersList.innerText = `${hours[i]}: ${tokyo.cookiesPerHour[i]} Cookies`;
  tokyoOrders.appendChild(tokyoOrdersList)
}

let tokyoListTotal = document.getElementById('tokyoOrders');
let tokyoOrderTotalList = document.createElement('li');
tokyoOrderTotalList.innerText = 'Total cookies: ' + tokyo.totalCookies;
tokyoListTotal.appendChild(tokyoOrderTotalList)

let dubaiOrders = document.getElementById('dubaiOrders')

for (let i = 0; i < hours.length; i++) {
  let dubaiOrderList = document.createElement('li');
  dubaiOrderList.innerText = `${hours[i]}: ${dubai.cookiesPerHour[i]} Cookies`;
  dubaiOrders.appendChild(dubaiOrderList)
}

let dubaiListTotal = document.getElementById('dubaiOrders');
let dubaiOrderTotalList = document.createElement('li');
dubaiOrderTotalList.innerText = 'Total cookies: ' + dubai.totalCookies;
dubaiListTotal.appendChild(dubaiOrderTotalList)

let parisOrders = document.getElementById('parisOrders')

for (let i = 0; i < hours.length; i++) {
  let parisOrderList = document.createElement('li');
  parisOrderList.innerText = `${hours[i]}: ${paris.cookiesPerHour[i]} Cookies`;
  parisOrders.appendChild(parisOrderList)
}

let parisListTotal = document.getElementById('parisOrders');
let parisOrderTotalList = document.createElement('li');
parisOrderTotalList.innerText = 'Total cookies: ' + paris.totalCookies;
parisListTotal.appendChild(parisOrderTotalList)

let limaOrders = document.getElementById('limaOrders')

for (let i = 0; i < hours.length; i++) {
  let limaOrderList = document.createElement('li');
  limaOrderList.innerText = `${hours[i]}: ${lima.cookiesPerHour[i]} Cookies`;
  limaOrders.appendChild(limaOrderList)
}

let limaListTotal = document.getElementById('limaOrders');
let limaOrderTotalList = document.createElement('li');
limaOrderTotalList.innerText = 'Total cookies: ' + lima.totalCookies;
limaListTotal.appendChild(limaOrderTotalList)
