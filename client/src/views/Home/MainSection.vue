<script setup>
import { Parallax, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/parallax';
</script>

<template>
	<section class="section">
		<div class="section__body">
			<swiper
				:slides-per-view="1"
				:loop="true"
				:speed="1200"
				grab-cursor
				parallax
				:modules="[Parallax, Autoplay]">
				<swiper-slide class="slide" v-for="slide in slides">
					<div class="slide__body">
						<div class="slide__content">
							<div
								class="slide__content-inner"
								data-swiper-parallax-opacity="0.5"
								data-swiper-parallax-x="-50%">
								<div class="slide__sub-title" data-swiper-parallax-x="-4%">{{ slide.subTitle }}</div>
								<div class="slide__title" data-swiper-parallax-x="-8%">{{ slide.title }}</div>
								<div class="slide__text" data-swiper-parallax-x="-12%">{{ slide.text }}</div>
								<Button class="slide__button" data-swiper-parallax-x="-16%">BUY Now</Button>
							</div>
						</div>
						<div class="slide__background ibg">
							<img
								:src="require(`@/assets/img/home/main-section/${slide.imageName}`)"
								alt="slide-background" />
						</div>
					</div>
				</swiper-slide>
			</swiper>
		</div>
	</section>
</template>

<script>
export default {
	data() {
		return {
			slides: [
				{
					imageName: 'slide-01.png',
					subTitle: 'New Arrival',
					title: 'Discover Our New Collection',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
				},
				{
					imageName: 'slide-01.png',
					subTitle: 'New Arrival',
					title: 'Discover Our New Collection',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
				},
				{
					imageName: 'slide-01.png',
					subTitle: 'New Arrival',
					title: 'Discover Our New Collection',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.section {
	&__body {
		position: relative;
	}
}
.slide {
	&__body {
		position: relative;
		height: calc(100dvh - var(--header-height));
	}

	&__content {
		@media (max-width: $mobile) {
			position: relative;
			z-index: 2;
			height: 100%;

			display: flex;
			justify-content: center;
			align-items: center;
		}
	}

	&__content-inner {
		@media (min-width: $mobile) {
			position: absolute;
			@include adaptiveValue('right', 58, 16, 0, 1920, 568);
			@include adaptiveValue('bottom', 118, 36, 0, 1920, 568);
			z-index: 2;
		}

		background-color: color('orange-2');
		border-radius: rem(10);

		@include adaptiveValue('padding-top', 62, 36, 0, 1920, 568);
		@include adaptiveValue('padding-left', 42, 24, 0, 1920, 568);
		@include adaptiveValue('padding-right', 42, 24, 0, 1920, 568);
		@include adaptiveValue('padding-bottom', 38, 16, 0, 1920, 568);
		@include adaptiveValue('max-width', 644, 460, 0, 1920, 568);
	}

	&__sub-title {
		color: color('font-color-1');
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 568);
		font-weight: 600;
		line-height: normal;
		letter-spacing: rem(3);

		&:not(:last-child) {
			margin-bottom: rem(4);
		}
	}

	&__title {
		color: color('primary');
		@include adaptiveValue('font-size', 52, 36, 0, 1920, 568);
		font-weight: 700;
		line-height: 125%;

		&:not(:last-child) {
			margin-bottom: rem(18);
		}
	}

	&__text {
		color: color('font-size-1');
		@include adaptiveValue('font-size', 18, 16, 0, 1920, 568);
		font-weight: 500;
		line-height: 133%;

		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 46, 24, 0, 1920, 568);
		}
	}

	&__button {
		@include adaptiveValue('min-width', 222, 180, 0, 1920, 568);
	}

	&__background {
		position: absolute;
		z-index: 1;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
}
</style>
