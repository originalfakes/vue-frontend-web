import VueCookies from 'vue-cookies';
import * as TYPES from './mutation_types';

const mutations = {
    [TYPES.SET_LANG](state, val) {
        state.curLang = val;
        VueCookies.set('lang', val);
    },
    [TYPES.SET_LOGIN_STATUS](state, val) {
        state.isLogin = val;
    },
    [TYPES.SET_USER_INFO](state, val) {
        state.userInfo = val;
    },
    [TYPES.SET_USERNAME](state, val) {
        state.registerAccount = val;
    },
    [TYPES.SET_NAVBAR_LIST](state, val) {
        state.navbarList = val;
    },
};

export default mutations;
