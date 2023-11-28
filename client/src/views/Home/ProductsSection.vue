<template>
	<section class="section section-gutter">
		<div class="section__container container">
			<div class="section__body">
				<SectionTitle class="section__title" type="h2">Our Products</SectionTitle>
				<div class="section__products">
					<ProductList :products="products" />
				</div>
				<div class="section__actions">
					<Button class="section__show-more" type="secondary" :border="true">Show More</Button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import ProductList from '@/components/ProductList';

export default {
	components: {
		ProductList,
	},
	data() {
		return {
			products: [
				{
					imageName: '01.jpg',
					title: 'Syltherine',
					description: 'Stylish cafe chair',
					price: '3500000',
				},
				{
					imageName: '02.jpg',
					title: 'Syltherine',
					description: 'Stylish cafe chair',
					labels: [
						{
							type: 'new',
							value: 'new',
						},
					],
					price: '3500000',
				},
				{
					imageName: '03.jpg',
					title: 'Syltherine',
					description: 'Stylish cafe chair',
					labels: [
						{
							type: 'discount',
							value: '30',
						},
					],
					price: '3500000',
				},
				{
					imageName: '04.jpg',
					title: 'Syltherine',
					description: 'Stylish cafe chair',
					price: '3500000',
					labels: [
						{
							type: 'new',
							value: 'new',
						},
						{
							type: 'discount',
							value: '30',
						},
					],
				},
				{
					imageName: '01.jpg',
					title: 'Syltherine',
					description: 'Stylish cafe chair',
					price: '3500000',
				},
				{
					imageName: '02.jpg',
					title: 'Syltherine',
					description: 'Stylish cafe chair',
					labels: [
						{
							type: 'new',
							value: 'new',
						},
					],
					price: '3500000',
				},
				{
					imageName: '03.jpg',
					title: 'Syltherine',
					description: 'Stylish cafe chair',
					labels: [
						{
							type: 'discount',
							value: '30',
						},
					],
					price: '3500000',
				},
				{
					imageName: '04.jpg',
					title: 'Syltherine',
					description: 'Stylish cafe chair',
					price: '3500000',
					labels: [
						{
							type: 'new',
							value: 'new',
						},
						{
							type: 'discount',
							value: '30',
						},
					],
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
.section {
	&__container {
	}

	&__body {
	}

	&__title {
		text-align: center;

		&:not(:last-child) {
			@include adaptiveValue('margin-bottom', 32, 24, 0, 1920, 568);
		}
	}

	&__products {
		&:not(:last-child) {
			@include adaptiveValue("margin-bottom", 32, 24, 0, 1920, 568);
		}
	}

	&__actions {
		display: flex;
		justify-content: center;
	}

	&__show-more {
		@include adaptiveValue('min-width', 245, 160, 0, 1920, 568);
	}
}
</style>
