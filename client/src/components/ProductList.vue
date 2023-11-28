<template>
	<div class="product-list">
		<ProductCard v-for="product in products" :product="product" />
	</div>
</template>

<script>
import ProductCard from '@/components/ProductCard';

export default {
	components: {
		ProductCard,
	},
	props: {
		products: {
			type: Array,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.product-list {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	@include adaptiveValue('gap', 32, 16, 0, 1920, 568);

	@media (max-width: $tablet) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: $mobile) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: $mobileSmall) {
		grid-template-columns: 1fr;
	}
}
</style>
