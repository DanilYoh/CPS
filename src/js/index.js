import '../scss/style.scss';

console.log('Works!');
// Меню поиска
const sidebar = document.querySelector('.sidebar');
const icon = document.querySelector('.icon');
const searchBox = document.querySelector('.search-box');
const logo = document.querySelector('.logo');
icon.onclick = function() {
	searchBox.classList.toggle('active-search');
	logo.classList.toggle('active-search');
	closeAside.classList.toggle('active-search')
};

// Кнопки обратной связи

const input = document.querySelector('.content__wraper');
const title = document.querySelector('.dynamic-title');


const btnApplication = document.querySelectorAll('.btnApplication');
btnApplication.forEach(buttonItem => {
	buttonItem.addEventListener('click', btnClickOne);
});
function btnClickOne() {
	sidebar.classList.add('active');
		aside.classList.remove('open');
		overlay.classList.remove('unblock')
		title.innerHTML = `Оратная связь`;
		input.innerHTML = `
				<div class="sidebar__input-area">
				<input type="text" placeholder="Имя" class="input">
				</div>
				<div class="sidebar__input-area">
				<input type="text" placeholder="Телефон" class="input">
				</div>
				<div class="sidebar__input-area">
				<input type="text" placeholder="Электронная почта" class="input">
				</div>
				<div class="sidebar__input-area">
				<textarea type="text" class="input" placeholder="Сообщение"></textarea>
				</div>
		`;
}





const btnCall = document.querySelectorAll('.btncall');
btnCall.forEach(buttonItem => {
	buttonItem.addEventListener('click', btnClickTwo )
})
function btnClickTwo() {
	sidebar.classList.add('active');
	aside.classList.remove('open');
	overlay.classList.remove('unblock')
	title.innerHTML = `Заказать звонок`;
	input.innerHTML = `
			<div class="sidebar__input-area">
			<input type="text" placeholder="Телефон" class="input">
			</div>
	`;
}
	



const closeSidebar = document.querySelector('.close');
closeSidebar.addEventListener('click', () => {
	sidebar.classList.remove('active');
});

// Меню бургер

const overlay = document.querySelector('.aside__overlay')
const aside = document.querySelector('.aside')
const hamburger = document.querySelector('.hamburger')
hamburger.addEventListener('click', () => {
	aside.classList.add('open');
	overlay.classList.add('unblock')
});

const closeAside = document.querySelector('.closeAside');
closeAside.addEventListener('click', () => {
	aside.classList.remove('open');
	overlay.classList.remove('unblock')
});

// Кнопки для всплывающих окн

const readMoreBtn	= document.getElementById('text');
let text = document.querySelector('.promo__info');
const btnStatus = document.querySelector('.show__text');
readMoreBtn.addEventListener('click', () => {
	text.classList.toggle('visible');
	readMoreBtn.classList.toggle('up');
	if (readMoreBtn.classList.contains('up')) {
		btnStatus.innerHTML = `Скрыть`;
	} else (btnStatus.innerHTML = `Читать дальше`);
});

const showMore	= document.querySelector('.brandsAdd');
const brandsBlock = document.querySelector('.brands__block');
const btn = document.getElementById('one');
showMore.addEventListener('click', () => {
	brandsBlock.classList.toggle('visible');
	showMore.classList.toggle('up');
	if (showMore.classList.contains('up')) {
		btn.innerHTML = `Скрыть`;
	} else (btn.innerHTML = `Показать все`);
});
const showMoreTechnics	= document.querySelector('.technicsAdd');
let technicsBlock = document.querySelector('.technics__block');
const btnTechnics = document.getElementById('two');
showMoreTechnics.addEventListener('click', () => {
	technicsBlock.classList.toggle('visible');
	showMoreTechnics.classList.toggle('up');
	if (showMoreTechnics.classList.contains('up')) {
		btnTechnics.innerHTML = `Скрыть`;
	} else (btnTechnics.innerHTML = `Показать все`);
});

// Слайдеры

const slider = document.querySelector('.swiper-container');
let mySwiper;
function mobileSlider() {
  if (window.innerWidth <= 763 && slider.dataset.mobile == 'false') {
    mySwiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
       	el: '.pag-1',
          clickable: true,
            },
           
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 763) {
    slider.dataset.mobile = 'false';
    if (slider.classList.contains('swiper-container-initialized')) {
      mySwiper.destroy();
    }
  }
}

mobileSlider()

const slidertwo = document.querySelector('.swiper-container-two');
let mySwipertwo;
function mobileSlidertwo() {
  if (window.innerWidth <= 763 && slidertwo.dataset.mobile == 'false') {
    mySwipertwo = new Swiper(slidertwo, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
       	el: '.pag-2',
          clickable: true,
            },
           
    });

    slidertwo.dataset.mobile = 'true';
  }

  if (window.innerWidth > 763) {
    slidertwo.dataset.mobile = 'false';
    if (slidertwo.classList.contains('swiper-container-initialized')) {
      mySwipertwo.destroy();
    }
  }
}

mobileSlidertwo()

const sliderthre = document.querySelector('.swiper-container-thre');
let mySwiperthre
function mobileSliderthre() {
  if (window.innerWidth <= 763 && sliderthre.dataset.mobile == 'false') {
    mySwiperthre = new Swiper(sliderthre, {
      slidesPerView: 1,
      spaceBetween: 40,
      pagination: {
       	el: '.pag-3',
          clickable: true,
            },
           
    });

    sliderthre.dataset.mobile = 'true';
  }

  if (window.innerWidth > 763) {
    sliderthre.dataset.mobile = 'false';
    if (sliderthre.classList.contains('swiper-container-initialized')) {
      mySwiperthre.destroy();
    }
  }
}

mobileSliderthre()


const sliderfour = document.querySelector('.swiper-container-four');

let mySwiperfour;

function mobileSliderfour() {
  if (window.innerWidth <= 768 && sliderfour.dataset.mobile == 'false') {
    mySwiperfour = new Swiper(sliderfour, {
			watchSlidesProgress: true,
			slidesPerView: 3,
		});

    sliderfour.dataset.mobile = 'true';
  }

  if (window.innerWidth > 768) {
    sliderfour.dataset.mobile = 'false';
    if (sliderfour.classList.contains('swiper-container-initialized')) {
      mySwiperfour.destroy();
    }
  }
}

mobileSliderfour()



window.addEventListener('resize', () => {
  mobileSlider();
	mobileSlidertwo();
	mobileSliderthre();
	mobileSliderfour();
});
// window.addEventListener('resize', () => {
// 	mobileSlidertwo();
	
// });
// window.addEventListener('resize', () => {
// 	mobileSliderthre();
// });
// window.addEventListener('resize', () => {
// 	mobileSliderfour();
// });
