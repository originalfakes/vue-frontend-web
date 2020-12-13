<template>
    <div class="container">
        <div class="header">
            <div class="icon">
                <img src="/static/mobile/icon-back.png" @click="$router.go(-1)" />
            </div>
            <div class="title">{{ $t('S_SHARE_MONEY') }}</div>
            <div class="right" />
        </div>
        <div class="body">
            <div class="form">
                <div class="form-item">{{ $t('S_QRCODE') }}</div>
                <img src="/static/mobile/share/qrcode.png" class="qrcode" />
            </div>
            <div class="form">
                <div class="form-item">{{ $t('S_SHARE_INFO') }}</div>
                <img src="/static/mobile/share/friend.jpg" class="friend" />
                <div class="txt-info">
                    <div>{{ $t('S_SHARE_INFO_1') }}<span class="red">"{{ $t('S_THOUSANDTH') }}"</span>{{ $t('S_SHARE_INFO_2') }}</div>
                    <div>{{ $t('S_SHARE_INFO_3') }}<span class="red">"{{ $t('S_THOUSANDTH') }}"</span>{{ $t('S_SHARE_INFO_4') }}</div>
                    <div>{{ $t('S_SHARE_INFO_5') }}</div>
                    <div>{{ $t('S_SHARE_INFO_6') }}</div>
                </div>
            </div>
            <div class="form">
                <div class="form-item">{{ $t('S_SHARE_URL') }}</div>
                <div class="form-content">
                    <div class="link">https://www.gm1688.net/Registration.php?code=242727&openExternalBrowser=1</div>
                    <div class="btn-copy">{{ $t('S_COPY') }}</div>
                </div>
            </div>
            <div class="form">
                <div class="form-item" @click="$router.push('/mobile/shareRecord')">{{ $t('S_SHARE_RECORD') }}</div>
            </div>
        </div>
        <homeFooter />
    </div>
</template>

<script>
import { checkSession } from '@/lib/mcenterFunc';
import homeFooter from '../tpl/1/homeFooter';

export default {
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    components: {
        homeFooter,
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.body {
    padding: 10px 10px 180px;

    .form {
        background: #fff;
        margin-bottom: 5px;
        padding: 0 10px;

        .form-item {
            background: url('/static/mobile/share/icon_my_label.png') #fbfbfb 0 15px no-repeat;
            background-size: 3px 15px;
            height: 48px;
            line-height: 48px;
            padding-left: 10px;
            font-size: 16px;
            text-align: left;
        }

        .qrcode {
            padding: 10px;
        }

        .friend {
            max-width: 100%;
            padding: 30px 10px;
        }

        .txt-info {
            line-height: 20px;
            padding: 0 10px 10px;
            font-size: 12px;
            color: #263440;
            text-align: left;

            .red {
                color: #f00;
                font-size: 16px;
            }
        }

        .form-content {
            padding: 10px;

            .link {
                text-align: left;
                padding: 10px;
                border: 1px solid #ccc;
                color: #999;
                font-size: 12px;
            }

            .btn-copy {
                background-image: linear-gradient(90deg,#8b744d,#b8a37f);
                height: 40px;
                line-height: 40px;
                margin-top: 10px;
                border-radius: 5px;
                color: #fff;
                font-size: 15px;
            }
        }
    }
}
</style>
