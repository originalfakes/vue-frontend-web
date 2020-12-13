<template>
    <div class="login-bg">
        <img src="/static/mobile/login/logo_home.png" class="logo" />
        <div class="tab-wrap">
            <div class="tab-inner">
                <div
                    class="tab"
                    :class="{
                        active: tabLogin
                    }"
                    @click="tabLogin = true"
                >
                    {{ $t('S_LOGIN') }}
                </div>
                <div
                    class="tab"
                    :class="{
                        active: !tabLogin
                    }"
                    @click="tabLogin = false"
                >
                    {{ $t('S_REGISTER') }}
                </div>
            </div>
        </div>
        <transition v-if="tabLogin" name="translate">
            <!--loginForm-->
            <login />
        </transition>
        <transition v-else name="translate2">
            <!--register form -->
            <register @showLogin="showLogin" />
        </transition>
    </div>
</template>

<script>
import login from './login';
import register from './register';
import store from '@/store';

export default {
    beforeRouteEnter(to, from, next) {
        store.dispatch('actionSetLoginStatus')
            .then(() => {
                if (store.state.isLogin === 'Y') {
                    next('/mobile/home');
                    return;
                }
                next();
            });
    },
    components: {
        login,
        register,
    },
    data() {
        return {
            tabLogin: true,
        };
    },
    methods: {
        showLogin(val) {
            this.tabLogin = val;
        },
    },
};
</script>

<style lang="scss" scoped>
.login-bg {
    background: url('/static/mobile/login/bg_login.jpg') 50% 0 no-repeat;
    background-size: 100% auto;
    height: 100vh;
    color: #fff;

    .logo {
        width: 210px;
        margin: 40px 0 15px;
    }

    .tab-wrap {
        padding: 0 36px;

        .tab-inner {
            display: flex;
            border: 1px solid hsla(0,0%,100%,.3);
            border-radius: 25px;

            .tab {
                width: 50%;
                height: 40px;
                line-height: 40px;
                font-size: 16px;
                color: hsla(0,0%,100%,.3);

                &.active {
                    background: hsla(0,0%,100%,.3);
                    border-radius: 25px;
                    color: #FFF;
                }
            }
        }
    }
}

.translate-enter-active {
  transition: all .5s ease;
}
// .translate-leave-active {
//   transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }

.translate-enter{
    transform: translate3d(-100%, 0px, 1px);
    opacity: 0;
}

.translate2-enter-active {
  transition: all .5s ease;
}
// .translate2-leave-active {
//   transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }

.translate2-enter {
    transform: translate3d(100%, 0px, 1px);
    opacity: 0;
}
</style>
