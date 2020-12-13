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
                    {{item.text}}
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
        onlineService: () => import('./onlineService'),
        partner: () => import('./partner'),
    },
    data() {
        return {
            navList: [
                {
                    id: 'partner',
                    text: '合作夥伴',
                },
                {
                    id: 'onlineService',
                    text: '在線客服',
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

