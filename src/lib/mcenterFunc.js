import router from '@/router';
import store from '@/store';
import i18n from '@/lib/i18n';
import Vue from 'vue'

export  function tokenInvalid() {
    alert(i18n.t('S_PLEASE_LOGIN_AGAIN'));
    router.push('/');
    location.reload();
    return;
}

export function checkSession(to, from, next) {
    if (store.state.isLogin !== '') {
        if (store.state.isLogin === 'Y') {
            next();
            return;
        }
        next('/');
    }
    store.dispatch('actionSetLoginStatus')
        .then(() => {
            if (store.state.isLogin === 'Y') {
                next();
                return;
            }
            if (Vue.$cookies.get('token')) {
                alert(i18n.t('S_PLEASE_LOGIN_AGAIN'));
            }
            next('/');
        });
}
