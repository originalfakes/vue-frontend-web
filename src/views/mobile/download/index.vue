<template>
    <div class="container">
        <div class="header">
            <div class="icon">
                <img src="/static/mobile/icon-back.png" @click="$router.go(-1)" />
            </div>
            <div class="title">{{ $t('S_DOWNLOAD_NOW') }}</div>
            <div class="right" />
        </div>
        <div class="body">
            <img src="/static/mobile/download/logo_home.png" class="logo" />
            <div class="swiper-wrapper">
                <img src="/static/mobile/download/iosstep_fullsite_new_01.png" width="370px" height="360px" />
            </div>
            <div class="btn-download">{{ $t('S_DOWNLOAD_NOW') }}</div>
            <div class="tip-1">{{ $t('S_DOWNLOAD_TIP_1') }}</div>
            <div class="tip-2">{{ $t('S_DOWNLOAD_TIP_2') }}</div>
            <div class="tip-3">
                <img src="/static/mobile/download/img_icon_down.png" width="10px" />
                {{ $t('S_DOWNLOAD_TIP_3') }}
            </div>
            <img src="/static/mobile/download/bob_qz_ios_step.png" class="step" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
};
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';

.logo {
    width: 118px;
    height: 36px;
    margin: 12px 0 7.5px;
}

.body {
    font-size: 13px;

    .swiper-wrapper {
        padding: 5%;
    }

    .btn-download {
        background-color: #8b744d;
        width: 70%;
        height: 36px;
        line-height: 36px;
        margin: 0 auto;
        color: #FFF;
        border-radius: 18px;
        font-size: 14px;
    }

    .tip-1 {
        margin: 8px;
        color: #b8a37f;
    }

    .tip-2 {
        color: #9fa2a7;
    }

    .tip-3 {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 9px;
        color: #2e384d;
    }

    .step {
        width: 100%;
        margin-top: 45px;
        padding-bottom: 44px;
    }
}

</style>
