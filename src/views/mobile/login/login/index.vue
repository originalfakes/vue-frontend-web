<template>
    <div>
        <form>
            <div class="form">
                <div class="input-wrap">
                    <img src="/static/mobile/login/icon_name.png" class="icon" />
                    <input
                        v-model="username"
                        type="text"
                        ref="username"
                        :placeholder="$t('S_ENTER_YOUR_ACCOUNT')"
                    />
                </div>
                <div class="input-wrap">
                    <img src="/static/mobile/login/icon_password.png" class="icon" />
                    <input
                        v-model="password"
                        type="password"
                        :placeholder="$t('S_PLEASE_ENTER_PASSWORD')"
                    />
                    <img src="/static/mobile/login/close_eyes.png" class="icon-psw" />
                </div>
                <div class="psw-column">
                    <div class="left">
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                        <div class="save-psw">{{ $t('S_REMEMBER_PSW') }}</div>
                    </div>
                    <div class="right">{{ $t('S_FORGET_PSW') }}?</div>
                </div>
                <div class="login" @click="login">{{ $t('S_LOGIN') }}</div>
                <div class="home-page" @click="$router.push('/mobile/home')">{{ $t('S_GO_VISIT') }}</div>
            </div>
        </form>
    </div>
</template>

<script>
import loginForm from '@/mixins/loginForm';

export default {
    mixins: [loginForm],
    mounted() {
        this.$refs.username.focus();
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';
</style>
