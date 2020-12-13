<template>
    <div class="container">
        <div class="header">
            <div class="icon">
                <img src="/static/mobile/icon-back.png" @click="$router.go(-1)" />
            </div>
            <div class="title">{{ $t('S_PERSONAL_SETTING') }}</div>
            <div class="right" />
        </div>
        <div class="body">
            <div class="form">
                <div class="form-item">
                    <div class="title">{{ $t('S_PHONE_NUMBER') }}</div>
                    <div class="text">{{ userInfo.cell_phone }}</div>
                </div>
                <div class="form-item" @click="$router.push('/mobile/changePsw')">
                    <div class="title">{{ $t('S_CHANGE_PASSWORD') }}</div>
                    <div class="text">{{ $t('S_ACCOUNT_LOGIN') }}</div>
                </div>
            </div>
            <div class="form">
                <div class="form-item" @click="$router.push('/mobile/bank')">
                    <div class="title">{{ $t('S_BANK_CARD_MANAGE') }}</div>
                    <div class="text">{{ $t('S_USING_WITHDRAW') }}</div>
                </div>
                <div class="form-item" @click="$router.push('/mobile/usdt')">
                    <div class="title">{{ $t('S_USDT_MANAGE') }}</div>
                    <div class="text">{{ $t('S_USING_WITHDRAW') }}</div>
                </div>
            </div>
            <div class="form" @click="$router.push('/mobile/about')">
                <div class="form-item">
                    <div class="title">{{ $t('S_ABOUT_US') }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { checkSession } from '@/lib/mcenterFunc';
import { mapGetters } from 'vuex';

export default {
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo',
        }),
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.body {
    padding: 10px;

    .form {
        background: #fff;
        margin-bottom: 5px;
        padding: 0 10px;

        .form-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 48px;
            line-height: 48px;
            padding: 0 10px;
            border-bottom: 1px solid rgba(153, 153, 153, 0.3);

            &:last-child {
                border-bottom: none;
            }
        }
    }
}
</style>
