/* global Cart */
'use strict';

// try playing with document.querySelector


// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let clearRow = document.cart.querySelector("tr").remove();
}
// 
// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let cart = document.querySelector('tbody');
  
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

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
