// ITERATION 1
function updateSubtotal(product) {
   const price = product.querySelector('.price span');
   const quantity = product.querySelector('.quantity input')
  let total = quantity.value * price.innerHTML;
  //... your code goes here
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerHTML = total;
  return total;
}
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test
  // ITERATION 2
  //... your code goes here
  let sumTotal = document.getElementsByClassName('product')
  let basketOfProducts = [...sumTotal];
  let productTotal = 0;
  basketOfProducts.forEach((element) => {
    productTotal = productTotal + updateSubtotal(element);
  });
  // ITERATION 3
  //... your code goes here
  const calculateTotal = document.querySelector('#total-value span');
  calculateTotal.innerHTML = productTotal
}
// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  console.log('The target in remove is:', target.parentNode.parentNode);
  target.parentNode.parentNode.remove()
}
  // ITERATION 5
  window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    //... your code goes here
    const buttonRemove = document.getElementsByClassName('btn-remove')
    for (let i = 0; i <buttonRemove.length; i++)
    buttonRemove[i].addEventListener('click', removeProduct)
  });