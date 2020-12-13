<template>
    <div class="modal">
        <transition name="fade">
            <div v-show="showBankModal" class="bind-bank">
                <div class="header">
                    <div class="title">{{ $t('S_BIND_BANK_CARD') }}</div>
                    <div class="close" @click="closeModal">×</div>
                </div>
                <div class="content">
                    <div class="list">
                        <div class="name">{{ $t('S_BANK_ACCOUNT_NAME') }}</div>
                        <input
                            v-model="accountName"
                            type="text"
                            :placeholder="$t('S_PLEASE_INPUT_NAME')"
                        />
                        <div class="info">{{ $t('S_BIND_BANK_INFO') }}</div>
                    </div>
                    <div class="error-msg">{{ errorMsg.name }}</div>
                    <div class="list">
                        <div class="name">{{ $t('S_ID_NUMBER') }}</div>
                        <input
                            v-model="id_number"
                            type="text"
                            :placeholder="$t('S_PLEASE_INPUT_ID_NUMBER')"
                        />
                    </div>
                    <div class="error-msg">{{ errorMsg.id_number }}</div>
                    <div class="list">
                        <div class="name">LINE ID</div>
                        <input
                            v-model="line"
                            type="text"
                            :placeholder="$t('S_PLEASE_INPUT_LINE_ID')"
                        />
                    </div>
                    <div class="error-msg">{{ errorMsg.line }}</div>
                    <div class="list">
                        <div class="name">{{ $t('S_BANK_NAME') }}</div>
                        <select v-model="curBank">
                            <option
                                v-for="(bank, index) in bankList"
                                :key="`bank-${bank.id}-${index}`"
                                :value="bank.text"
                            >
                                {{ bank.text }}
                            </option>
                        </select>
                    </div>
                    <div class="error-msg">{{ errorMsg.bank_name }}</div>
                    <div class="list">
                        <div class="name">{{ $t('S_BANK_BRANCH') }}</div>
                        <input
                            v-model="branch_name"
                            type="text"
                            :placeholder="$t('S_PLEASE_INPUT_BANK_BRANCH')"
                        />
                    </div>
                    <div class="error-msg">{{ errorMsg.branch_name }}</div>
                    <div class="list">
                        <div class="name">{{ $t('S_BANK_ACCOUNT') }}</div>
                        <input
                            v-model="account"
                            type="text"
                            :placeholder="$t('S_PLEASE_INPUT_BANK_ACCOUNT')"
                        />
                    </div>
                    <div class="error-msg">{{ errorMsg.account }}</div>
                    <div class="tip">{{ $t('S_BIND_BANK_TIP') }}</div>
                    <div class="btn-add-bank" @click="addMemberBank">{{ $t('S_ADD_BANK_CARD') }}</div>
                </div>
            </div>
        </transition>
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import mcenter from '@/api/mcenter';
import { tokenInvalid } from '@/lib/mcenterFunc';
import bankList from '@/config/bankList';
import loading from '@/components/loading';

export default {
    props: {
        showBankModal: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        loading,
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
        ...mapActions([
            'actionSetLoginStatus',
        ]),
        closeModal() {
            this.$emit('closeModal', false);
        },
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
                    this.actionSetLoginStatus();
                    this.isFetchApi = false;
                    this.closeModal();
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
}
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.4);
}
.bind-bank {
    width: 730px;
    margin: 110px auto 0;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.2);
    transform: translate(0, 50px);

    .header {
        display: flex;
        justify-content: space-between;
        align-content: center;
        padding: 13px 16px 13px 64px;
        border-bottom: 1px solid #dee2e6;
        border-top-left-radius: calc(0.3rem - 1px);
        border-top-right-radius: calc(0.3rem - 1px);

        .title {
            line-height: 31px;
            font-size: 14px;
            font-weight: bold;
            color: #000;
        }

        .close {
            font-size: 24px;
            font-weight: bold;
            text-shadow: 0 1px 0 #fff;
            opacity: .5;
            cursor: pointer;
        }
    }

    .content {
        margin: 28px 0 28px 48px;
        padding: 16px;
        width: 85%;

        .list {
            display: flex;
            align-content: center;
            margin-top: 15px;

            &:first-child {
                margin-top: 0;
            }

            .name {
                flex: 0 0 120px;
                line-height: 38px;
                padding: 0 10px;
                text-align: left;
                font-size: 14px;
                color: #39404d;
            }

            .info {
                font-size: 12px;
                color: #7c8ea8;
                margin-left: 20px;
            }

            input {
                flex: 0 0 220px;
                height: 38px;
                padding-left: 18px;
                transition: all .3s ease;
                color: #39404d;
                transition: all .6s;
                background: #fff;
                border: 1px solid #dbe3f1;
                border-radius: 8px;
                box-sizing: border-box;

                &:hover {
                    border: 1px solid #b8a37f;
                }
            }

            select {
                background: #fff;
                width: 220px;
                height: 38px;
                padding-left: 18px;
                border: 1px solid #dbe3f1;
                border-radius: 8px;
                color: #39404d;
                outline: none;
            }
        }

        .error-msg {
            margin: 5px 0 0 124px;
            font-size: 12px;
            color: #F00;
        }

        .tip {
            margin: 15px 0 15px 124px;
            line-height: 20px;
            font-size: 12px;
            color: #7c8ea8;
        }

        .btn-add-bank {
            background: #b8a37f;
            width: 160px;
            height: 38px;
            line-height: 38px;
            margin-left: 120px;
            font-size: 14px;
            color: #fff;
            border-radius: 19px;
            text-align: center;
            cursor: pointer;

            &:hover {
                background: #8b744d;
            }
        }
    }
}

.fade-enter-to, .fade-leave {
    transform: translate(0, 50px);
}
.fade-enter, .fade-leave-to {
    transform: translate(0, 0);
}
.fade-enter-active,
.fade-leave-active {
    transition: transform .2s linear;
}
</style>
