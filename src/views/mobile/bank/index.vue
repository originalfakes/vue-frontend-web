<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="$router.go(-1)">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">{{ $t('S_BANK_CARD_MANAGE') }}</div>
            <div class="right" />
        </div>
        <div class="body">
            <div class="content">
                <img src="/static/mobile/bank/no_bankcard.png" />
                <div class="text">{{ $t('S_NOT_BIND_BANK_CARD') }}</div>
            </div>
            <div class="btn-bind" @click="$router.push('/mobile/bankAdd')">{{ $t('S_GO_BIND_BANK_CARD') }}</div>
        </div>
    </div>
</template>

<script>
import { checkSession } from '@/lib/mcenterFunc';

export default {
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.body {
    padding: 10px;

    .content {
        margin-top: 44px;

        img {
            width: 42%;
            margin: 75px auto 0;
        }

        .text {
            margin-top: 4px;
            color: #999;
            font-size: 14px;
            font-weight: bold;
        }
    }

    .btn-bind {
        background-image: linear-gradient(90deg,#8b744d,#b8a37f);
        height: 40px;
        line-height: 40px;
        margin-top: 17px;
        color: #FFF;
        border-radius: 5px;
        font-size: 15px;
    }
}
</style>
