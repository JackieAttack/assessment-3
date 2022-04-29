console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');

}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let catpic = document.querySelector('#cat-pic');

function catMouseOver() {
	
	alert('You are so observant! Good job looking before you sit.');
}

catpic.addEventListener("mouseover", catMouseOver)
//alert instead of console log