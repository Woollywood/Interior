<template>
	<div class="home">
		<MainSection />
		<BrowseSection />
		<ProductsSection />
		<InspirationSection />
	</div>
</template>

<script>
import MainSection from '@/views/Home/MainSection';
import BrowseSection from '@/views/Home/BrowseSection';
import ProductsSection from '@/views/Home/ProductsSection';
import InspirationSection from '@/views/Home/InspirationSection';

export default {
	components: {
		MainSection,
		BrowseSection,
		ProductsSection,
		InspirationSection,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
