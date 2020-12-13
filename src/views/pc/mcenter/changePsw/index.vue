<template>
    <div>
        <mainTitle :title="'S_CHANGE_PASSWORD'" />
        <div class="content">
            <div class="row">
                <div class="name">{{ $t('S_OLD_PASSWORD') }}</div>
                <input
                    v-model="oldPsw"
                    type="password"
                    :placeholder="$t('S_ENTER_OLD_PASSWORD')"
                />
            </div>
            <div class="error-msg">{{ errorMsg.old_password }}</div>
            <div class="row">
                <div class="name">{{ $t('S_NEW_PASSWORD') }}</div>
                <input
                    v-model="newPsw"
                    type="password"
                    :placeholder="$t('S_ENTER_NEW_PASSWORD')"
                />
            </div>
            <div class="error-msg">{{ errorMsg.new_password }}</div>
            <div class="row">
                <div class="name">{{ $t('S_CONFIRM_NEW_PASSWORD') }}</div>
                <input
                    v-model="confirmNewPsw"
                    type="password"
                    :placeholder="$t('S_PLEASE_CONFIRM_NEW_PASSWORD')"
                />
            </div>
            <div
                class="btn-save"
                :class="{
                    disabled: btnDisabled
                }"
                @click="changePsw"
            >
                {{ $t('S_COMPLETE') }}
            </div>
        </div>
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import { tokenInvalid } from '@/lib/mcenterFunc';
import mcenter from '@/api/mcenter';
import mainTitle from '../components/title';
import loading from '@/components/loading';

export default {
    components: {
        mainTitle,
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
.content {
    width: 480px;
    margin: 25px auto 0;

    .row {
        display: flex;
        padding-top: 24px;

        .name {
            width: 80px;
            height: 40px;
            line-height: 40px;
            margin-right: 10px;
            font-size: 14px;
            text-align: right;
            color: #39404d;
        }

        input {
            width: 284px;
            padding-left: 8px;
            color: #39404d;
            transition: all .6s;
            border: 1px solid #dbe3f1;
            border-radius: 8px;
        }
    }

    .error-msg {
        margin-top: 5px;
        margin-left: 94px;
        color: #F00;
        font-size: 12px;
    }

    .btn-save {
        background: #b8a37f;
        width: 160px;
        height: 38px;
        line-height: 38px;
        margin: 35px 0 0 90px;
        text-align: center;
        font-size: 14px;
        transition: all .6s;
        color: #fff;
        border-radius: 19px;
        cursor: pointer;

        &.disabled {
            opacity: .5;

            &:hover {
                background: #b8a37f;
            }
        }

        &:hover {
            background: #8b744d;
        }
    }
}
</style>
