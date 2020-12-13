<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="$router.go(-1)">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">{{ $t('S_CHANGE_PASSWORD') }}</div>
            <div class="right" />
        </div>
        <div class="body">
            <div class="form-item">
                <div class="title">{{ $t('S_OLD_PASSWORD') }}</div>
                <input
                    v-model="oldPsw"
                    type="password"
                    class="input"
                    :placeholder="$t('S_ENTER_OLD_PASSWORD')"
                />
            </div>
            <div class="error-msg">{{ errorMsg.old_password }}</div>
            <div class="form-item">
                <div class="title">{{ $t('S_NEW_PASSWORD') }}</div>
                <input
                    v-model="newPsw"
                    type="password"
                    class="input"
                    :placeholder="$t('S_ENTER_NEW_PASSWORD')"
                />
            </div>
            <div class="error-msg">{{ errorMsg.new_password }}</div>
            <div class="form-item">
                <div class="title">{{ $t('S_CONFIRM_NEW_PASSWORD') }}</div>
                <input
                    v-model="confirmNewPsw"
                    type="password"
                    class="input"
                    :placeholder="$t('S_PLEASE_CONFIRM_NEW_PASSWORD')"
                />
            </div>
            <div
                class="btn-submit"
                :class="{
                    disabled: btnDisabled
                }"
                @click="changePsw"
            >
                {{ $t('S_SUBMIT') }}
            </div>
        </div>
        <loading v-if="isFetchApi" />
    </div>
</template>
<script>
import { checkSession, tokenInvalid } from '@/lib/mcenterFunc';
import loading from '@/components/loading';
import mcenter from '@/api/mcenter';

export default {
    components: {
        loading,
    },
    data() {
        return {
            oldPsw: '',
            newPsw: '',
            confirmNewPsw: '',
            errorMsg: {},
            isFetchApi: false,
        };
    },
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    computed: {
        btnDisabled() {
            if (this.oldPsw === '' || this.newPsw === '' || this.confirmNewPsw === '') {
                return true;
            }
            return false;
        },
    },
    methods: {
        changePsw() {
            if (this.btnDisabled) {
                return;
            }

            if (this.newPsw !== this.confirmNewPsw) {
                alert(this.$t('S_NEW_PSW_NOT_MATCH'));
                return;
            }

            if (this.isFetchApi) {
                return;
            }
            this.isFetchApi = true;

            const data = {
                params: {
                    old_password: this.oldPsw,
                    new_password: this.newPsw,
                },
                success: () => {
                    this.isFetchApi = false;
                },
                fail: (res) => {
                    if (res.message === 'Unauthorized.') {
                        tokenInvalid();
                    }
                    this.errorMsg = res.errors;
                    this.isFetchApi = false;
                },
            };
            mcenter.changePsw(data);
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.body {
    padding: 10px;

    .form-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        height: 48px;
        line-height: 48px;
        margin-bottom: 5px;
        padding: 0 20px;
        font-size: 16px;

        .input {
            background: none;
            outline: none;
            border: none;
            flex: 1;
            color: #999;
            text-align: right;
            font-size: 16px;
        }
    }

    .error-msg {
        margin: 8px 20px;
        font-size: 13px;
        color: #F00;
        text-align: left;
    }

    .btn-submit {
        background-image: linear-gradient(90deg,#8b744d,#b8a37f);
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        border-radius: 5px;
        font-size: 15px;
        color: #FFF;

        &.disabled {
            opacity: .5;
        }
    }
}
</style>
