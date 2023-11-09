// Add To Cart
let addIcon = document.querySelectorAll(".products-1 > .product > i");
let cartProducts = [];

// Cart Status
function cartStatus(cartProducts) {
	let cartIcon = document.getElementsByClassName("fa-cart-shopping")[0];
	if (cartProducts.length != 0) {
		cartIcon.classList.add("active-icon");
	};
};

addIcon.forEach(function (icon) {
	icon.addEventListener("click", function (e) {
		e.target.classList.replace("fa-plus", "fa-check");
		e.target.parentElement.classList.replace("not-added", "added");
		if (!cartProducts.includes(e.target.parentElement)) {
			cartProducts.unshift(e.target.parentElement);
		};
		cartStatus(cartProducts);
	});
});

// Remove From Cart
cartProducts.forEach(function (parent) {
	parent.firstElementChild.addEventListener("click", function (e) {
		e.target.classList.replace("fa-check", "fa-plus");
		e.target.parentElement.classList.replace("added", "not-added");
		cartProducts.splice(cartProducts.indexOf(e.target.parentElement), 1, 0);
		cartStatus(cartProducts);
	});
});





