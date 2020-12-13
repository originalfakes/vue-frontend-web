import common from '@/api/common';

const actions = {
    // set language
    actionSetLang({ commit }, val) {
        commit('SET_LANG', val);
    },
    // 會員登入狀態
    actionSetLoginStatus({ dispatch, commit }) {
        return new Promise((resolve) => {
            common.checkToken({
                success: (res) => {
                    if (res.data) {
                        commit('SET_LOGIN_STATUS', 'Y');
                        dispatch('actionSetUserInfo', res.data);
                        resolve();
                    }
                },
                fail: () => {
                    commit('SET_LOGIN_STATUS', 'N');
                    resolve();
                },
            });
        });
    },
    actionSetUserInfo({ commit }, val) {
        commit('SET_USER_INFO', val);
    },
    actionSetUsername({ commit }, val) {
        commit('SET_USERNAME', val);
    },
    actionSetNavbarList({ commit }, val) {
        commit('SET_NAVBAR_LIST', val);
    },
};

export default actions;
