<template>
    <div class="footer-wrap">
        <div class="footer-top">
            <img src="/static/tpl/1/footer/yabo.png" />
            <img src="/static/tpl/1/footer/sa.png" />
            <img src="/static/tpl/1/footer/wm.png" />
            <img src="/static/tpl/1/footer/s-4.png" />
            <img src="/static/tpl/1/footer/apl.png" />
            <img src="/static/tpl/1/footer/c-1.png" />
            <img src="/static/tpl/1/footer/ka.png" />
            <img src="/static/tpl/1/footer/c-2.png" />
            <img src="/static/tpl/1/footer/gr.png" />
            <img src="/static/tpl/1/footer/c-5.png" />
            <img src="/static/tpl/1/footer/kk.png" />
            <img src="/static/tpl/1/footer/dg.png" />
            <img src="/static/tpl/1/footer/g-12.png" />
            <img src="/static/tpl/1/footer/agi.png" />
        </div>
        <div class="footer-bottom">
            <div class="link" @click="toCopyrightPage('help', 'register')">{{ $t('S_HELP') }}</div>
            <div class="link" @click="toCopyrightPage('business', 'about')">{{ $t('S_ABOUT_US') }}</div>
            <div class="link" @click="toCopyrightPage('business', 'service')">{{ $t('S_TERMS_OF_SERVICE') }}</div>
            <div class="link" @click="toCopyrightPage('contact', 'partner')">{{ $t('S_CONTACT_US') }}</div>
        </div>
        <div class="copy-right">版权所有 ©2020 LOGO 保留所有权</div>
    </div>
</template>

<script>
export default {
    methods: {
        toCopyrightPage(val, childVal) {
            if (this.$route.name === val) {
                return;
            }

            this.$router.push(`/${val}/${childVal}`);
        },
    },
};
</script>

<style lang="scss" scoped>
.footer-wrap {
    background-color: #33363d;
    padding-bottom: 30px;

    .footer-top {
        background-color: #f9f9f9;
        padding: 13px;
    }

    .footer-bottom {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1200px;
        margin: 0 auto;
        padding-top: 32px;
        font-size: 13px;

        .link {
            padding-left: 24px;
            color: #707070;
            cursor: pointer;

            &:hover {
                color: #FFF;
            }
        }
    }

    .copy-right {
        margin-top: 26px;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        color: #8994a7;
    }
}
</style>
