'use strict';

let seattle = {
  location: 'Seattle',
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiesPerCustomer: 6.3,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

let tokyo = {
  location: 'Tokyo',
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  averageCookiesPerCustomer: 1.2,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

let dubai = {
  location: 'Dubai',
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 3.7,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

let paris = {
  location: 'Paris',
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  averageCookiesPerCustomer: 2.3,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

let lima = {
  location: 'Lima',
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  averageCookiesPerCustomer: 4.6,
  hourlyCookiesSold: [],
  randomCustomersPerHour: function() {
    return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
  },
};

function populateHourlyCookiesSold(store) {
  for (let i = 0; i < 14; i++) {
    let customers = store.randomCustomersPerHour();
    let cookiesSold = Math.floor(customers * store.averageCookiesPerCustomer);
    store.hourlyCookiesSold.push(cookiesSold);
  }
}

let stores = [seattle, tokyo, dubai, paris, lima];

for (let i = 0; i < stores.length; i++) {
  populateHourlyCookiesSold(stores[i]);
}

console.log(stores);
