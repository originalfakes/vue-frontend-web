<template>
    <div class="container">
        <div class="header">
            <img src="/static/mobile/icon-back.png" @click="$router.go(-1)" />
            <div class="title">{{ $t('S_SERVICE_CENTER') }}</div>
        </div>
        <div class="content">
            <div class="row">
                <img src="/static/mobile/service/chat-icon.png" />
                <div class="text">{{ $t('S_24H_SERVICE') }}</div>
            </div>
            <div class="row">
                <img src="/static/mobile/service/telegram-icon.png" />
                <div class="text">{{ $t('S_TELEGRAM_SERVICE') }}</div>
            </div>
            <div class="row">
                <img src="/static/mobile/service/whatsapp-icon.png" />
                <div class="text">{{ $t('S_LINE_SERVICE') }}</div>
            </div>
        </div>
        <homeFooter />
    </div>
</template>

<script>
import homeFooter from '../tpl/1/homeFooter';

export default {
    components: {
        homeFooter,
    },
}
</script>

<style lang="scss" scoped>
.container {
    background-color: #f1f4f5;
    min-height: 100vh;

    .header {
        background-color: #fff;
        position: relative;
        height: 44px;
        line-height: 44px;
        text-align: center;

        img {
            position: absolute;
            top: 12px;
            left: 15px;
            width: 22px;
            height: 22px;
            vertical-align: middle;
        }

        .title {
            display: inline-block;
        }
    }

    .content {
        padding: 10px;

        .row {
            background: #fff;
            display: flex;
            align-items: center;
            height: 75px;
            margin-bottom: 5px;
            padding: 0 20px;

            img {
                width: 50px;
                height: 50px;
                margin-right: 20px;
                vertical-align: middle;
            }

            .text {
                font-size: 20px;
                color: #333;
            }
        }
    }
}
</style>
