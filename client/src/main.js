import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/store';

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/parallax';

import components from '@/components/ui';
import directives from '@/directives';

import '@/assets/styles/index.scss';

const app = createApp(App);

app.component(Swiper.name, Swiper)
app.component(SwiperSlide.name, SwiperSlide)

components.forEach((component) => app.component(component.name, component));
directives.forEach((directive) => app.directive(directive.name, directive));
app.use(store).use(router).mount('#app');
