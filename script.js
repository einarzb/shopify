// an array with all of our cart items
var cart = [];

var updateCart = function () {
  // TODO: Write this function. In this function we render the page.
  // Meaning we make sure that all our cart items are displayed in the browser.
  // Remember to empty the "cart div" before you re-add all the item elements.
}


var addItem = function (item) {

  // TODO: Write this function. Remember this function has nothing to do with display. 
  // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  $(".cart-list").empty();
    console.log("empty!");
}

// TODO: hide/show the shopping cart!
var cartView = "show"; //true flag

$('.view-cart').on('click', function () {

  if (cartView === "show") { //true

        $(".shopping-cart").css("display","block");
        cartView = "hide"; //change var
        console.log("showen");

  } else {

        $(".shopping-cart").css("display","none");
        cartView = "show"; //change var again
        console.log("hiden now");
      }
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

  clearCart();
});

// update the cart as soon as the page loads!
updateCart();
