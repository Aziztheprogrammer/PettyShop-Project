// Add To Cart
let addIcon = document.querySelectorAll(".products-1 > .product > i");
let cartProducts = [];
let cartProductsClasses = [];

// Cart Status
function cartStatus(cartProducts) {
	let cartIcon = document.getElementsByClassName("fa-cart-shopping")[0];
	if (cartProducts.length != 0) {
		cartIcon.classList.add("active-icon");
	} else {
		cartIcon.classList.remove("active-icon");
	}
};

// Show Added Successfuly Message
var msgDiv = document.createElement("div");

function cartMessage(msg, status) {
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
	if (!status) {
		msgDiv.style.cssText = `
			opacity: 1;
			position: fixed;
			bottom: 40px;
			left: 40px;
			padding: 8px 24px;
			background-color: #f29898;
			border-left: 2px solid #d63333;
			z-index: 10;
			transition: var(--transition-delay) ease all;
		`;
	}
	document.body.append(msgDiv);
}

addIcon.forEach(function (icon) {
	icon.parentElement.addEventListener("mouseover", function (e) {
		icon.classList.replace("fa-check", "fa-xmark");
	});

	icon.parentElement.addEventListener("mouseout", function (e) {
		icon.classList.replace("fa-xmark", "fa-check");
	})
});

addIcon.forEach(function (icon) {
		icon.addEventListener("click", function (e) {
			if (!cartProducts.includes(e.target.parentElement)) {
				e.target.classList.replace("fa-plus", "fa-check");
				e.target.parentElement.classList.replace("not-added", "added");
				cartProducts.unshift(e.target.parentElement);
				cartProductsClasses.unshift(e.target.parentElement.classList
					[e.target.parentElement.classList.length - 1]);
				cartMessage("Item Is Added To Cart Successfuly !", true);
				setTimeout(function hideMsg() {
					document.getElementsByClassName("cart-msg")[0].style.opacity = "0";
				}, 2000);
				loadItem();
			} else if (cartProducts.includes(e.target.parentElement) && 
				icon.classList.contains("fa-xmark")) {
				cartProducts.splice(cartProducts.indexOf(icon.parentElement), 1);
				icon.classList.replace("fa-xmark", "fa-plus");
				icon.parentElement.classList.replace("added", "not-added");
				cartMessage("Item Has Been Removed !", false);
				setTimeout(function hideMsg() {
					document.getElementsByClassName("cart-msg")[0].style.opacity = "0";
				}, 2000);
				loadItem();
			}
			cartStatus(cartProducts);
		});
});

// Open The Aside Of Added Items
let cartIcon = document.getElementsByClassName("fa-cart-shopping")[0];
let itemsAside = document.getElementsByClassName("cart-items")[0];
let closeAsideButton = document.querySelector(".cart-items > i");

cartIcon.addEventListener("click", function (e) {
	itemsAside.style.animationName = "OpenAside";
});

closeAsideButton.addEventListener("click", function (e) {
	itemsAside.style.animationName = "CloseAside";
});

// Load Cart Items In The Aside Items
let itemsContainer = document.querySelector(".cart-items > div");

function loadItem() {
	itemsContainer.innerHTML = "";
	cartProducts.forEach(function (item) {
		let itemsInfo = item.outerText.split("\n");
		itemsInfo = itemsInfo.filter((i) => i != "");
		// Create Parent Div For Item
		let parentDiv = document.createElement("div");
		parentDiv.classList.add("item", "flex", "items-center", "justify-between", 
			item.classList[item.classList.length - 1]);
		// Create Remove Item Icon
		let removeFromCart = document.createElement("i");
		removeFromCart.classList.add("fa-solid", "fa-check-double");
		parentDiv.append(removeFromCart);
		// Create Product Info Div
		let productInfo = document.createElement("div");
		productInfo.classList.add("product-info");
		productInfo.innerHTML = `
			<div class="text">
				<p>${itemsInfo[0]}</p>
				<span>
					${itemsInfo[1]}
					<span>
						${itemsInfo[2]}
					</span>
				</span>
			</div>
		`;
		parentDiv.prepend(productInfo);
		itemsContainer.append(parentDiv);
		addIcon = document.querySelectorAll(".products-1 > .product > i");

	});
}











