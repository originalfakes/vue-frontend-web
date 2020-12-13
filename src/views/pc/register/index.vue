<template>
    <div class="register-bg">
        <div class="register">
            <img src="/static/tpl/1/w_logo.png" class="logo" />
            <div class="title">用戶註冊</div>
            <form class="form">
                <div class="input-wrap">
                    <img src="/static/icon_mem.png" class="icon" />
                    <input
                        v-model="username"
                        type="text"
                        class="input"
                        :placeholder="$t('S_INPUT_ACCOUNT')"
                    />
                </div>
                <div class="error-msg">{{ errorMsg.username }}</div>
                <div class="input-wrap">
                    <img src="/static/icon_password.png" class="icon" />
                    <input
                        v-model="password"
                        type="password"
                        class="input"
                        autocomplete="on"
                        :placeholder="$t('S_INPUT_PASSWORD')"
                    />
                </div>
                <div class="error-msg">{{ errorMsg.password }}</div>
                <!-- <div class="input-wrap">
                    <img src="/static/icon_phone.png" class="icon" />
                    <input
                        type="text"
                        class="input"
                        :placeholder="$t('S_INPUT_PHONE')"
                    />
                </div>
                <div class="input-wrap">
                    <img src="/static/icon_captcha.png" class="icon" />
                    <input
                        type="text"
                        class="input"
                        :placeholder="$t('S_MSG_CAPTCHA')"
                    />
                </div> -->
                <div class="accept">
                    <input v-model="check" type="checkbox" />
                    {{ $t('S_ACCEPT_RULE_AND_PRIVACY') }}
                    <span @click="toCopyWriting('business', 'service')">{{ $t('S_RULE') }}</span>
                    {{ $t('S_AND') }}
                    <span @click="toCopyWriting('business', 'privacy')">{{ $t('S_PRIVACY_POLICY') }}</span>
                </div>
                <div class="btn-register" @click="registerAccount">
                    {{ $t('S_REGISTER') }}
                </div>
                <div class="have-account">
                    {{ $t('S_HAVE_ACCOUNT') }}<span @click="$router.push('/login')">{{ $t('S_LOGIN') }}</span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import common from '@/api/common';
import store from '@/store';

export default {
    data() {
        return {
            username: '',
            password: '',
            check: false,
            errorMsg: {},
        };
    },
    beforeRouteEnter(to, from, next) {
        store.dispatch('actionSetLoginStatus')
            .then(() => {
                if (store.state.isLogin === 'Y') {
                    next('/');
                    return;
                }
                next();
            });
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
            if (!this.check) {
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
                    this.$router.push('/');
                },
                fail: (res) => {
                    this.errorMsg = res.errors;
                },
            };
            common.register(data);
        },
        toCopyWriting(val, childVal) {
            this.$router.push(`/${val}/${childVal}`);
        },
    },
}
</script>

<style lang="scss" scoped>
.register-bg {
    background: url('/static/register.jpg') #212121 50% 0 no-repeat;
    min-height: 100vh;

    .register {
        width: 476px;
        margin: 0 auto;

        .logo {
            width: 304px;
            height: 150px;
            margin: 30px 0;
        }

        .title {
            height: 69px;
            line-height: 69px;
            margin-bottom: 8px;
            font-weight: bold;
            font-size: 30px;
            color: #fff;
        }

        .form {
            width: 268px;
            margin: 0 auto;

            .input-wrap {
                position: relative;
                margin: 20px 0 6px;

                .icon {
                    position: absolute;
                    top: 14px;
                    left: 14px;
                }

                .input {
                    width: 100%;
                    height: 48px;
                    padding-left: 40px;
                    color: #999;
                    font-size: 14px;
                    border: none;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
            }

            .error-msg {
                color: #F00;
                font-size: 12px;
            }

            .accept {
                margin: 16px 0;
                margin-bottom: 16px;
                font-size: 13px;
                font-style: italic;
                color: rgba(255, 255, 255, .5);
                text-align: left;

                input {
                    margin: 0 2px 0 0;
                }

                span {
                    color: #b8a37f;
                    cursor: pointer;
                }
            }

            .btn-register {
                background-color: #b8a37f;
                height: 48px;
                line-height: 48px;
                font-size: 14px;
                margin-bottom: 16px;
                color: #FFF;
                border-radius: 4px;
                cursor: pointer;
            }

            .have-account {
                color: rgba(255, 255, 255, .5);
                font-size: 14px;

                span {
                    color: #b8a37f;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>
