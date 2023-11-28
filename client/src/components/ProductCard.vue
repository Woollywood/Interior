<script setup>
import { formattedPrice } from '@/api';
</script>

<template>
	<div class="product-card">
		<div class="product-card__image-wrapper">
			<div class="product-card__image ibg">
				<img :src="require(`@/assets/img/products/${product.imageName}`)" alt="product-image" />
			</div>
			<div v-if="product.labels" class="product-card__labels">
				<div
					v-for="label in product.labels"
					class="product-card__label"
					:class="{ discount: label.type === 'discount', new: label.type === 'new' }">
					{{ label.type === 'new' ? label.value : -label.value + '%' }}
				</div>
			</div>
		</div>
		<div class="product-card__text-wrapper">
			<div class="product-card__title">{{ product.title }}</div>
			<div class="product-card__description">{{ product.description }}</div>
			<div v-if="!hasDiscount" class="product-card__price-wrapper">
				<div class="product-card__price">{{ `Rp ${getPrice}` }}</div>
			</div>
			<div v-else class="product-card__price-wrapper">
				<div class="product-card__price">{{ `Rp ${getDiscountPrice}` }}</div>
				<div v-if="hasDiscount" class="product-card__old-price">{{ `Rp ${getPrice}` }}</div>
			</div>

			<div class="product-card__hover-wrapper">
				<div class="product-card__hover-inner">
					<Button class="product-card__add-button" type="secondary">Add to cart</Button>
					<div class="product-card__actions">
						<button class="product-card__action">
							<div class="product-card__action-icon">
								<SvgIcon class="fill" name="Share" width="16" height="16" />
							</div>
							<div class="product-card__action-text">Share</div>
						</button>
						<button class="product-card__action">
							<div class="product-card__action-icon">
								<SvgIcon class="fill" name="Compare" width="16" height="16" />
							</div>
							<div class="product-card__action-text">Compare</div>
						</button>
						<button class="product-card__action">
							<div class="product-card__action-icon">
								<SvgIcon class="stroke" name="Favorite" width="16" height="16" />
							</div>
							<div class="product-card__action-text">Like</div>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		product: {
			type: Object,
			required: true,
		},
	},
	computed: {
		hasDiscount() {
			return this.product.labels?.find((label) => label.type === 'discount');
		},
		getDiscount() {
			return this.product.labels?.find((label) => label.type === 'discount');
		},
		getPrice() {
			return formattedPrice(this.product.price);
		},
		getDiscountPrice() {
			return formattedPrice(this.product.price * (1 - this.getDiscount.value / 100));
		},
	},
};
</script>

<style lang="scss" scoped>
.product-card {
	position: relative;
	background-color: color('light-bg');

	@media (hover: hover) {
		&:hover {
			.product-card__hover-wrapper {
				opacity: 1;
				visibility: visible;
			}
		}
	}

	&__image-wrapper {
		position: relative;
		width: 100%;
		aspect-ratio: 285 / 300;
	}

	&__image {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}

	&__labels {
		position: absolute;
		@include adaptiveValue('top', 24, 16, 0, 1920, 568);
		@include adaptiveValue('right', 24, 16, 0, 1920, 568);

		display: flex;
		align-items: center;
		gap: rem(16);
	}

	&__label {
		@include adaptiveValue('width', 48, 56, 0, 1920, 568);
		aspect-ratio: 1;

		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 50%;
		overflow: hidden;

		color: color('white');
		@include adaptiveValue('font-size', 16, 18, 0, 1920, 568);
		font-weight: 500;
		line-height: 150%;
		white-space: nowrap;

		&.new {
			background-color: color('green-accents');
		}

		&.discount {
			background-color: color('red-accents');
		}
	}

	&__text-wrapper {
		@include adaptiveValue('padding', 16, 8, 0, 1920, 568);
	}

	&__title {
		color: color('grey-1');
		@include adaptiveValue('font-size', 24, 20, 1920, 568);
		font-weight: 600;
		line-height: 120%;

		&:not(:last-child) {
			margin-bottom: rem(8);
		}
	}

	&__description {
		color: color('grey-3');
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 568);
		font-weight: 500;
		line-height: 150%;

		&:not(:last-child) {
			margin-bottom: rem(8);
		}
	}

	&__price-wrapper {
		display: flex;
		flex-wrap: wrap;
		column-gap: rem(16);
		row-gap: rem(4);
		justify-content: space-between;
		align-items: center;

		&:not(:last-child) {
			margin-bottom: rem(16);
		}
	}

	&__price {
		color: color('grey-1');
		@include adaptiveValue('font-size', 20, 18, 0, 1920, 568);
		font-weight: 600;
		line-height: 150%;
	}

	&__old-price {
		color: color('grey-4');
		@include adaptiveValue('font-size', 16, 14, 0, 1920, 568);
		line-height: 150%;
		text-decoration: line-through;
	}

	&__hover-wrapper {
		@media (hover: hover) {
			position: absolute;
			z-index: 1;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-color: color('grey-1', 0.72);

			display: flex;
			justify-content: center;
			align-items: center;

			opacity: 0;
			visibility: hidden;
			transition: opacity 0.3s ease;
		}
	}

	&__hover-inner {
		display: flex;
		flex-direction: column;
		align-items: center;
		@include adaptiveValue('gap', 24, 16, 0, 1920, 568);
	}

	&__add-button {
		@media (hover: hover) {
			@include adaptiveValue('min-width', 200, 160, 0, 1920, 568);
		}

		@media (hover: none) {
			width: 100%;
			@include adaptiveValue('height', 72, 50, 0, 1920, 568);
			border: rem(1) solid color('primary');
		}
	}

	&__actions {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		@include adaptiveValue('column-gap', 20, 16, 0, 1920, 568);
		row-gap: rem(8);

		@media (hover: none) {
			width: 100%;
			justify-content: space-around;
		}
	}

	&__action {
		display: flex;
		align-items: center;
		gap: rem(2);

		@media (hover: hover) {
			&:hover {
				.product-card__action-text {
					color: color('primary');
				}

				.product-card__action-icon {
					svg {
						&.fill {
							fill: color('primary');
						}

						&.stroke {
							stroke: color('primary');
						}
					}
				}
			}
		}
	}

	&__action-icon {
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			@media (hover: hover) {
				&.fill {
					fill: color('white');
					transition: fill 0.3s ease;
				}

				&.stroke {
					stroke: color('white');
					transition: stroke 0.3s ease;
				}
			}

			@media (hover: none) {
				&.fill {
					fill: color('grey-3');
				}

				&.stroke {
					stroke: color('grey-3');
				}
			}

			@media (max-width: $tablet) {
				width: rem(32);
				height: rem(32);
			}

			@media (max-width: $mobileSmall) {
				width: rem(24);
				height: rem(24);
			}
		}
	}

	&__action-text {
		@media (max-width: $tablet) {
			display: none;
		}

		@media (hover: hover) {
			color: color('white');
		}

		@media (hover: none) {
			color: color('grey-3');
		}

		@include adaptiveValue('font-size', 16, 14, 0, 1920, 568);
		font-weight: 600;
		line-height: 150%;
		transition: color 0.3s ease;
	}
}
</style>
