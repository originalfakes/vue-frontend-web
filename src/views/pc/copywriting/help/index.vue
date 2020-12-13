<template>
    <div>
        <div class="nav-wrap">
            <div class="nav">
                <div
                    v-for="item in navList"
                    :key="item.id"
                    class="nav-list"
                    :class="{
                        active: item.id === curNavList
                    }"
                    @click="changeNavList(item)"
                >
                    {{ $t(item.text) }}
                </div>
            </div>
        </div>
        <div class="content">
            <component :is="curNavList" />
        </div>
    </div>
</template>

<script>
export default {
    components: {
        register: () => import('./register'),
        deposit: () => import('./deposit'),
        sell: () => import('./sell'),
        promotionRule: () => import('./promotionRule'),
        browser: () => import('./browser'),
        hijack: () => import('./hijack'),
    },
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
            curNavList: this.$route.params.id,
        };
    },
    methods: {
        changeNavList(item) {
            if (item.id === this.curNavList) {
                return;
            }

            this.curNavList = item.id;
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';
.content {
    text-align: left;
}
</style>
