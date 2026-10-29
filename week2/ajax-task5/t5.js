const apiURL = 'https://media2.edu.metropolia.fi/restaurant/api/v1';
let restaurants = [];

// ASYNKRONINEN fetch-funktio
const fetchData = async (params) => {
  const response = await fetch(apiURL + '/restaurants');
  restaurants = await response.json();
  console.log(restaurants);
};

fetchData();
console.log('fetchData() called');

// get reference to the first table element in html dom
const tableElem = document.querySelector('table');

// get ref to dialog
const dialogElem = document.querySelector('dialog');
// close modal when it gets clicked
dialogElem.addEventListener('click', (event) => {
  dialogElem.close();
});

// loop through all restaurants in the array
for (const restaurant of restaurants) {
  // Create dom elements for each restaurant
  const tableRow = document.createElement('tr');
  const nameCell = document.createElement('td');
  const addressCell = document.createElement('td');
  // build dom
  tableElem.append(tableRow);
  tableRow.append(nameCell);
  tableRow.append(addressCell);
  // add content to table
  nameCell.textContent = restaurant.name;
  addressCell.textContent = restaurant.address;

  // add event handler and content for restaurant chosen
  tableRow.addEventListener('click', (event) => {
    // reset dialog element
    dialogElem.innerHTML = '';
    // add new content
    const title = document.createElement('h3');
    title.textContent = restaurant.name;
    const details = document.createElement('p');
    title.textContent = restaurant.name;
    details.textContent = `${restaurant.address}, ${restaurant.postalCode} ${restaurant.city}`;
    dialogElem.append(title);
    dialogElem.append(details);
    dialogElem.showModal();
  });
}

// Vaihtoehtoinen TAPA silmukalle
// restaurants.forEach((restaurant) => {
//   const tableRow = document.createElement('tr');
//   const nameCell = document.createElement('td');
//   const addressCell = document.createElement('td');
//   tableElem.append(tableRow);
//   tableRow.append(nameCell);
//   tableRow.append(addressCell);
//   nameCell.textContent = restaurant.name;
//   addressCell.textContent = restaurant.address;
// });
