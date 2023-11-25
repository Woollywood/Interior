<template>
	<button class="button">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'FeedbackButton',
};
</script>

<style lang="scss" scoped>
.button {
	display: inline-flex;
	color: color('black');
	font-size: rem(14);
	text-transform: uppercase;
	width: 100%;
	padding-bottom: rem(3);
	border-bottom: rem(1) solid color('black');
	transition: color 0.3s ease, border 0.3s ease;

	&:hover {
		color: color('primary');
		border-bottom: rem(1) solid color('primary');
	}
}
</style>
