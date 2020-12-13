<template>
    <transition name="fade">
        <div class="go-top" v-show="goTopShow" @click="scrollToTop(3000)">
            <img src="/static/tpl/1/floatPic/go-top.png" />
            <div class="title">{{ $t('S_GO_TOP') }}</div>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            scrollTop: '',
            goTopShow: false,
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    watch: {
        scrollTop() {
            if (this.scrollTop > 300) {
                this.goTopShow = true;
                return;
            }

            this.goTopShow = false;
        },
    },
    methods: {
        handleScroll() {
            this.scrollTop =
                window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop;
            if (this.scrollTop > 300) {
                this.goTopShow = true;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.go-top {
    position: fixed;
    bottom: 70px;
    right: 10px;
    padding: 10px 15px;
    font-size: 15px;
    z-index: 2;
    cursor: pointer;

    img {
        width: 36px;
    }
}

.fade-enter-to, .fade-leave {
    opacity: 1;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity .3s linear;
}
</style>
