<template>
    <div>
        <mainTitle :title="'S_BANK_CARD'" />
        <template v-if="+(userInfo.member_bank) === 0">
            <div class="content">
                <img src="/static/mcenter/visa.png" class="visa" />
                <div class="bind">{{ $t('S_NOT_BIND_BANK_CARD') }}</div>
                <div class="btn-bind" @click="isShowBindBank = true">{{ $t('S_GO_BIND') }}</div>
                <transition name="fades">
                    <bindBank v-show="isShowBindBank" :showBankModal="isShowBindBank" @closeModal="closeModal" />
                </transition>
            </div>
        </template>
        <template v-else>
            aaa
        </template>
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import mcenter from '@/api/mcenter';
import mainTitle from '../components/title';
import bindBank from './bindBank';
import { tokenInvalid } from '@/lib/mcenterFunc';
import loading from '@/components/loading';

export default {
    components: {
        mainTitle,
        bindBank,
        loading,
    },
    data() {
        return {
            bankList: [],
            isShowBindBank: false,
            isFetchApi: false,
        };
    },
    created() {
        this.getBankList();
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo',
        }),
    },
    methods: {
        getBankList() {
            this.isFetchApi = true;

            mcenter.getBankList({
                success: (res) => {
                    this.bankList = res.data;
                    this.isFetchApi = false;
                },
                fail: (res) => {
                    if (res.message === 'Unauthorized.') {
                        tokenInvalid();
                    }
                    this.errorMsg = res.errors;
                    this.isFetchApi = false;
                },
            })
        },
        closeModal(val) {
            this.isShowBindBank = val;
        },
    },
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 24px;

    .visa {
        height: 100px;
        margin-top: 60px;
    }

    .bind {
        font-size: 14px;
        color: #a0a5ab;
        margin: 20px 0;
    }

    .btn-bind {
        background-color: #b8a37f;
        width: 150px;
        height: 38px;
        line-height: 38px;
        color: #fff;
        font-size: 14px;
        box-shadow: 0 5px 12px 5px;
        border-radius: 19px;
        text-align: center;
        cursor: pointer;
    }
}

.fades-enter-active,
.fades-leave-active {
    transition: opacity .3s ease-out;
}
</style>
