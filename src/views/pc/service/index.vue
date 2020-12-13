<template>
    <div class="container mt-80">
        <div class="content">
            <div class="col">
                <div class="head">
                    <img src="/static/contact/line-head.jpg" />
                </div>
                <div class="body">
                    <img src="/static/contact/line-qrcode.png" class="img" />
                    <p class="text-title">{{ $t('S_ADD_LINE_FRIEND') }}</p>
                    <p class="text-info">{{ $t('S_SCAN_LINE_QRCODE') }}</p>
                </div>
                <div class="footer">
                    <p class="text-title" @click="openLink('https://line.me/download')">{{ $t('S_DOWNLOAD_LINE') }}</p>
                </div>
            </div>
            <div class="col">
                <div class="head">
                    <img src="/static/contact/telegram-head.jpg" />
                </div>
                <div class="body">
                    <img src="/static/contact/telegram-img.jpg" class="img" />
                    <p class="text-title hover" @click="openLink('https://t.me/ofacasino')">{{ $t('S_TELEGRAM_CHANNEL') }}</p>
                    <p class="text-info">{{ $t('S_SEARCH_TELEGRAM_ID') }}</p>
                </div>
                <div class="footer">
                    <p class="text-title" @click="openLink('https://telegram.org/')">{{ $t('S_DOWNLOAD_TELEGRAM') }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import common from '@/api/common';

export default {
    created() {
        this.getQrcode();
    },
    methods: {
        getQrcode() {
            common.getQrcode({
                success: () => {
                },
            });
        },
        openLink(link) {
            window.open(link);
        },
    },
}
</script>

<style lang="scss" scoped>
.container {
    background: url('/static/contact/contact-bg.jpg') 0 0 no-repeat;

    .content {
        display: flex;
        align-items: center;
        width: 1140px;
        height: 100vh;
        margin: 0 auto;
        padding: 0 15px;

        .col {
            flex: 1 1 0;
            max-width: 355px;
            min-width: 290px;
            height: 640px;
            margin: 20px auto;
            padding-bottom: 100px;
            border: 1px solid #979797;

            .body {
                padding: 20px 20px 10px;

                .img {
                    margin-bottom: 15px;
                }
            }

            p {
                margin-bottom: 15px;
            }

            .text-title {
                color: #b8a37f;

                &.hover {
                    cursor: pointer;

                    &:hover {
                        color: #0056b3;
                    }
                }

            }

            .footer {
                margin-top: 60px;
                padding: 10px 20px 20px 20px;
                cursor: pointer;

                p {
                    &:hover {
                        color: #0056b3;
                    }
                }

            }
        }
    }
}
</style>
