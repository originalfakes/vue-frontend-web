import VueCookies from 'vue-cookies';

const state = {
    curLang: VueCookies.get('lang') || 'zh-cn',
    isLogin: '',
    userInfo: {},
    registerAccount: '',
    navbarList: {},
};

export default state;
