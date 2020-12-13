import common from '@/api/common';
import i18n from '../lib/i18n';
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
            // username: '',
            password: '',
            isFetchApi: false,
        };
    },
    computed: {
        ...mapGetters({
            getUsername: 'getRegisterAccount',
        }),
        username: {
            get() {
                return this.getUsername;
            },
            set(value) {
                this.actionSetUsername(value);
            },
        },
    },
    methods: {
        ...mapActions([
            'actionSetLoginStatus',
            'actionSetUserInfo',
            'actionSetUsername',
        ]),
        // 會員登入
        login() {
            if (this.username === '' || this.password === '') {
                alert(i18n.t('S_ACCOUNT_AND_PASSWORD_CANT_EMPTY'));
                return;
            }
            if (this.isFetchApi) {
                return;
            }
            this.isFetchApi = true;
            const data = {
                params: {
                    username: this.getUsername,
                    password: this.password,
                },
                success: () => {
                    this.isFetchApi = false;
                    location.reload();
                },
                fail: (res) => {
                    if (res.message) {
                        this.isFetchApi = false;
                        alert('帳號或密碼錯誤');
                        return;
                    }
                },
            }
            common.login(data);
        },
    },
};
