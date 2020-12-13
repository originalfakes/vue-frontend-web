<template>
    <div>
        <form>
            <div class="form">
                <div class="input-wrap">
                    <img src="/static/mobile/login/icon_name.png" class="icon" />
                    <input
                        v-model="username"
                        type="text"
                        :placeholder="$t('S_INPUT_ACCOUNT')"
                    />
                </div>
                <div class="error-msg">{{ errorMsg.username }}</div>
                <div class="input-wrap">
                    <img src="/static/mobile/login/icon_password.png" class="icon" />
                    <input
                        v-model="password"
                        type="password"
                        :placeholder="$t('S_INPUT_PASSWORD')"
                    />
                    <img src="/static/mobile/login/close_eyes.png" class="icon-psw" />
                </div>
                <div class="error-msg">{{ errorMsg.password }}</div>
                <div class="check">
                    <input v-model="isCheck" type="checkbox" />
                    {{ $t('S_ACCEPT_RULE_AND_PRIVACY') }}<span>{{ $t('S_RULE') }}{{ $t('S_AND') }}{{ $t('S_PRIVACY_POLICY') }}</span>
                </div>
                <div class="register" @click="registerAccount">{{ $t('S_REGISTER') }}</div>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import common from '@/api/common';

export default {
    data() {
        return {
            isCheck: true,
            username: '',
            password: '',
            errorMsg: {},
        };
    },
    methods: {
        ...mapActions([
            'actionSetUsername',
        ]),
        registerAccount() {
            if (this.username === '' || this.password === '') {
                alert('欄位不得為空');
                return;
            }
            if (!this.isCheck) {
                alert('需勾選選項');
                return;
            }

            const data = {
                params: {
                    username: this.username,
                    password: this.password,
                },
                success: () => {
                    this.actionSetUsername(this.username);
                    this.$emit('showLogin', true);
                },
                fail: (res) => {
                    this.errorMsg = res.errors;
                },
            };
            common.register(data);
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';
</style>
