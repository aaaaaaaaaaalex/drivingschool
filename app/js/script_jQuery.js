@@include('check_webp_css.js')

document.addEventListener("DOMContentLoaded", function(){



	// Burger
	let burger = document.querySelector(".burger");

	let clickBurger = function() {
		burger.classList.toggle("active");

	};


	burger.addEventListener("click", clickBurger);

});