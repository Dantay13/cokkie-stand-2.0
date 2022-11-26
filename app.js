'strict use'

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Store(storeName, min, max, avgCookies, customersEachHour, cookiesPerHour) {
  this.storeName = storeName;
  this.min = min;
  this.max = max;
  this.avgCookies = avgCookies;
  this.customersEachHour = customersEachHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookies = 0;
  this.calCustomerPerhour = function() {
    for (let i = 0; i < hours.length; i++){
      let hours = randomNumber(this.min, this.max)
      console.log(hours);
      this.customersEachHour.push(hours);
    }
  };
  this.calCustomerCookiesPerHour = function() {
    this.calCustomerPerhour();
      for (let i = 0; i < hours.length; i++){
          let avrCookiesPerCustomer = Math.ceil(this.avgCookies * this.customersEachHour[i]);
          this.cookiesPerHour.push(avrCookiesPerCustomer);
          this.totalCookies = this.totalCookies + avrCookiesPerCustomer
      }
  }
}

let seattle = new Store('Seattle', 23, 65, 6.3, [], []);
console.log('This is seaatle:', seattle);
seattle.calCustomerPerhour();
seattle.calCustomerCookiesPerHour();

let tokyo = new Store('Tokyo', 3, 24, 1.2, [], []);
console.log('This is tokyo: ', tokyo);
tokyo.calCustomerPerhour();
tokyo.calCustomerCookiesPerHour();

let dubai = new Store('Dubai', 11, 38, 3.7, [], []);
console.log('this is dubai: ', dubai);
dubai.calCustomerPerhour();
dubai.calCustomerCookiesPerHour();

let paris = new Store('Paris', 20, 38, 2.3, [], []);
console.log('this is paris: ', paris);
paris.calCustomerPerhour();
paris.calCustomerCookiesPerHour();  

let lima = new Store('Lima', 2, 16, 4.6, [], []);
console.log('this is lima: ', lima);
lima.calCustomerPerhour();
lima.calCustomerCookiesPerHour();


// let seattleOrders = document.getElementById('seattleOrders')

// for (let i = 0; i < hours.length; i++){
//   let seattleOrderList = document.createElement('li');
//   seattleOrderList.innerText = `${hours[i]}: ${seattle.cookiesPerHour[i]} Cookies`;
//   seattleOrders.appendChild(seattleOrderList);
// }

// let seattleListTotal = document.getElementById('seattleOrders');
// let seattleOrderTotalList = document.createElement('li');
// seattleOrderTotalList.innerText = 'Total cookies: ' + seattle.totalCookies;
// seattleListTotal.appendChild(seattleOrderTotalList)

// let tokyoOrders = document.getElementById('tokyoOrders')

// for (let i = 0; i < hours.length; i++) {
//   let tokyoOrdersList = document.createElement('li');
//   tokyoOrdersList.innerText = `${hours[i]}: ${tokyo.cookiesPerHour[i]} Cookies`;
//   tokyoOrders.appendChild(tokyoOrdersList)
// }

// let tokyoListTotal = document.getElementById('tokyoOrders');
// let tokyoOrderTotalList = document.createElement('li');
// tokyoOrderTotalList.innerText = 'Total cookies: ' + tokyo.totalCookies;
// tokyoListTotal.appendChild(tokyoOrderTotalList)

// let dubaiOrders = document.getElementById('dubaiOrders')

// for (let i = 0; i < hours.length; i++) {
//   let dubaiOrderList = document.createElement('li');
//   dubaiOrderList.innerText = `${hours[i]}: ${dubai.cookiesPerHour[i]} Cookies`;
//   dubaiOrders.appendChild(dubaiOrderList)
// }

// let dubaiListTotal = document.getElementById('dubaiOrders');
// let dubaiOrderTotalList = document.createElement('li');
// dubaiOrderTotalList.innerText = 'Total cookies: ' + dubai.totalCookies;
// dubaiListTotal.appendChild(dubaiOrderTotalList)

// let parisOrders = document.getElementById('parisOrders')

// for (let i = 0; i < hours.length; i++) {
//   let parisOrderList = document.createElement('li');
//   parisOrderList.innerText = `${hours[i]}: ${paris.cookiesPerHour[i]} Cookies`;
//   parisOrders.appendChild(parisOrderList)
// }

// let parisListTotal = document.getElementById('parisOrders');
// let parisOrderTotalList = document.createElement('li');
// parisOrderTotalList.innerText = 'Total cookies: ' + paris.totalCookies;
// parisListTotal.appendChild(parisOrderTotalList)

// let limaOrders = document.getElementById('limaOrders')

// for (let i = 0; i < hours.length; i++) {
//   let limaOrderList = document.createElement('li');
//   limaOrderList.innerText = `${hours[i]}: ${lima.cookiesPerHour[i]} Cookies`;
//   limaOrders.appendChild(limaOrderList)
// }

// let limaListTotal = document.getElementById('limaOrders');
// let limaOrderTotalList = document.createElement('li');
// limaOrderTotalList.innerText = 'Total cookies: ' + lima.totalCookies;
// limaListTotal.appendChild(limaOrderTotalList)


// let hoursTable = function() {
//   let tableHours = document.getElementById('tableHours');
//   let headRow = document.createElement('tr');
//   let allHours = document.createElement('td');
//   allHours.innerText = hours.length;
//   headRow.appendChild(allHours);
//   tableHours.appendChild(headRow);
// }

// hoursTable();


// table header rendering

let tableHours = document.getElementById('tableHours');
let headRow = document.createElement('tr');
let emptyHead = document.createElement('th');
headRow.appendChild(emptyHead);

for (let i = 0; i < hours.length; i++) {
  let allHours = document.createElement('th');
  allHours.innerText = hours[i];
  headRow.appendChild(allHours);
  tableHours.appendChild(headRow);
}

let dailyTotalHead = document.createElement('th');
dailyTotalHead.innerText = 'Daily Location Totals';
headRow.appendChild(dailyTotalHead);


// hoursTable();

// Table body rendering

Store.prototype.render = function() {
  let tableBody = document.getElementById('tableBody');
  let bodyRow = document.createElement('tr');
  let storeNameData = document.createElement('td');
  storeNameData.innerText = this.storeName;
  bodyRow.appendChild(storeNameData); 

  // for (let i = 0; i < this.Store.length; i++) {
  //   let storeName = document.createElement('td');
  //   cookiesData.innerText = this.Store;
  //   bodyRow.appendChild(storeName);
  //   tableBody.appendChild(bodyRow);
  // }
  
  for (let i = 0; i < this.cookiesPerHour.length; i++) {
    let cookiesData = document.createElement('td');
    cookiesData.innerText = this.cookiesPerHour[i];
    bodyRow.appendChild(cookiesData);
    tableBody.appendChild(bodyRow);
  };

  let cookiesTotalData = document.createElement('td');
  cookiesTotalData.innerText = this.totalCookies;
  bodyRow.appendChild(cookiesTotalData);
}


seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
