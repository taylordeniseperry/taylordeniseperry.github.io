$( document ).ready(function() {
    console.log( "ready!" );
    console.log('yay this script loaded');
    $('.addToCart').on('click', function(){
        $(this).parent().appendTo('#bookCart');
    });
});

// var addToCart = $('#addToCart'),
//     bookStore = $('#bookStore'),
//     books = bookStore.children(),
//     bookCart = $('#bookCart'),
//     booksInCart = bookCart.children();

// function addBookToCart () {
// 	var book = $(this)[0],
// 		className = book.innerText.split(' ').join('-'),
//         bookTemplate = '<li class="' + className + '">' + book.innerText + '</li>';

//     //check if bookCart children have class
//     console.log(bookCart.children('.'+className));
//     if(bookCart.children('.'+className)) {
//     	// bookCart.children('.'+className) 	
//     } else {
// 	    $(bookTemplate).appendTo(bookCart);
// 	    bookCart.children('.'+className).on("click", removeFromCart);
//     }
// }

// function removeFromCart () {
// 	var response = confirm("Are you sure you want to remove this book?");
// 	if(response === true) {
// 		$(this).remove();
// 	}
// }

// books.on("click", addBookToCart);

// booksInCart.on("click", removeFromCart);

// when add to cart button is clicked
// select the entire product div and appendTo cart
// when remove button is clicked removeFromCart