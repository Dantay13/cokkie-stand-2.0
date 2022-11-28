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

// Table body rendering

Store.prototype.render = function() {
  let tableBody = document.getElementById('tableBody');
  let bodyRow = document.createElement('tr');
  let storeNameData = document.createElement('td');
  storeNameData.innerText = this.storeName;
  bodyRow.appendChild(storeNameData); 
  
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


// Table footer render

let allLocations = [seattle, tokyo, dubai, paris, lima]


let tableFoot = document.getElementById('tableFoot');
let footRow = document.createElement('tr');
let footRowName = document.createElement('th');
footRowName.innerText = 'Totals';
footRow.appendChild(footRowName);
tableFoot.appendChild(footRow);

for (let i = 0; i < hours.length; i++) {
  let counter = 0;
  for (let j = 0; j < allLocations.length; j++)
  counter += allLocations[j].cookiesPerHour[i];
  let daysTotal = document.createElement('td');
  daysTotal.innerText = counter;
  footRow.appendChild(daysTotal);
  tableFoot.appendChild(footRow);
}

let counter2 = 0

for (let i = 0; i < hours.length; i++) {
  for (let j = 0; j < allLocations.length; j++)
  counter2 += allLocations[j].cookiesPerHour[i];
}

let allDaysTotal = document.createElement('td');
allDaysTotal.innerText = counter2;
footRow.appendChild(allDaysTotal);
tableFoot.appendChild(footRow);

