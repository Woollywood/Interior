<script setup>
import { computed, defineAsyncComponent } from 'vue';

const props = defineProps({
	name: {
		type: String,
		required: true,
	},

	height: {
		type: [String, Number],
		required: true,
	},

	width: {
		type: [String, Number],
		required: true,
	},
});

const className = computed(() => {
	return 'svg-icon svg-icon--' + props.name;
});

const iconWidth = computed(() => {
	return props.width + 'px';
});

const iconHeight = computed(() => {
	return props.height + 'px';
});

const icon = defineAsyncComponent(() => import(`@/assets/components/ui/icons/${props.name}`));
</script>

<template>
	<component :is="icon" :class="className" :width="iconWidth" :height="iconHeight"></component>
</template>

<script>
export default {
	name: 'SvgIcon',
};
</script>
