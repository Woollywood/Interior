<template>
	<div class="slider-arrow" :class="{ sliderArrowNext: type === 'next', sliderArrowPrev: type === 'prev' }">
		<SvgIcon name="ArrowRight" width="24" height="24" />
	</div>
</template>

<script>
export default {
	name: 'SliderArrow',
	props: {
		type: {
			type: String,
			required: true,
		},
	},
};
</script>

<style lang="scss" scoped>
.slider-arrow {
	display: flex;
	justify-content: center;
	align-items: center;
	width: rem(48);
	height: rem(48);
	border-radius: 50%;
	background-color: color('white');
	filter: drop-shadow(0px 4px 14px color('black', 0.16));
	cursor: pointer;
	transition: transform 0.3s ease;

	&:hover {
		transform: scale(1.2);
	}

	&.sliderArrowPrev {
		svg {
			transform: rotate(180deg);
		}
	}

	svg {
		stroke: color('primary');
	}
}
</style>
