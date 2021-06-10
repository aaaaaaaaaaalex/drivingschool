function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2); };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

document.addEventListener("DOMContentLoaded", function(){


	// Menu
	// Menu Toggle
	// let burger = document.querySelector(".burger");
	// let nav = document.querySelector(".nav");

	// let clickBurger = function(event) {
	// 	event.preventDefault;
	// 	burger.classList.toggle("active");
	// 	nav.classList.toggle("active");

	// };
	// burger.addEventListener("click", clickBurger);

	// Multilevel menu
	let linksShowUl = document.querySelectorAll(".nav__link--show-ul");
	let ulsIn = document.querySelectorAll(".nav__ul-in");

	let clickLinkShowUl = function(event) {
		event.preventDefault;
		let link = event.target;

		for (let index = 0; index < linksShowUl.length; index++) {
			const linkShowUl = linksShowUl[index];
			linkShowUl.classList.remove("active");
		}

		// Найду навигацию
		let navigation = document.querySelector(".nav");
		// Сохраню высоту навигации
		let heigtNavigation = navigation.clientHeight;
		console.log("высота навигации до вычета высоты активного ul", heigtNavigation);

		// Нахожу ul, у которого есть класс active
		let ulInActive = document.querySelector(".nav__ul-in.active");
		// console.log(ulInActive);
		if(ulInActive == null) {
			// Если такого ul нет, то
			var heightUlInOld = 0;
			console.log("нет ul c состоянием active");
			console.log("установил высоту в значение",heightUlInOld);
		}else{
			// Если такой ul есть, то
			// Сохраню высоту активного ul
			var heightUlInOld = ulInActive.clientHeight;
			console.log("есть ul c состоянием active");
			console.log("высота ul у которого состояние active",heightUlInOld);

			// Найду значение текущей высоты nav
			// let heightNavCurrent = parseInt(nav.clientHeight, 10);
			// console.log("высота nav до открытия ul",heightNavCurrent);
			// nav.style.height = heightNavCurrent - heightUlInOld + "px";

			// Вычту из высоты навигации высоту активного ul и запишу в высоту nav
			navigation.style.height = heigtNavigation - heightUlInOld + "px";
			console.log("высота навигации после вычитания высоты активного ul", navigation.style.height);
		}

		for (let index = 0; index < ulsIn.length; index++) {
			const ulIn = ulsIn[index];



			ulIn.classList.remove("active");
			// console.log("ul, у которого убрали класс актив",ulIn);





			// let heightNavOld = parseInt(nav.clientHeight, 10);
			// nav.style.height = heightNavOld - heightUlIn + "px";
			// console.log("высота nav до открытия ul",heightNavOld);
			// console.log("новая высота nav",nav.style.height);

			// if(heightUlInOld > 0) {
			// 	var heightUlInOldLarge = heightUlInOld;
			// }
			// console.log(heightUlInOldLarge);



		}
		// console.log("цикл закончил работу");

		link.classList.add("active");
		let parentLinkNavLi = link.closest(".nav__li");
		let ulIn = parentLinkNavLi.querySelector(".nav__ul-in");
		console.log("родственный ul", ulIn);

		ulIn.classList.add("active");

		// Сохраню высоту открытого ul
		let heightUlIn = ulIn.clientHeight;
		console.log("высота открытого ul",heightUlIn);
		// let heightNav = parseInt(nav.clientHeight, 10);
		// nav.style.height = heightNav + heightUlIn + "px";

		// Найду высоту nav после вычитания
		let heightNavigationOld = navigation.clientHeight;
		console.log("высота nav после вычитания", heightNavigationOld);

		// Прибавлю к высоте навигации высоту активного ul
		navigation.style.height = heightNavigationOld + heightUlIn + "px";


		// console.log("высота nav до открытия ul",heightNav);
		console.log("конечная высота nav после открытия ul", navigation.clientHeight);
		console.log("конечная высота nav после открытия ul метод стайл", navigation.style.height);


	};
	for (i=0; i<linksShowUl.length; i++) {
		let linkShowUl = linksShowUl[i];
		linkShowUl.addEventListener("click", clickLinkShowUl);
	};





	let nav = document.querySelector(".nav");
	let burger = document.querySelector(".burger");

	let clickBurger = function (event) {
		event.preventDefault();

		if (nav.classList.contains('active') == false) {
			nav.classList.add('active');
			nav.style.height = 'auto';

			let height = nav.clientHeight + "px";

			nav.style.height = '0px';

			setTimeout(function () {
				nav.style.height = height;
			}, 100);
		} else {
			nav.style.height = '0px';

			nav.addEventListener('transitionend', function () {
				nav.classList.remove('active');
			}, {
				once: true
			});
		}
	};
	burger.addEventListener("click", clickBurger);

});