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

// Show Added Successfuly Message
var msgDiv = document.createElement("div");

function cartMessage(msg) {
	msgDiv.textContent = msg;
	msgDiv.classList.add("cart-msg");
	msgDiv.style.cssText = `
		opacity: 1;
		position: fixed;
		bottom: 40px;
		left: 40px;
		background-color: #76ed86;
		padding: 8px 24px;
		border-left: 2px solid #376b3e;
		z-index: 10;
		transition: var(--transition-delay) ease all;
	`;
	document.body.append(msgDiv);
}

addIcon.forEach(function (icon) {
	icon.addEventListener("click", function (e) {
		e.target.classList.replace("fa-plus", "fa-check");
		e.target.parentElement.classList.replace("not-added", "added");
		if (!cartProducts.includes(e.target.parentElement)) {
			cartProducts.unshift(e.target.parentElement);
			cartMessage("Item Is Added To Cart Successfuly !");
			setTimeout(function hideMsg() {
				document.getElementsByClassName("cart-msg")[0].style.opacity = "0";
			}, 2000);
		};
		cartStatus(cartProducts);
	});
});

// Open The Aside Of Added Items
let cartIcon = document.getElementsByClassName("fa-cart-shopping")[0];
let itemsAside = document.getElementsByClassName("cart-items")[0];
let closeAsideButton = document.querySelector(".cart-items > i");

cartIcon.addEventListener("click", function (e) {
	itemsAside.style.display = "block";
	itemsAside.style.animationName = "OpenAside";
});

closeAsideButton.addEventListener("click", function (e) {
	itemsAside.style.animationName = "CloseAside";
});





