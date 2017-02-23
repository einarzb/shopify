// an array with all of our cart items
var cart = [];

var updateCart = function () {
  $(".cart-list").empty();

  for (var i = 0; i < cart.length; i++) {
      console.log("looping");
      $(".cart-list").append("<p>" + cart[i].name + "(" + itemCounter + ")" + cart[i].price + "$</p>");
  };

  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}

var cart = []; //storage array

var addItem = function (item) {
    cart.push(item);
    console.log(cart);
}

// TODO: Write a function that clears the cart ;-)
var clearCart = function () {
  $(".cart-list").empty();
    console.log("empty!");

 //splicing the array
  cart.splice(0, cart.length); //the array length equals as the number of items to be removed
}

// TODO: hide/show the shopping cart!

$('.view-cart').on('click', function () {
  $(".shopping-cart").toggle(".show");
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var name = $(this).parent().parent().parent().find(".item").data().name;
  var price = $(this).parent().parent().parent().find(".item").data().price;
  var item = {name:name, price:price};
  console.log(item);
  addItem(item); //invoking
  updateCart(); //invoking
});

$('.clear-cart').on('click', function () {
  console.log("clearing");
  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
