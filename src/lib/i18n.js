import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueCookies from 'vue-cookies';

// 自訂語言檔
import tw from '../locale/zh-tw.json';
import cn from '../locale/zh-cn.json';
import en from '../locale/en.json';

// 使用插件
Vue.use(VueI18n);

let curLang;

// 取得預設語系
if (!VueCookies.get('lang')) {
    const language = navigator.language.toLowerCase() || navigator.browserLanguage.toLowerCase();
    if (language === 'zh-tw') {
        curLang = 'zh-tw'
    } else if (language === 'zh-cn') {
        curLang = 'zh-cn';
    } else {
        curLang = 'en'
    }

    VueCookies.set('lang', curLang);
}

const locale = VueCookies.get('lang') || curLang;

// 建立 VueI18n 實體
const i18n = new VueI18n({
    locale,
    messages: {
        en,
        'zh-tw': tw,
        'zh-cn': cn,
    },
});

export default i18n;
