'use strict';

let timeSlots = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let hourlyTotals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const table = document.getElementById('hourly-sales-table');

function CookieStore(location, minHourlyCustomers, maxHourlyCustomers, averageCookiesPerCustomer) {
  this.location = location;
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.averageCookiesPerCustomer = averageCookiesPerCustomer;
  this.hourlyCookiesSold = [];
  this.totalCookiesSold = 0;
  this.populateHourlyCookiesSold();
}

CookieStore.prototype.randomCustomersPerHour = function() {
  return Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers) + this.minHourlyCustomers);
};

CookieStore.prototype.populateHourlyCookiesSold = function() {
  for (let i = 0; i < 14; i++) {
    let customers = this.randomCustomersPerHour();
    let cookiesSold = Math.floor(customers * this.averageCookiesPerCustomer);
    this.hourlyCookiesSold.push(cookiesSold);
    this.totalCookiesSold += cookiesSold;
  }
};

CookieStore.prototype.renderTableRow = function() {
  let row = document.createElement('tr');
  let tableBody= document.getElementById('table-body');
  tableBody.appendChild(row);

  let rowTitle = document.createElement('th');
  rowTitle.setAttribute('scope', 'col');
  rowTitle.textContent = this.location;
  row.appendChild(rowTitle);

  for (let i = 0; i < this.hourlyCookiesSold.length; i++) {
    let td = document.createElement('td');
    td.textContent = this.hourlyCookiesSold[i];
    row.appendChild(td);
  }

  let locationTotal = document.createElement('td');
  locationTotal.textContent = this.totalCookiesSold;
  row.appendChild(locationTotal);
};

let seattle = new CookieStore('Seattle', 23, 65, 6.3);
let tokyo = new CookieStore('Tokyo', 3, 24, 1.2);
let dubai = new CookieStore('Dubai', 11, 38, 3.7);
let paris = new CookieStore('Paris', 20, 38, 2.3);
let lima = new CookieStore('Lima', 2, 16, 4.6);

let stores = [seattle, tokyo, dubai, paris, lima];

function submitHandler(event) {
  event.preventDefault();

  let newStore = new CookieStore(
    event.target.storeLocation.value,
    parseInt(event.target.minCustomers.value),
    parseInt(event.target.maxCustomers.value),
    parseFloat(event.target.avgCookies.value)
  );
  stores.push(newStore);

  newStore.renderTableRow();
}

const form = document.getElementById('new-store-form');
form.addEventListener('submit', submitHandler);


function renderTableHeader() {
  const tableHead = document.createElement('tr');
  table.appendChild(tableHead);
  tableHead.appendChild(document.createElement('th')); //Empty th element

  for (let i = 0; i < timeSlots.length; i++) {
    let th = document.createElement('th');
    th.setAttribute('scope', 'col');
    th.textContent = timeSlots[i];
    tableHead.appendChild(th);
  }

  let locationTotalTh = document.createElement('th');
  locationTotalTh.setAttribute('scope', 'col');
  locationTotalTh.textContent = 'Daily Location Total';
  tableHead.appendChild(locationTotalTh);
}

function renderTableBody() {
  let tBody = document.createElement('tbody');
  tBody.setAttribute('id', 'table-body');
  table.appendChild(tBody);
}

function renderTableFooter() {
  let row = document.createElement('tr');
  table.appendChild(row);

  let footerHead = document.createElement('th');
  footerHead.setAttribute('scope', 'row');
  footerHead.textContent = 'Totals';
  row.appendChild(footerHead);

  let allLocationTotal = 0;
  for (let i = 0; i < timeSlots.length; i++) {
    for (let j = 0; j < stores.length; j++) {
      let hourlyTotal = stores[j].hourlyCookiesSold[i];
      hourlyTotals[i] += hourlyTotal;
      allLocationTotal += hourlyTotal;
    }
    let td = document.createElement('td');
    td.textContent = hourlyTotals[i];
    row.appendChild(td);
  }

  let allLocationTotalElem = document.createElement('td');
  allLocationTotalElem.textContent = allLocationTotal;
  row.appendChild(allLocationTotalElem);
}

renderTableHeader();
renderTableBody();
for (let i = 0; i < stores.length; i++) {
  stores[i].renderTableRow();
}
renderTableFooter();
