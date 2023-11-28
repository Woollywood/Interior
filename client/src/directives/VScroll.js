export default {
	name: 'scroll',
	mounted(el) {
		scrollObserver(el);
		window.addEventListener('scroll', scrollObserver.bind(this, el))
	},
	unmounted(el) {
		window.removeEventListener('scroll', scrollObserver.bind(this, el))
	},
}

function scrollObserver(el) {
	const scrollValue = document.documentElement.scrollTop
	if (scrollValue > 120) {
		el.classList.add('scroll');
	} else {
		el.classList.remove('scroll');
	}
}