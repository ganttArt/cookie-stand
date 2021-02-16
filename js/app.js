'use strict';

let timeSlots = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStore(location, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer) {
  this.location = location;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.hourlyCookiesSold = [];
  this.totalCookiesSold = 0;
}

CookieStore.prototype.randomCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

let seattle = new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);

let stores = [seattle, tokyo, dubai, paris, lima];

function populateHourlyCookiesSold(store) {
  for (let i = 0; i < 14; i++) {
    let customers = store.randomCustomersPerHour();
    let cookiesSold = Math.floor(customers * store.averageCookiesPerCustomer);
    store.hourlyCookiesSold.push(cookiesSold);
    store.totalCookiesSold += cookiesSold;
  }
}


function displayStoreData(store) {
  let articleDeckElem = document.getElementById('article-deck');
  let articleElem = document.createElement('article');
  articleDeckElem.appendChild(articleElem);

  let nameHeaderElem = document.createElement('h2');
  articleElem.appendChild(nameHeaderElem);
  nameHeaderElem.textContent = store.location;

  let salesUlElem = document.createElement('ul');
  articleElem.appendChild(salesUlElem);

  for (let i = 0; i < 14; i++){
    let hourlySales = `${timeSlots[i]}: ${store.hourlyCookiesSold[i]} cookies`;
    let hourlySalesElem = document.createElement('li');
    hourlySalesElem.textContent = hourlySales;
    salesUlElem.appendChild(hourlySalesElem);
  }

  let totalSalesElem = document.createElement('li');
  totalSalesElem.textContent = `Total: ${store.totalCookiesSold} cookies`;
  salesUlElem.appendChild(totalSalesElem);
}

for (let i = 0; i < stores.length; i++) {
  populateHourlyCookiesSold(stores[i]);
  displayStoreData(stores[i]);
}

console.log(stores);
