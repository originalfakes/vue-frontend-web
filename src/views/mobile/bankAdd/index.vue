<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="$router.go(-1)">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">{{ $t('S_ADD_BANK_CARD') }}</div>
            <div class="right" />
        </div>
        <div class="body">
            <div class="form">
                <div class="form-item">
                    <div class="form-title">{{ $t('S_NAME') }}</div>
                    <input
                        v-model="accountName"
                        type="text"
                        class="form-input"
                    />
                </div>
                <div class="error-msg">{{ errorMsg.name }}</div>
            </div>
            <div class="tip">{{ $t('S_BIND_BANK_INFO') }}</div>
            <div class="form">
                <div class="form-item">
                    <div class="form-title">{{ $t('S_ID_NUMBER') }}</div>
                    <input
                        v-model="id_number"
                        type="text"
                        class="form-input"
                        :placeholder="$t('S_PLEASE_INPUT_ID_NUMBER')"
                    >
                </div>
                <div class="error-msg">{{ errorMsg.id_number }}</div>
                <div class="form-item">
                    <div class="form-title">LINE ID</div>
                    <input
                        v-model="line"
                        type="text"
                        class="form-input"
                        :placeholder="$t('S_PLEASE_INPUT_LINE_ID')"
                    >
                </div>
                <div class="error-msg">{{ errorMsg.line }}</div>
            </div>
            <div class="form">
                <div class="form-item">
                    <div class="form-title">{{ $t('S_BANK_NAME') }}</div>
                    <select v-model="curBank" dir="rtl">
                        <option
                            v-for="(bank, index) in bankList"
                            :key="`${bank.id}-${index}`"
                            :value="bank.text"
                        >
                            {{ bank.text }}
                        </option>
                    </select>
                </div>
                <div class="error-msg">{{ errorMsg.bank_name }}</div>
                <div class="form-item">
                    <div class="form-title">{{ $t('S_BANK_BRANCH') }}</div>
                    <input
                        v-model="branch_name"
                        type="text"
                        class="form-input"
                        :placeholder="$t('S_PLEASE_INPUT_BANK_BRANCH')"
                    >
                </div>
                <div class="error-msg">{{ errorMsg.branch_name }}</div>
                <div class="form-item">
                    <div class="form-title">{{ $t('S_BANK_ACCOUNT') }}</div>
                    <input
                        v-model="account"
                        type="text"
                        class="form-input"
                        :placeholder="$t('S_PLEASE_INPUT_BANK_ACCOUNT')"
                    >
                </div>
                <div class="error-msg">{{ errorMsg.account }}</div>
            </div>
            <div class="btn-wrap">
                <div class="btn reset">{{ $t('S_RESET_INFO') }}</div>
                <div class="btn submit" @click="addMemberBank">{{ $t('S_SEND') }}</div>
            </div>
            <div class="bank-info">
                {{ $t('S_BANK_BIND_INFO') }}
                <div class="service">{{ $t('S_CONTACT_SERVICE') }}</div>
            </div>
        </div>
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import { checkSession, tokenInvalid } from '@/lib/mcenterFunc';
import bankList from '@/config/bankList';
import mcenter from '@/api/mcenter';
import loading from '@/components/loading';

export default {
    components: {
        loading,
    },
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    data() {
        return {
            isFetchApi: false,
            bankList,
            curBank: '001-中央信託',
            accountName: '',
            id_number: '',
            line: '',
            branch_name: '',
            account: '',
            errorMsg: {},
        };
    },
    methods: {
        addMemberBank() {
            if (this.isFetchApi) {
                return;
            }

            this.isFetchApi = true;
            const data = {
                params: {
                    name: this.accountName,
                    id_number: this.id_number,
                    line: this.line,
                    bank_name: this.curBank,
                    branch_name: this.branch_name,
                    account: this.account,
                },
                success: () => {
                    this.isFetchApi = false;
                    this.$router.push('/mobile/member');
                },
                fail: (res) => {
                    if (res.message === 'Unauthorized.') {
                        tokenInvalid();
                    }
                    this.errorMsg = res.errors;
                    this.isFetchApi = false;
                },
            };
            mcenter.addMemberBank(data);
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';

.body {
    padding: 10px;

    .form {
        margin-bottom: 5px;

        .form-item {
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 48px;
            line-height: 48px;
            padding: 0 10px;
            font-size: 16px;
            border-bottom: 1px solid rgba(153, 153, 153, 0.3);

            &:last-child {
                border-bottom: none;
            }

            .form-title {
                margin-left: 10px;
                color: #333;
            }

            .form-input {
                flex: 1;
                background: none;
                height: 20px;
                line-height: 20px;
                margin-right: 10px;
                border: none;
                outline: none;
                text-align: right;
                color: #999;
                font-size: 16px;
            }

            select {
                margin-right: 10px;
                border: none;
                -webkit-appearance: none;
                -moz-appearance: none;
                color: #999;
                font-size: 16px;
            }

            select::-ms-expand {
                display: none;
            }
        }

        .error-msg {
            margin: 8px 5px;
            color: #F00;
            font-size: 12px;
            text-align: left;
        }
    }


    .tip {
        padding: 5px 0 10px;
        line-height: 1.8;
        color: #999;
        font-size: 12px;
        text-align: left;
    }

    .btn-wrap {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 20px;

        .btn {
            width: 48%;
            height: 44px;
            line-height: 44px;
            text-align: center;
            color: #FFF;
            font-size: 15px;
            border-radius: 6px;
        }

        .reset {
            background: linear-gradient(270deg,#2cb9c0,#70e9e9 98%);
        }

        .submit {
            background: linear-gradient(270deg,#8b744d,#b8a37f);
        }
    }

    .bank-info {
        width: 80%;
        margin: 10px auto 0;
        text-align: center;
        color: #999;
        font-size: 12px;

        .service {
            color: #8b744d;
        }
    }
}
</style>
