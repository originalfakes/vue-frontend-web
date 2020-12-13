<template>
    <div class="main-body">
        <!--header-->
        <div class="fixed" :style="`left:-${scrollLeft}px`">
            <eleHeader />
        </div>
        <homePage v-if="$route.name === 'home'" />
        <router-view />
        <!--footer-->
        <eleFooter />
        <floatPic />
    </div>
</template>

<script>
import eleHeader from './header';
import eleFooter from './footer';
import floatPic from '@/components/pc/floatInfo';
import homePage from './home';

export default {
    components: {
        eleHeader,
        eleFooter,
        floatPic,
        homePage,
    },
    data() {
        return {
            scrollLeft: '',
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true); // 監聽滑鼠滾動事件
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            this.scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
        },
    },
};
</script>
