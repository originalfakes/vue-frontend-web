<template>
    <div class="login-bg">
        <div class="login">
            <img src="/static/tpl/1/w_logo.png" class="logo" />
            <div class="title">{{ $t('S_USER_LOGIN') }}</div>
            <form class="form">
                <div class="input-wrap">
                    <img src="/static/icon_mem.png" class="icon" />
                    <input
                        v-model="username"
                        type="text"
                        class="input"
                        :placeholder="$t('S_ENTER_YOUR_ACCOUNT')"
                    />
                </div>
                <div class="input-wrap">
                    <img src="/static/icon_password.png" class="icon" />
                    <input
                        v-model="password"
                        type="password"
                        class="input"
                        autocomplete="on"
                        :placeholder="$t('S_ENTER_YOUR_PASSWORD')"
                        @keyup.enter="login"
                    />
                </div>
                <div class="btn-login" @click="login">{{ $t('S_LOGIN') }}</div>
                <div class="bottom">
                    <div class="forget-psw" @click="$router.push('/forgetPsw')">{{ $t('S_FORGET_PSW') }}?</div>
                    <div class="register" @click="$router.push('/register')">{{ $t('S_REGISTER') }}{{ $t('S_ACCOUNT') }}</div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import store from '@/store';
import loginForm from '@/mixins/loginForm';

export default {
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
    mixins: [loginForm],
};
</script>

<style lang="scss" scoped>
.login-bg {
    background: url('/static/register.jpg') #212121 50% 0 no-repeat;
    min-height: 100vh;

    .login {
        padding-top: 110px;

        .logo {
            width: 304px;
            height: 150px;
        }

        .title {
            margin-top: 30px;
            color: #fff;
            font-size: 28px;
            font-weight: 700;
        }

        .form {
            width: 265px;
            margin: 40px auto;
            padding-left: 40px;

            .input-wrap {
                position: relative;
                margin: 13px 0;

                .icon {
                    position: absolute;
                    top: 14px;
                    left: 14px;
                }

                .input {
                    width: 100%;
                    height: 48px;
                    padding-left: 50px;
                    color: #999;
                    font-size: 14px;
                    border: none;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
            }

            .btn-login {
                background-color: #b8a37f;
                color: #FFF;
                height: 48px;
                line-height: 48px;
                border-radius: 4px;
                cursor: pointer;
            }

            .bottom {
                display: flex;
                justify-content: space-between;
                margin-top: 30px;
                color: rgba(255, 255, 255, .5);
                font-size: 14px;

                .register {
                    color: #b8a37f;
                }

                .register,
                .forget-psw {
                    cursor: pointer;

                    &:hover {
                        opacity: .7;
                    }
                }
            }
        }
    }
}
</style>
