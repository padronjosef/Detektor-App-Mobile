
const menu = document.querySelector('.menu');
const map = document.querySelector('.map');
const OpenMenu = document.querySelector('#burger-menu');
const closeMenu = document.querySelector('#close-menu');
const openMap = document.querySelector('.map-btn');
const closeMap = document.querySelector('#arrow-btn');

OpenMenu.addEventListener('click', () => {
	menu.classList.add('is-active')
})

closeMenu.addEventListener('click', () => {
	menu.classList.remove('is-active')
})

openMap.addEventListener('click', () => {
	map.classList.add('is-active')
})

closeMap.addEventListener('click', () => {
	map.classList.remove('is-active')
})
