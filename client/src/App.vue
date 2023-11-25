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
import Header from '@/assets/components/Header.vue';
import Footer from '@/assets/components/Footer.vue';

export default {
	components: {
		Header,
		Footer,
	},
};
</script>

<style lang="scss"></style>
