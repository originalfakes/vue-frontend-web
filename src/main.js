import Vue from 'vue';
import VueCookies from 'vue-cookies';
import i18n from './lib/i18n';
import App from './App.vue';
import router from './router';
import store from './store'
import Notifications from 'vue-notification';
import { globalFunc } from '@/lib/globalFunc';


Vue.use(i18n);
Vue.use(VueCookies);
Vue.use(Notifications);
Vue.mixin(globalFunc);

import './scss/mixin.scss';

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');

// router載入完畢後，移除loading圖
router.afterEach(() => {
    document.getElementById('main-loading').style.display = 'none';
});
