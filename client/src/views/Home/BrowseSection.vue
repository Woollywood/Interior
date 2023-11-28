<script setup>
import { Autoplay } from 'swiper/modules';
</script>

<template>
	<section class="section section-gutter">
		<div class="section__container container">
			<div class="section__body">
				<div class="section__text-wrapper">
					<SectionTitle class="section__title" type="h3">Browse The Range</SectionTitle>
					<p class="section__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
				<div class="section__content">
					<swiper
						:slides-per-view="slidesPerView"
						:space-between="20"
						:loop="true"
						:autoplay="{ delay: 3000 }"
						:speed="800"
						grab-cursor
						:modules="[Autoplay]">
						<swiper-slide class="slide" v-for="range in ranges">
							<router-link class="slide__body" to="/shop">
								<div class="slide__content">
									<div class="slide__background ibg">
										<img
											:src="require(`@/assets/img/home/browse-section/${range.imageName}`)"
											alt="content-image" />
									</div>
								</div>
								<div class="slide__title">{{ range.title }}</div>
							</router-link>
						</swiper-slide>
					</swiper>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { tablet, mobile, mobileSmall } from '@/constants/breakpoints';

export default {
	data() {
		return {
			ranges: [
				{
					imageName: '01.jpg',
					title: 'Dining',
				},
				{
					imageName: '02.jpg',
					title: 'Living',
				},
				{
					imageName: '03.jpg',
					title: 'Bedroom',
				},
				{
					imageName: '03.jpg',
					title: 'Bedroom',
				},
			],
			slidesPerView: 3,
		};
	},
	methods: {
		getSlidesPerView() {
			if (window.innerWidth > mobile) {
				return 3;
			} else if (window.innerWidth > mobileSmall) {
				return 2;
			} else {
				return 1;
			}
		},
		setSlidesPerView() {
			this.slidesPerView = this.getSlidesPerView();
		},
	},
	mounted() {
		this.setSlidesPerView();
		window.addEventListener('resize', this.setSlidesPerView);
	},
	unmounted() {
		window.removeEventListener('resize', this.setSlidesPerView);
	},
};
</script>

<style lang="scss" scoped>
.section {
	&__container {
	}

	&__body {
	}

	&__text-wrapper {
		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 62, 28, 0, 1920, 568);
		}
	}

	&__title {
		text-align: center;
	}

	&__text {
		text-align: center;
		color: color('font-color-2');
		@include adaptiveValue('font-size', 20, 16, 0, 1920, 568);
		line-height: normal;
	}

	&__content {
	}
}
.slide {
	&__body {
	}

	&__content {
		position: relative;
		width: 100%;
		aspect-ratio: 380 / 480;
		border-radius: rem(10);
		overflow: hidden;
		background-color: color('white-2');

		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 30, 16, 0, 1920, 568);
		}
	}

	&__background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;

		img {
			transition: transform 1.2s ease;
		}

		&:hover {
			img {
				transform: scale(1.2);
			}
		}
	}

	&__title {
		text-align: center;
		color: color('font-color-1');
		@include adaptiveValue('font-size', 24, 16, 0, 1920, 568);
		font-weight: 600;
		line-height: normal;
	}
}
</style>
