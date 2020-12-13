<template>
    <div class="home">
        <component :is="templateName" />
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import store from '@/store';
import loading from '@/components/mainLoading';

export default {
    components: {
        loading,
        template1: () => import('./tpl/1'),
    },
    data() {
        return {
            isFetchApi: false,
        };
    },
    created() {
        if (store.state.isLogin !== '') {
            return;
        }
        this.isFetchApi = true;
        store.dispatch('actionSetLoginStatus').then(() => {
            this.isFetchApi = false;
        })
    },
    computed: {
        templateName() {
            return `template${1}`;
        },
    },
    watch: {
        $route() {
            this.scrollToTop(1000);
        },
    },
};
</script>

<style lang="scss" scoped>
.home {
    width: 100%;
    height: 100%;
}
</style>
