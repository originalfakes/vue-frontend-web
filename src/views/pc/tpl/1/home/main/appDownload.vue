<template>
    <div class="app-download">
        <div class="left">
            <img src="/static/tpl/1/title_app_download.png" class="title" />
            <div class="content">{{ $t('S_APP_DOWNLOAD_CONTENT') }}</div>
            <img src="/static/tpl/1/app_qrcode.png" class="qrcode" />
            <div class="tip">{{ $t('S_SCAN_QRCODE') }}</div>
            <div class="url">www.12312.app</div>
        </div>
        <div class="right">
            <div class="row row-1">
                <img :src="`/static/tpl/1/${curLang}/img_sport2.png`" />
                <img :src="`/static/tpl/1/${curLang}/img_sport2_label.png`" class="label" />
            </div>
            <div class="row row-2">
                <img :src="`/static/tpl/1/${curLang}/img_sport1.png`" />
                <img :src="`/static/tpl/1/${curLang}/img_sport1_label.png`" class="label" />
            </div>
            <div class="row row-3">
                <img :src="`/static/tpl/1/${curLang}/img_sport3.png`" />
                <img :src="`/static/tpl/1/${curLang}/img_sport3_label.png`" class="label" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            curLang: 'getCurLang',
        }),
    },
}
</script>

<style lang="scss" scoped>
.app-download {
    display: flex;
    width: 1200px;
    min-height: 600px;
    margin: 0 auto;
    text-align: left;

    .left {
        width: 500px;
        color: #2e384d;
        font-size: 14px;

        .title {
            width: 360px;
            margin: 53px 0 34px;
        }

        .content {
            width: 338px;
            line-height: 30px;
        }

        .qrcode {
            margin-top: 20px;
        }

        .tip,
        .url {
            margin: 5px 0 16px 16px;
            font-size: 12px;
            color: #2e384d;
        }

        .url {
            color: #b8a37f;
        }
    }

    .right {
        position: relative;

        .row {
            position: absolute;

            img {
                width: 100%;
                height: auto;
            }

            .label {
                position: absolute;
                width: 86px;
                height: 103px;
            }
        }

        .row-1 {
            width: 220px;
            height: 440px;
            top: 80px;
            left: 150px;

            .label {
                bottom: -39px;
                left: 67px;
            }
        }

        .row-2 {
            width: 268px;
            height: 536px;
            top: 30px;
            left: 335px;
            z-index: 1;

            .label {
                bottom: -52px;
                left: 90px;
            }
        }

        .row-3 {
            width: 220px;
            height: 440px;
            top: 60px;
            left: 560px;

            .label {
                bottom: -39px;
                left: 67px;
            }
        }
    }
}
</style>
