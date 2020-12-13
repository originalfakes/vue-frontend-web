import VueCookies from 'vue-cookies';
// import * as apiUrl from '../config/api';
import ajax from '../lib/ajax';

export default ({
    // login(args) {
    //     return ajax({
    //         method: 'post',
    //         url: '/api/login',
    //         errorAlert: false,
    //         // headers: {
    //         //     'Content-Type': 'application/json',
    //         // },
    //         ...args,
    //     });
    // },
    // 取得輪播圖
    getAdSlider(args) {
        return ajax({
            method: 'get',
            url: '/apiw/adslider',
            errorAlert: false,
            ...args,
        });
    },
    // 取得公告
    getNews(args) {
        return ajax({
            method: 'get',
            url: '/api/public/announcement',
            errorAlert: false,
            ...args,
        })
    },
    // 取得跑馬燈
    getMarquee(args) {
        return ajax({
            method: 'get',
            url: '/api/public/marquee',
            errorAlert: false,
            ...args,
        });
    },
    // 文案頁資訊
    getCopywrittingInfo(args) {
        return ajax({
            method: 'get',
            url: '/apiw/template/page',
            errorAlert: false,
            ...args,
        });
    },
    // 登入
    login(args) {
        return ajax({
            method: 'post',
            url: '/api/public/login',
            errorAlert: false,
            ...args,
        });
    },
    // 登入狀態檢查
    checkToken(args) {
        const token = VueCookies.get('token') || '';
        return ajax({
            method: 'get',
            url: '/api/public/auth',
            errorAlert: false,
            headers: {
                Authorization: token,
            },
            ...args,
        });
    },
    logout(args) {
        const token = VueCookies.get('token');
        return ajax({
            method: 'post',
            url: '/api/public/logout',
            errorAlert: false,
            headers: {
                Authorization: token,
            },
            ...args,
        });
    },
    // 註冊
    register(args) {
        return ajax({
            method: 'post',
            url: '/api/public/register',
            errorAlert: false,
            ...args,
        });
    },
    // 導覽列
    getNavbarList(args) {
        return ajax({
            method: 'get',
            url: '/api/public/site-menu',
            errorAlert: false,
            ...args,
        });
    },
    // 取得客服QRCODE
    getQrcode(args) {
        return ajax({
            method: 'get',
            url: '/api/public/qrcode',
            errorAlert: false,
            ...args,
        });
    },
    // 測試
    launchGame(args) {
        return ajax({
            method: 'get',
            url: '/api/game/launch',
            headers: {
                Authorization: VueCookies.get('token'),
            },
            errorAlert: false,
            ...args,
        });
    },
});
