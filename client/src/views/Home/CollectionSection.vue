<template>
	<section class="section section-gutter">
		<div class="section__body">
			<div class="section__text-wrapper">
				<div class="section__sub-title">Share your setup with</div>
				<SectionTitle class="section__title" type="h2">#FuniroFurniture</SectionTitle>
			</div>
			<div class="section__content" v-parallax="0.01" ref="gallery">
				<div class="section__items" data-items>
					<div class="section__column" data-column>
						<div class="section__row row row--left-top">
							<button v-for="image in items.leftTop">
								<img
									data-fancybox="gallery"
									:src="require(`@/assets/img/home/collection/${image.imageName}`)"
									alt="gallery-image" />
							</button>
						</div>
						<div class="section__row row row--left-bottom">
							<button v-for="image in items.leftBottom">
								<img
									data-fancybox="gallery"
									:src="require(`@/assets/img/home/collection/${image.imageName}`)"
									alt="gallery-image" />
							</button>
						</div>
					</div>
					<div class="section__column" data-column>
						<div class="section__row row row--left-center">
							<button v-for="image in items.center">
								<img
									data-fancybox="gallery"
									:src="require(`@/assets/img/home/collection/${image.imageName}`)"
									alt="gallery-image" />
							</button>
						</div>
					</div>
					<div class="section__column" data-column>
						<div class="section__row row row--right-top">
							<button v-for="image in items.rightTop">
								<img
									data-fancybox="gallery"
									:src="require(`@/assets/img/home/collection/${image.imageName}`)"
									alt="gallery-image" />
							</button>
						</div>
						<div class="section__row row row--right-bottom">
							<button v-for="image in items.rightBottom">
								<img
									data-fancybox="gallery"
									:src="require(`@/assets/img/home/collection/${image.imageName}`)"
									alt="gallery-image" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default {
	data() {
		return {
			items: {
				leftTop: [
					{ imageName: 'left-top--01.jpg' },
					{ imageName: 'left-top--02.jpg' },
					{ imageName: 'left-top--01.jpg' },
					{ imageName: 'left-top--02.jpg' },
				],
				leftBottom: [
					{ imageName: 'left-bottom--01.jpg' },
					{ imageName: 'left-bottom--02.jpg' },
					{ imageName: 'left-bottom--01.jpg' },
					{ imageName: 'left-bottom--02.jpg' },
				],
				center: [{ imageName: 'center.jpg' }],
				rightTop: [
					{ imageName: 'right-top--01.jpg' },
					{ imageName: 'right-top--02.jpg' },
					{ imageName: 'right-top--01.jpg' },
					{ imageName: 'right-top--02.jpg' },
				],
				rightBottom: [
					{ imageName: 'right-bottom--01.jpg' },
					{ imageName: 'right-bottom--02.jpg' },
					{ imageName: 'right-bottom--01.jpg' },
					{ imageName: 'right-bottom--02.jpg' },
				],
			},
		};
	},
	mounted() {
		Fancybox.bind('[data-fancybox]', {});
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
		display: flex;
		flex-direction: column;
		gap: rem(8);
		align-items: center;

		&:not(:last-child) {
			margin-bottom: rem(16);
		}
	}

	&__sub-title {
		color: color('grey-2');
		@include adaptiveValue('font-size', 20, 16, 0, 1920, 568);
		font-weight: 600;
		line-height: 150%;
	}

	&__title {
	}

	&__content {
		position: relative;
		@media (any-hover: none) {
			overflow: auto;
		}
	}

	&__items {
		display: grid;
		grid-template-columns: auto;
		grid-auto-flow: column;
		align-items: center;
		@include adaptiveValue('gap', 16, 8, 0, 1920, 568);

		@media (any-hover: hover) {
			justify-content: center;
		}
	}

	&__column {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		@include adaptiveValue('gap', 16, 8, 0, 1920, 568);

		@media (any-hover: hover) {
			&:first-child {
				justify-content: flex-end;
			}
		}
	}

	&__row {
		display: inline-grid;
		@include adaptiveValue('gap', 16, 8, 0, 1920, 568);
		grid-template-columns: auto;
		grid-auto-flow: column;
	}
}
.row {
	&--left-top {
		justify-content: flex-end;
		align-items: flex-end;
	}

	&--left-bototm {
		justify-content: flex-end;
		align-items: flex-start;
	}

	&--center {
		display: block;
	}

	&--right-top {
		align-items: flex-end;
	}

	&--right-bottom {
		align-items: flex-start;
	}

	button {
		&:hover {
			img {
				transform: scale(1.06);
			}
		}

		img {
			max-width: unset;
			transition: transform 0.3s ease;
		}
	}
}
</style>
