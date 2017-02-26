// an array with all of our cart items
var cart = [];
var total = 0;

var updateCart = function () {
  $(".cart-list").empty();
  total = 0;

  // var itemCounter = {}; //declaring map object

  for (var i = 0; i < cart.length; i++) {
    $(".cart-list").append("<p>" + cart[i].name + " " +  "(" + cart[i].counter + ")" + " - " + ( * cart[i].price) + "$"  + " - <a class='removeQuantity' href='#'>x</a></p>");  
    total += cart[i].price * cart[i].counter;
    $(".total").text(total);
  }; //end of for in loop 

};//end of function

var cart = []; //storage array

var addItem = function (item) {
    var itemExists = false;
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].name === item.name) {
         cart[i].counter++;
         itemExists = true;
      } 
    };
    
    //if it wasnt in a for loop than this would be else: 
    if (!itemExists) {
      cart.push(item);
    }

    console.log(cart);
}

// TODO: Write a function that clears the cart ;-)
var clearCart = function () {
  $(".cart-list").empty();
  $(".total").empty(); //clear html
  total = 0; //clear backend
  console.log("empty!");

 //splicing the array
  cart.splice(0, cart.length); //the array length equals as the number of items to be removed
}

// TODO: hide/show the shopping cart!

$('.view-cart').on('click', function () {
  $(".shopping-cart").toggle(".show");
});

$('.add-to-cart').on('click', function () {
  $(".shopping-cart").css("display","block"); //user add-on
  // TODO: get the "item" object from the page
  var name = $(this).parent().parent().parent().find(".item").data().name;
  var price = $(this).parent().parent().parent().find(".item").data().price;
  var counter = 1;
  var item = {name:name, price:price, counter:counter};
  console.log(item);
  addItem(item); //invoking
  updateCart(); //invoking
});

$('.clear-cart').on('click', function () {
  console.log("clearing");
  clearCart();
});

//removing item from cart function
$("body").on('click', ".removeQuantity", function () {
  var itemIndex = $(this).parent().index(); //storing the index of an element
  //cart[index].counter -= cart[index].counter;
  var removedItem = $(this).parent().counter;
  console.log(removedItem);//object
});

// update the cart as soon as the page loads!
updateCart(); //equals to document.ready! because its a global function its executed once 

