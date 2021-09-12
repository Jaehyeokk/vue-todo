import Vue from 'vue';
import App from '@/App.vue';
import { store } from '@/store';
import VueMoment from 'vue-moment';
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en';

Vue.use(VueMoment);
Vue.use(ElementUI, { locale });

Vue.config.productionTip = false;

new Vue({
	store,
	render: h => h(App),
}).$mount('#app');
