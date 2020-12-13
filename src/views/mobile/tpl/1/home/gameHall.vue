<template>
    <div class="navbar-container">
        <div class="navbar">
            <div
                v-for="(item, index) in navbarList.value"
                :key="`navbar-list-${item.key}`"
                class="navbar-list"
                :class="{
                    active: setActiveList(item.key)
                }"
                @click="changeGameHall(item.key, index)"
            >
                <div v-if="item.key !== defaultGame" class="shadow" />
                {{ item.name }}
            </div>
        </div>
        <div class="content-wrap" ref="wrap">
            <div
                v-for="(item) in navbarList.value"
                :key="`content-${item.key}`"
                class="content "
                ref="test"
            >
                <div
                    v-for="vendor in item.companies"
                    :key="`vendor-${vendor.key}`"
                    class="vendor"
                >
                    <img :src="`/static/mobile/home/${item.key}/${vendor.key}.png`" width="100%" />
                    <div class="text">{{ vendor.name }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import common from '@/api/common';

export default {
    data() {
        return {
            defaultGameList: [
                {
                    id: 'yabo',
                },
                {
                    id: 'live',
                },
                {
                    id: 'sport',
                },
                {
                    id: 'lottery',
                },
                {
                    id: 'chess',
                },
                {
                    id: 'electron',
                },
            ],
            defaultGame: 'yabo',
            scrollPos: 0,
            animation: false,
            vendorHeight: [],
            timeout: '',
        };
    },
    created() {
        this.getNavbar();
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, true);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        clearTimeout(this.timeout);
    },
    watch: {
        navbarList() {
            this.timeout = setTimeout(() => {
                this.vendorHeight = [];
                this.$refs.test.forEach((item, index) => {
                    if (index === 0) {
                        this.vendorHeight.push(0);
                        return;
                    }
                    this.vendorHeight.push(this.$refs.test[index - 1].clientHeight + this.vendorHeight[index - 1] + index * 3);
                });
            }, 500);
        },
    },
    computed: {
        ...mapGetters({
            navbarList: 'getNavbarList',
        }),
    },
    methods: {
        ...mapActions([
            'actionSetNavbarList',
        ]),
        getNavbar() {
            common.getNavbarList({
                success: (res) => {
                    this.actionSetNavbarList(res.data);
                },
            })
        },
        handleScroll () {
            if (this.animation || !this.$refs.wrap) {
                return;
            }
            this.scrollPos = this.$refs.wrap.scrollTop;
            if (this.scrollPos >= 0 && this.scrollPos < this.vendorHeight[1]) {
                this.defaultGame = 'yabo';
            }
            else if (this.scrollPos > this.vendorHeight[1] && this.scrollPos < this.vendorHeight[2]) {
                this.defaultGame = 'live';
            }
            else if (this.scrollPos > this.vendorHeight[2] && this.scrollPos < this.vendorHeight[3]) {
                this.defaultGame = 'sport';
            }
            else if (this.scrollPos > this.vendorHeight[3] && this.scrollPos < this.vendorHeight[4]) {
                this.defaultGame = 'lottery';
            }
            else if (this.scrollPos > this.vendorHeight[4] && this.scrollPos < this.vendorHeight[5]) {
                this.defaultGame = 'chess';
            }
            else if (this.scrollPos >= this.vendorHeight[5]) {
                this.defaultGame = 'electron';
            }
        },
        setActiveList(val) {
            if (this.defaultGame === val) {
                return true;
            }
        },
        changeGameHall(val, index) {
            if (this.defaultGame === val || this.animation) {
                return;
            }
            this.$refs.wrap.scrollTo({
                top: this.vendorHeight[index],
                left: 0,
                behavior: 'smooth',
            })
            this.defaultGame = val;
            this.scrollPos = this.$refs.wrap.scrollTop;
            this.animation = true;
            this.timeout = setTimeout(() => {
                this.animation = false;
            }, 1000);
        },
    },
}
</script>

<style lang="scss" scoped>
.navbar-container {

    .navbar {
        display: flex;
        justify-content: space-between;
        height: 41px;
        line-height: 41px;
        background-color: #fff;

        .navbar-list {
            position: relative;
            width: 20%;
            flex: 1 1 auto;
            padding-bottom: 8px;
            text-align: center;
            color: #666;
            font-size: 13px;

            &.active {
                flex: 0 0 auto;
                background: url('/static/mobile/home/tab-bg.png') no-repeat;
                background-size: 102% 100%;
                color: #FFF;
            }

            .shadow {
                position: absolute;
                bottom: 3px;
                width: 100%;
                height: 2px;
                background-image: linear-gradient(0deg,#e8ecee,#999);
                opacity: .2;
            }
        }
    }

    .content-wrap {
        background-color: #f1f4f5;
        height: calc(100vh - 353px);
        margin-top: 15px;
        padding-bottom: 140px;
        overflow: scroll;

        .content {
            padding: 0 10px;

            .vendor {
                position: relative;
                margin-bottom: 11px;

                .text {
                    position: absolute;
                    top: 45px;
                    left: 50%;
                    transform: translateX(-50%);
                    color: #FFF;
                }
            }
        }
    }
}
</style>
