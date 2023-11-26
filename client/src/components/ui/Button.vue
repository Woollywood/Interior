<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
};
</script>

<style lang="scss" scoped>
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: color('primary');
	padding: 0 rem(24);
	@include adaptiveValue('padding-top', 25, 12, 0, 1920, 320);
	@include adaptiveValue('padding-bottom', 25, 12, 0, 1920, 320);
	transition: color 0.3s ease, background-color 0.3s ease;

	color: color('white');
	@include adaptiveValue('font-size', 16, 14, 0, 1920, 320);
	font-weight: 700;
	line-height: normal;

	&:hover {
		color: color('black', 0.4);
		background-color: color('orange-hover', 0.8);
	}
}
</style>
