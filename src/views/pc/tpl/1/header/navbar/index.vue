<template>
    <div class="navbar-wrap">
        <div class="navbar">
            <div
                class="nav"
                :class="{
                    active: $route.name === 'home'
                }"
                @click="toGamePage('home')"
            >
                <div class="nav-name">首頁</div>
            </div>
            <div
                v-for="item in navbarList.value"
                :key="`item-${item.key}`"
                class="nav"
                :class="{
                    active: item.key === $route.name
                }"
                @click="toGamePage(item.key)"
                @mouseover="navHover = item.key"
                @mouseleave="navHover = ''"
            >
                <div class="nav-name">{{ item.name }}</div>
                <!--子層-->
                <div
                    v-show="navHover === item.key"
                    class="sub-nav-wrap"
                >
                    <div class="sub-nav">
                        <div class="bet-info"></div>
                        <div class="sub-list-wrap">
                            <div
                                v-for="subItem in item.companies"
                                :key="subItem.key"
                                class="sub-list"
                            >
                                <img :src="`/static/tpl/1/navbar/${item.key}/bg-${subItem.key}.png`" width="300px" height="auto" />
                                <div class="title-wrap">
                                    <img :src="`/static/tpl/1/navbar/${item.key}/${subItem.key}.png`" height="40px" />
                                    <div class="name">{{ subItem.name }}</div>
                                </div>
                                <div class="btn-enter">進入場館</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                v-for="item in otherMenuList"
                :key="`item-${item.id}`"
                class="nav"
                :class="{
                    active: item.key === $route.name
                }"
                @click="toGamePage(item.id)"
            >
                <div class="nav-name">{{ item.text }}</div>
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
            otherMenuList: [
                {
                    id: 'promotions',
                    text: '優惠',
                },
                {
                    id: 'movie',
                    text: '影城',
                },
                {
                    id: 'service',
                    text: '客服',
                },
            ],
            navHover: '',
        };
    },
    created() {
        this.getNavbar();
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
        toGamePage(item) {
            if (item === this.$route.name) {
                return;
            }

            switch(item) {
                case 'sport':
                case 'yabo':
                case 'live':
                case 'electron':
                case 'lottery':
                case 'promotions':
                case 'chess':
                case 'movie':
                case 'service':
                    this.$router.push(`/${item}`);
                    break;
                case 'home':
                    this.$router.push('/');
                    break;
                default:
                    break;
            }
        },
        getNavbar() {
            common.getNavbarList({
                success: (res) => {
                    this.actionSetNavbarList(res.data);
                },
            })
        },
    },
};
</script>

<style lang="scss" scoped>
.navbar-wrap {

    .navbar {
        display: flex;
        justify-content: center;

        .nav {
            display: flex;
            justify-content: center;
            align-items: center;
            min-width: 72px;
            height: 80px;
            padding: 10px;
            color: #000;
            font-size: 16px;

            &.active {
                color: #b8a37f;
                border-bottom: 5px #b8a37f solid;
            }

            .nav-name {
                cursor: pointer;
            }
        }

        .sub-nav-wrap {
            position: fixed;
            top: 80px;
            left: 0;
            background: hsla(0, 100%, 100%, 0.9);
            width: 100%;
            padding-left: 40px;

            .sub-nav {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 1370px;
                margin: 0 auto;

                .bet-info {
                    width: 92px;
                    height: 228px;
                }

                .sub-list-wrap {
                    position: relative;
                    display: flex;
                    flex-flow: wrap;
                    width: 100%;

                    .sub-list {
                        position: relative;
                        height: 280px;
                        transition: .3s;

                        &:hover {
                            transform: scale(1.05);
                            transition: all .3s;
                        }

                        .bg {
                            position: absolute;
                            top: 0;
                            left: 0;
                        }

                        .title-wrap {
                            position: absolute;
                            bottom: 80px;
                            left: 215px;

                            .name {
                                color: #3a404c;
                                font-size: 14px;
                            }
                        }

                        .btn-enter {
                            background: #f8f8f8;
                            position: absolute;
                            bottom: 20px;
                            left: 50%;
                            height: 22px;
                            line-height: 22px;
                            padding: 0 10px;
                            box-shadow: 0 1px 4px 1px rgba(95, 108, 145, .1);
                            color: #b8a37f;
                            font-size: 12px;
                            border-radius: 12px;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
}
</style>
