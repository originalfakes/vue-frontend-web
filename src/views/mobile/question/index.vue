<template>
    <div class="container">
        <div class="header">
            <div class="icon">
                <img src="/static/mobile/icon-back.png" @click="$router.go(-1)" />
            </div>
            <div class="title">{{ $t('S_HELP') }}</div>
            <div class="right" />
        </div>
        <div class="nav-wrap">
            <div
                v-for="item in navList"
                :key="item.id"
                class="nav"
                :class="{
                    active: item.id === curNav
                }"
                @click="changeNavList(item)"
            >
                {{ $t(item.text) }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            navList: [
                {
                    id: 'register',
                    text: 'S_REGISTER',
                },
                {
                    id: 'deposit',
                    text: 'S_DEPOSIT',
                },
                {
                    id: 'sell',
                    text: 'S_CONSIGNMENT',
                },
                {
                    id: 'promotionRule',
                    text: 'S_PROMOTION_RULE',
                },
                {
                    id: 'browser',
                    text: 'S_BROWSER',
                },
                {
                    id: 'hijack',
                    text: 'S_HIJACK',
                },
            ],
            curNav: 'register',
        }
    },
    methods: {
        changeNavList(item) {
            if (item.id === this.curNav) {
                return;
            }

            this.curNav = item.id;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.nav-wrap {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    height: 44px;
    line-height: 44px;
    padding: 0 10px;

    .nav {
        color: #666;
        font-size: 15px;

        &.active {
            color: #8b744d;
            border-bottom: 2px solid #8b744d;
        }
    }
}
</style>
