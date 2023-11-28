<template>
	<button class="button" :class="{ primary: type === 'primary', secondary: type === 'secondary', border: border }">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		type: {
			type: String,
			default: 'primary',
		},
		border: {
			type: Boolean,
			default: false,
		},
	},
};
</script>

<style lang="scss" scoped>
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 rem(24);
	transition: color 0.3s ease, background-color 0.3s ease;

	@include adaptiveValue('font-size', 16, 14, 0, 1920, 320);

	&.primary {
		background-color: color('primary');
		@include adaptiveValue('padding-top', 25, 12, 0, 1920, 320);
		@include adaptiveValue('padding-bottom', 25, 12, 0, 1920, 320);

		color: color('white');
		font-weight: 700;
		line-height: normal;

		&:hover {
			color: color('black', 0.4);
			background-color: color('orange-hover', 0.8);
		}
	}

	&.secondary {
		background-color: color('white');
		@include adaptiveValue('padding-top', 12, 8, 0, 1920, 320);
		@include adaptiveValue('padding-bottom', 12, 8, 0, 1920, 320);

		color: color('primary');
		font-weight: 600;
		line-height: 150%;

		&:hover {
			color: color('white');
			background-color: color('primary');
		}

		&.border {
			border: rem(1) solid color('primary');
		}
	}
}
</style>
