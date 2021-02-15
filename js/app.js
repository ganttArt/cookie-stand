'use strict';

let seattle = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

let tokyo = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

let dubai = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

let paris = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

let lima = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.6,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

let stores = [seattle, tokyo, dubai, paris, lima];

function populateHourlyCookiesSold(store) {
  for (let i = 0; i < 14; i++) {
    let customers = store.randomCustomersPerHour();
    let cookiesSold = Math.floor(customers * store.averageCookiesPerCustomer);
    seattle.hourlyCookiesSold.push(cookiesSold);
  }
}

populateHourlyCookiesSold(seattle);
console.log(seattle);
