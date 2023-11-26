<template>
	<div class="input-wrapper">
		<input :type="type" :placeholder="placeholder" v-model="inputValue" />
	</div>
</template>

<script>
export default {
	name: 'FeedbackInput',
	props: {
		placeholder: {
			type: String,
			default: '',
		},

		type: {
			type: String,
			default: 'text',
		},
	},
	data() {
		return {
			inputValue: '',
		};
	},
};
</script>

<style lang="scss" scoped>
.input-wrapper {
	input {
		color: color('black');
		font-size: rem(14);
		width: 100%;
		padding-bottom: rem(3);
		border-bottom: rem(1) solid color('black');
		transition: border 0.3s ease;

		&::placeholder {
			color: color('grey-6');
			font-size: rem(14);
			line-height: normal;
		}

		&:hover {
			border-bottom: rem(1) solid color('primary');
		}
	}
}
</style>
