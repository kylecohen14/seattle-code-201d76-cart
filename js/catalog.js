/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  // DONE
  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  for (let i in Product.allProducts) {
    const itemOption = document.createElement('option');
    itemOption.textContent = `${Product.allProducts[i].name}`;
    selectElement.appendChild(itemOption);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {

  // TODO: Prevent the page from reloading
  event.preventDefault();
  let name = event.target.name.value;
  let quantity = event.target.quantity.value;
  // Do all the things ...
  // hey if you want to you can pass values to these functions 
  addSelectedItemToCart(name, quantity);
  cart.saveToLocalStorage();
  updateCounter(quantity);
  updateCartPreview(name, quantity);

}
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let cart = document.getElementById('cart-container').innerHTML = '';
  for (let i in Cart.allCart) {
    let newRow = document.createElement('tr');
    cart.appendChild(newRow);
    let newProduct = document.createElement('td');
    newProduct.textContent = `${Cart.allCart[i].name}`;
    newRow.appendChild(newProduct);
    let newQuantity = document.createElement('td');
    newQuantity.textContent = `${Cart.allCart[i].quantity}`;
    newRow.appendChild(newQuantity);
  }
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
}

// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {

}



// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  
  // TODO: Add a new element to the cartContents div with that information
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
