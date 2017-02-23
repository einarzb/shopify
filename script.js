// an array with all of our cart items
var cart = [];

var updateCart = function () {
  $(".cart-list").empty();

  var itemCounter = {}; //declaring map object

  for (var i = 0; i < cart.length; i++) {
      var mostFrequent = cart[i].name; //key var
  
      //if item exists in array
     if(itemCounter[mostFrequent]) {
        itemCounter[mostFrequent].counter++;
      //if not - create an object that holds it and count it
     }else{ itemCounter[mostFrequent] = {
            name: mostFrequent,
            price: cart[i].price,
            counter: 1
          }//end object
         }//end else object isn't on map - create it   
      }//end for loop 

  //for in loop - for looping inside the new object we created    
  for (var property in itemCounter) {
    $(".cart-list").append("<p>" + itemCounter[property].name + "(" + itemCounter[property].counter + ")" + itemCounter[property].price + "$</p>");
  }; //end of for in loop 
};//end of function

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
updateCart(); //equals to document.ready! because its a global function its executed once 

