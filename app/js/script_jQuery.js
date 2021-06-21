@@include('check_webp_css.js')

document.addEventListener("DOMContentLoaded", function(){


	// Menu


	// Vars
	// Навигация
	let nav = document.querySelector(".nav");
	// Кнопка бургер
	let burger = document.querySelector(".burger");
	// Ссылки, при нажатии на которые должны открываться вложенные списки ul
	let linksShowUl = document.querySelectorAll(".nav__link--show-ul");
	// Вложенные списки ul
	let ulsIn = document.querySelectorAll(".nav__ul-in");


	// Функция, которая убирает класс active у всех ссылок, при нажатии на которые должны открываться вложенные списки ul
	let removeActiveUlsIn = function() {
		// Уберу класс active у всех вложенных ul в цикле
		for (let index = 0; index < ulsIn.length; index++) {
			const ulIn = ulsIn[index];
			ulIn.classList.remove("active");
		}
	}
	// Функция, которая убирает класс active у всех вложенных списков ul
	let removeActiveUlsIn = function() {
		// Уберу класс active у всех вложенных ul в цикле
		for (let index = 0; index < ulsIn.length; index++) {
			const ulIn = ulsIn[index];
			ulIn.classList.remove("active");
		}
	}

	// Изменение классов у нажатых ссылок+изменение высоты навигации при открытии/закрытии ul
	let clickLinkShowUl = function(event) {
		event.preventDefault;
		// Ссылка, на которую нажал
		let link = event.target;
		// Уберу класс active у всех ссылок в цикле
		for (let index = 0; index < linksShowUl.length; index++) {
			const linkShowUl = linksShowUl[index];
			linkShowUl.classList.remove("active");
		}
		// ul, у которого есть класс active на момент нажатия ссылки до того, когда уберу у всех класс active
		let ulInActive = document.querySelector(".nav__ul-in.active");
		if(ulInActive != null) {
			// Tакой ul есть
			// Вычту из высоты навигации высоту активного ul и запишу в высоту nav
			nav.style.height = parseInt(nav.style.height) - ulInActive.clientHeight + "px";
		}
		removeActiveUlsIn();
		// Добавлю класс active ссылке, на которую нажал
		link.classList.add("active");
		// Родительский li ссылки, на которую нажали
		let parentLinkNavLi = link.closest(".nav__li");
		// Родственный ul ссылки, на которую нажали
		let ulIn = parentLinkNavLi.querySelector(".nav__ul-in");
		// Добавлю класс active родственному ul ссылки, на которую нажали
		ulIn.classList.add("active");
		// Прибавлю к высоте навигации высоту активного ul
		nav.style.height = parseInt(nav.style.height) + ulIn.clientHeight + "px";
	};
	for (i=0; i<linksShowUl.length; i++) {
		let linkShowUl = linksShowUl[i];
		linkShowUl.addEventListener("click", clickLinkShowUl);
	};

	// Функция рассчета высоты nav и записи вычесленного значения высоты в высоту nav
	let heightNavCount = function() {
		nav.style.height = 'auto';
		// Создам переменную height, в которую запишу вычисленную высоту после auto, а также прибавлю высоту псевдоэлемента в виде красной полоски снизу
		let height = nav.clientHeight + 5 + "px";
		nav.style.height = '0px';
		setTimeout(function () {
			nav.style.height = height;
		}, 250);
	};

	// Плавное Открытие/закрытие меню+aнимация бургера
	let clickBurger = function (event) {
		event.preventDefault();
		burger.classList.toggle("active");
		if (nav.classList.contains('active') == false) {
			nav.classList.add('active');
			heightNavCount();
		} else {
			nav.style.height = '0px';
			console.log("установил высоту nav в 0");

			nav.addEventListener('transitionend', function () {
				nav.classList.remove('active');
			}, {
				once: true
			});
		}
	};
	burger.addEventListener("click", clickBurger);


	// Media
	// Создаем объект MediaQueryList
	let mediaQueryList = window.matchMedia("(min-width: 1200px)");

	let handleWidthChange = function(event) {
		if (event.matches) {
			removeActiveUlsIn();
			heightNavCount();
		} else {
			removeActiveUlsIn();
			heightNavCount();
		}
	};
	mediaQueryList.addListener(handleWidthChange);

	handleWidthChange(mediaQueryList);

});