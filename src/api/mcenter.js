import VueCookies from 'vue-cookies';
import ajax from '../lib/ajax';

export default ({
    // 取得個人資訊
    getPersonalInfo(args) {
        return ajax({
            method: 'get',
            url: '/api/personal',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        });
    },
    // 修改個人資訊
    updatePersonalInfo(args) {
        return ajax({
            method: 'put',
            url: '/api/personal',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        });
    },
    // 取得銀行卡列表
    getBankList(args) {
        return ajax({
            method: 'get',
            url: '/api/finance/member-bank',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        });
    },
    // 新增銀行卡
    addMemberBank(args) {
        return ajax({
            method: 'post',
            url: '/api/finance/member-bank',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        })
    },
    // 修改密碼
    changePsw(args) {
        return ajax({
            method: 'put',
            url: '/api/personal/change-password',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        })
    },
    // 遊戲公司列表
    getCompanyList(args) {
        return ajax({
            method: 'get',
            url: '/api/finance/company/list',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        });
    },
    // 投注紀錄
    getBetRecord(args) {
        return ajax({
            method: 'get',
            url: '/api/finance/bet-record',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        });
    },
    // 取得遊戲餘額
    getGameBalance(args) {
        return ajax({
            method: 'get',
            url: '/api/finance/game-balance',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        });
    },
    // 儲值支付方式
    getPaymentList(args) {
        return ajax({
            method: 'get',
            url: '/api/finance/deposit/payment-list',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        });
    },
    // 儲值支付廠商
    getPaymentFirm(args) {
        return ajax({
            method: 'get',
            url: '/api/finance/deposit/payment-firm',
            errorAlert: false,
            headers: {
                Authorization: VueCookies.get('token'),
            },
            ...args,
        });
    },
});
