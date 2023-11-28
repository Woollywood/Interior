<script setup>
import { Autoplay, Pagination, Navigation, Parallax } from 'swiper/modules';
</script>

<template>
	<section class="section section-gutter">
		<div class="section__container container">
			<div class="section__body">
				<div class="section__text-wrapper">
					<SectionTitle class="section__title" type="h2">50+ Beautiful rooms inspiration</SectionTitle>
					<div class="section__text">
						Our designer already made a lot of beautiful prototipe of rooms that inspire you
					</div>
					<Button class="section__button">Explore More</Button>
				</div>
				<div class="swiper slider" ref="slider">
					<div class="swiper-wrapper">
						<div v-for="(room, index) in rooms" class="swiper-slide slide">
							<div class="slide__body">
								<div class="slide__image ibg">
									<img
										:src="require(`@/assets/img/home/inspiration/${room.imageName}`)"
										alt="room-image" />
								</div>
								<div
									class="slide__content"
									data-swiper-parallax-opacity="0"
									data-swiper-parallax-y="-50">
									<div class="slide__text-wrapper">
										<div class="slide__top">
											<div class="slide__number">{{ formattedIndex(index + 1) }}</div>
											<div class="slide__sep"></div>
											<div class="slide__category">{{ room.category }}</div>
										</div>
										<div class="slide__name">{{ room.name }}</div>
									</div>
									<a class="slide__link" href="#">
										<SvgIcon name="ArrowRight" width="24" height="24" />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div class="swiper-pagination"></div>
					<div class="swiper-navigation">
						<SliderArrow class="slider-arrow slider__arrow-prev" type="prev" />
						<SliderArrow class="slider-arrow slider__arrow-next" type="next" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import Swiper from 'swiper';

export default {
	data() {
		return {
			rooms: [
				{
					imageName: '01.jpg',
					category: 'Bed Room',
					name: 'Inner Peace',
				},
				{
					imageName: '02.jpg',
					category: 'Bed Room',
					name: 'Inner Peace',
				},
				{
					imageName: '01.jpg',
					category: 'Bed Room',
					name: 'Inner Peace',
				},
				{
					imageName: '02.jpg',
					category: 'Bed Room',
					name: 'Inner Peace',
				},
				{
					imageName: '01.jpg',
					category: 'Bed Room',
					name: 'Inner Peace',
				},
				{
					imageName: '02.jpg',
					category: 'Bed Room',
					name: 'Inner Peace',
				},
				{
					imageName: '01.jpg',
					category: 'Bed Room',
					name: 'Inner Peace',
				},
				{
					imageName: '02.jpg',
					category: 'Bed Room',
					name: 'Inner Peace',
				},
			],
		};
	},
	methods: {
		formattedIndex(index) {
			if (index < 10) {
				return '0' + index;
			} else {
				return index;
			}
		},
		setSlidesWidth(event) {
			event.hostEl.style.cssText += `--slide-width: ${event.slides[0].offsetWidth}px`;
		},
		setSlidesHeightOffset(event) {
			const slider = event.hostEl;
			const activeSliderHeight = slider.querySelector('.swiper-slide-active .slide__body').offsetHeight;
			const normalSliderHeight = slider.querySelector('.swiper-slide-next .slide__body').offsetHeight;
			slider.style.cssText += `--slide-height-offset: ${activeSliderHeight - normalSliderHeight}px`;
		},
		setSlideHeight(event) {
			const slider = event.hostEl;
			slider.style.height = '';
			const activeSlider = slider.querySelector('.swiper-slide-active');
			slider.style.height = `${activeSlider.offsetHeight}px`;
		},
		sliderReset(event) {
			const slider = event.hostEl;
			slider.style.height = '';
		},

		sliderResize(event) {
			if (window.innerWidth > 767.98) {
				this.setSlideHeight(event);
				this.setSlidesHeightOffset(event);
				this.setSlidesWidth(event);
			} else {
				this.sliderReset(event);
			}
		},

		swiperInit() {
			const swiper = new Swiper(this.$refs.slider, {
				loop: true,
				parallax: true,
				speed: 800,
				modules: [Navigation, Pagination, Parallax],

				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},

				navigation: {
					nextEl: '.slider__arrow-next',
					prevEl: '.slider__arrow-prev',
				},

				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 8,
					},
					479.98: {
						slidesPerView: 2,
						spaceBetween: 16,
					},
					620: {
						slidesPerView: 3,
						spaceBetween: 16,
					},
					767.98: {
						spaceBetween: 24,
						slidesPerView: 2,
					},
				},

				on: {
					resize: (event) => {
						this.sliderResize(event);
					},
				},
			});
		},
	},
	mounted() {
		this.swiperInit();
	},
};
</script>

<style lang="scss" scoped>
.section {
	@include adaptiveValue('padding-top', 44, 16, 0, 1920, 568);
	@include adaptiveValue('padding-bottom', 44, 16, 0, 1920, 568);
	background-color: color('grey-8');

	&__container {
	}

	&__body {
		@media (min-width: $mobile) {
			display: grid;
			grid-template-columns: 34% 1fr;
			@include adaptiveValue('gap', 42, 24, 0, 1920, 568);
			align-items: center;
		}
	}

	&__text-wrapper {
		position: relative;
		z-index: 1;

		@media (max-width: $mobile) {
			display: flex;
			flex-direction: column;
			align-items: center;

			&:not(:last-child) {
				margin-bottom: rem(24);
			}
		}
	}

	&__title {
		@media (max-width: $mobile) {
			text-align: center;
		}

		&:not(:last-child) {
			margin-bottom: rem(8);
		}
	}

	&__text {
		@media (max-width: $mobile) {
			text-align: center;
		}

		color: color('grey-2');
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 568);
		font-weight: 500;
		line-height: 150%;

		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 26, 18, 0, 1920, 568);
		}
	}

	&__button {
		padding: rem(12) rem(36) !important;
	}

	&__slider {
	}
}
.slider {
	position: relative;
	z-index: 0;
	overflow: visible;
	min-width: 0;
	width: 100%;

	@media (min-width: $mobile) {
		&::before {
			content: '';
			position: absolute;
			z-index: 2;
			top: 0;
			right: 100%;
			width: 100vw;
			height: 100%;
			background-color: color('grey-8');
			transform: scaleY(1.02);
		}
	}

	&__arrow-next {
	}

	.swiper-pagination {
		position: relative;
		z-index: 2;

		@media (min-width: $mobile) {
			position: absolute;
			left: calc(var(--slide-width) + rem(24));
			bottom: calc(var(--slide-height-offset) / 2);
			transform: translateY(50%);
		}

		@media (max-width: $mobile) {
			position: static;
			justify-content: center;
		}
	}
}

.swiper-wrapper {
	@media (max-width: $mobile) {
		&:not(:last-child) {
			margin-bottom: rem(16);
		}
	}
}

.swiper-navigation {
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 0;
	@media (min-width: $pc) {
		transform: translateY(-50%) translateX(rem(-24));
		width: calc(100% + rem(48));
	}
	@media (max-width: $pc) {
		width: calc(100% - rem(48));
		transform: translateY(-50%) translateX(rem(24));
	}
	pointer-events: none;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: $mobileSmall) {
		display: none;
	}

	.slider-arrow {
		pointer-events: auto;
	}
}
.slide {
	@media (min-width: $mobile) {
		&.swiper-slide-active {
			.slide__body {
				aspect-ratio: 404 / 620;
			}
		}
	}

	&__body {
		position: relative;
		width: 100%;
		aspect-ratio: 372 / 486;
		transition: aspect-ratio 0.3s cubic-bezier(0.03, 0.71, 0.45, 0.95);
	}

	&__image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	&__content {
		position: absolute;
		@include adaptiveValue('left', 24, 0, 0, 1920, 991);
		@include adaptiveValue('bottom', 24, 0, 0, 1920, 991);
		background-color: color('white', 0.72);
		backdrop-filter: blur(1.5px);
		widows: 100%;

		@media (max-width: $mobile) {
			left: rem(6);
			bottom: rem(6);
		}

		@include adaptiveValue('padding-top', 32, 16, 0, 1920, 568);
		@include adaptiveValue('padding-bottom', 32, 16, 0, 1920, 568);
		@include adaptiveValue('padding-left', 32, 16, 0, 1920, 568);
		@include adaptiveValue('padding-right', 16, 8, 0, 1920, 568);
	}

	&__text-wrapper {
	}

	&__top {
		display: flex;
		align-items: center;
		gap: rem(8);

		@media (max-width: $mobile) and (min-width: $mobileSmall) {
			display: block;
		}

		&:not(:last-child) {
			margin-bottom: rem(8);
		}
	}

	&__number {
		color: color('grey-2');
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 991);
		font-weight: 500;
		line-height: 150%;

		@media (max-width: $mobile) and (min-width: $mobileSmall) {
			display: none;
		}
	}

	&__sep {
		flex: 0 0 rem(28);
		width: 100%;
		height: rem(1);
		background-color: color('grey-2');

		@media (max-width: $mobile) and (min-width: $mobileSmall) {
			display: none;
		}
	}

	&__category {
		color: color('grey-2');
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 991);
		font-weight: 500;
		line-height: 150%;
	}

	&__name {
		color: color('grey-1');
		@include adaptiveValue('font-size', 28, 22, 0, 1920, 991);
		font-weight: 600;
		line-height: 120%;

		@media (max-width: $mobile) {
			font-size: rem(16);
		}

		@media (max-width: $mobileSmall) {
			font-size: rem(24);
		}
	}

	&__link {
		position: absolute;
		bottom: 0;
		left: 100%;
		background-color: color('primary');
		@include adaptiveValue('width', 48, 36, 0, 1920, 991);
		aspect-ratio: 1;
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			stroke: color('white');
		}
	}
}
</style>
