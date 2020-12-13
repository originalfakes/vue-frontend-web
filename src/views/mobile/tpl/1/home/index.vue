<template>
    <div class="main-body">
        <homeHeader />
        <carousel />
        <userInfo />
        <gameHall />
        <homeFooter />
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import store from '@/store';
import homeHeader from '../homeHeader';
import homeFooter from '../homeFooter';
import carousel from './carousel';
import userInfo from './userInfo';
import gameHall from './gameHall';
import loading from '@/components/mainLoading';

export default {
    components: {
        homeHeader,
        carousel,
        userInfo,
        gameHall,
        homeFooter,
        loading,
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
};
</script>
