<template>
	<h1 v-if="type === 'h1'" class="title-h1"><slot></slot></h1>
	<h2 v-else-if="type === 'h2'" class="title-h2"><slot></slot></h2>
	<h3 v-else-if="type === 'h3'" class="title-h3"><slot></slot></h3>
</template>

<script>
export default {
	name: 'SectionTitle',
	props: {
		type: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.title-h1 {
	color: color('black');
	@include adaptiveValue('font-size', 48, 32, 0, 1920, 568);
	font-weight: 500;
	line-height: normal;
}
.title-h2 {
	color: color('grey-1');
	@include adaptiveValue('font-size', 40, 24, 0, 1920, 568);
	font-weight: 700;
	line-height: 120%;
}
.title-h3 {
	color: color('font-color-1');
	@include adaptiveValue('font-size', 32, 18, 0, 1920, 568);
	font-weight: 700;
	line-height: normal;
}
</style>
