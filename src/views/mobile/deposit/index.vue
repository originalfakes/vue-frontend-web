<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="$router.go(-1)">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">{{ $t('S_DEPOSIT') }}</div>
            <div class="right">
                <img src="/static/mobile/mcenter/icon_service.png" />
            </div>
        </div>
        <div class="body">
            <div class="deposit-select">
                <div
                    v-for="item in depositList"
                    :key="item.id"
                    class="list"
                    :class="{
                        active: item.id === curSelect
                    }"
                    @click="changeList(item.id)"
                >
                    <img :src="`/static/mobile/deposit/icon-${item.id}.png`" />
                    <div class="text">{{ item.text }}</div>
                </div>
            </div>
            <component :is="curSelect" />
        </div>
    </div>
</template>

<script>
import mcenter from '@/api/mcenter';
import { checkSession, tokenInvalid } from '@/lib/mcenterFunc';

export default {
    components: {
        deposit1: () => import('./deposit1'),
        deposit2: () => import('./deposit2'),
        deposit3: () => import('./deposit3'),
        deposit4: () => import('./deposit4'),
        deposit5: () => import('./deposit5'),
    },
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    data() {
        return {
            depositList: [
                {
                    id: 'deposit1',
                    text: '銀行帳號',
                },
                {
                    id: 'deposit2',
                    text: '銀行虛擬帳號',
                },
                {
                    id: 'deposit3',
                    text: '超商代碼繳費',
                },
                {
                    id: 'deposit4',
                    text: '支付宝',
                },
                {
                    id: 'deposit5',
                    text: 'ERC20 USDT',
                },
            ],
            curSelect: 'deposit1',
        };
    },
    created() {
        this.getPaymentList();
        this.getPaymentFirm();
    },
    methods: {
        changeList(val) {
            if (this.curSelect === val) {
                return;
            }
            this.curSelect = val;
        },
        getPaymentList() {
            mcenter.getPaymentList({
                success: () => {
                    // console.log(res.data);
                },
            })
        },
        getPaymentFirm() {
            mcenter.getPaymentFirm({
                params: {
                    payment_id: 1,
                },
                success: () => {
                    // console.log(res.data);
                },
                fail: (res) => {
                    if (res.message === 'Unauthorized.') {
                        tokenInvalid();
                    }
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.body {
    padding: 10px;

    .deposit-select {
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        padding: 10px;
        box-shadow: 0 1px 0.16rem 0 rgba(31,32,33,.04);
        border-radius: 4px;

        .list {
            width: 20%;
            padding: 5px;
            color: #666;
            border: 1px solid transparent;
            font-size: 12px;

            &.active {
                color: #8b744d;
                border: 1px solid #8b744d;
                border-radius: 4px;
            }

            img {
                width: 80%;
                margin: 10px auto 0;
            }

            .text {
                margin-top: 2px;
            }
        }
    }
}
</style>
