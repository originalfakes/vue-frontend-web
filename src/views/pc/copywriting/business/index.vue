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
        about: () => import('./about'),
        privacy: () => import('./privacy'),
        service: () => import('./service'),
        state: () => import('./state'),
        cooperate: () => import('./cooperate'),
    },
    data() {
        return {
            navList: [
                {
                    id: 'about',
                    text: 'S_ABOUT_US',
                },
                {
                    id: 'privacy',
                    text: 'S_PRIVACY_POLICY',
                },
                {
                    id: 'service',
                    text: 'S_TERMS_OF_SERVICE',
                },
                {
                    id: 'state',
                    text: 'S_DISCLAIMER',
                },
                {
                    id: 'cooperate',
                    text: 'S_BUSINESS_COOPERATION',
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
