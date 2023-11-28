export default {
	name: 'parallax',
	mounted(el, binding) {
		const wrapper = el.querySelector('[data-items]');
		const columns = el.querySelectorAll('[data-column]');

		const speed = binding.value;

		let positionX = 0;
		let coordXPercent = 0;

		function setMouseGalleryStyle() {
			let itemsWidth = 0;
			columns.forEach((item) => {
				itemsWidth += item.offsetWidth;
			});

			const furnitureDifferent = itemsWidth - el.offsetWidth;
			const distX = Math.floor(coordXPercent - positionX);

			positionX = positionX + distX * speed;
			let position = (furnitureDifferent / 200) * positionX;

			wrapper.style.cssText += `transform: translate3d(${-position}px, 0, 0);`;

			if (Math.abs(distX) > 0) {
				requestAnimationFrame(setMouseGalleryStyle);
			} else {
				el.classList.remove('_init');
			}
		}

		el.addEventListener('mousemove', (event) => {
			const elWidth = el.offsetWidth;
			const coordX = event.pageX - elWidth / 2;
			coordXPercent = (coordX / elWidth) * 200;

			if (!el.classList.contains('_init')) {
				requestAnimationFrame(setMouseGalleryStyle);
				el.classList.add('_init');
			}
		});
	},
	unmounted(el) {

	},
};

