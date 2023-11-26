<template>
	<div class="wrapper">
		<Header />
		<main class="main">
			<router-view />
		</main>
		<Footer />
	</div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style lang="scss" scoped>
.main {
	padding-top: var(--header-height);
}
</style>
