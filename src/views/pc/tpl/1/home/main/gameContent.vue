<template>
    <div class="betting-wrap">
        <div class="title">
            <img src="/static/tpl/1/title_betting.png" class="" />
        </div>
        <div class="inner">
            <div class="left-bar">
                <div
                    v-for="item in navbarList.value"
                    :key="`list-${item.key}`"
                    class="list"
                    :class="{
                        active: item.key === defaultGame
                    }"
                    @click="changeGame(item)"
                >
                    {{ item.name }}
                </div>
            </div>
            <img :src="`/static/tpl/1/bg-${defaultGame}.jpg`" width="100%" height="100%" class="bg" />
        </div>
        <div class="container">
            <img :src="`/static/tpl/1/${defaultGame}.png`" width="100%" height="100%" />
            <img :src="`/static/tpl/1/float-${defaultGame}-2.png`" class="animation" />
            <img :src="`/static/tpl/1/float-${defaultGame}-1.png`" class="animation" />
        </div>
        <div v-if="getCurGameVendor" class="right-content">
            <div
                v-for="list in getCurGameVendor.companies"
                :key="`list-${list.key}`"
                class="list-wrap"
            >
                <div class="list-inner">
                    <div class="list">
                        <img :src="`/static/tpl/1/sub-game-list/${defaultGame}/${list.key}.png`" />
                        <span>{{ list.name }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            // gameList: [
            //     {
            //         id: 'yabo',
            //         text: 'S_YABO_HALL',
            //     },
            //     {
            //         id: 'live',
            //         text: 'S_LIVE_BETTING',
            //     },
            //     {
            //         id: 'sport',
            //         text: 'S_SPORT_BETTING',
            //     },
            //     {
            //         id: 'lottery',
            //         text: 'S_LOTTERY_GAME',
            //     },
            //     {
            //         id: 'card',
            //         text: 'S_CARD_GAME',
            //     },
            //     {
            //         id: 'slot',
            //         text: 'S_SLOT_GAME',
            //     },
            // ],
            defaultGame: 'yabo',
        };
    },
    computed: {
        ...mapGetters({
            navbarList: 'getNavbarList',
        }),
        getCurGameVendor() {
            if (Object.keys(this.navbarList).length === 0) {
                return;
            }
            return this.navbarList.value.filter(item => item.key === this.defaultGame)[0];
        },
    },
    methods: {
        changeGame(val) {
            if (val.key === this.defaultGame) {
                return;
            }

            this.defaultGame = val.key;
        },
    },
};
</script>

<style lang="scss" scoped>
.betting-wrap {
    position: relative;
    min-height: 827px;
    margin-top: 40px;
    text-align: left;


    .title {
        width: 1200px;
        margin: 0 auto 75px;

        img {
            width: 283px;
        }
    }

    .inner {
        position: relative;
        display: flex;
        width: 1200px;
        min-height: 800px;
        margin: 0 auto;
        z-index: 1;

        .left-bar {
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 185px;
            height: 670px;
            margin: 48px 0 0 65px;
            color: #999;
            border-right: 3px solid #b8a37f;
            transform: skew(20deg);
            box-shadow: 0 0 12px rgba(90, 116, 231, .25);

            .list {
                width: 189px;
                height: 60px;
                margin: 25px 22px;
                padding: 10px;
                transform: skew(-15deg, 0deg);
                text-align: center;
                font-size: 20px;
                transition: all .3s;
                cursor: pointer;

                &:hover,
                &.active {
                    width: 189px;
                    box-shadow: 0 4px 11px 0 rgba(90, 116, 231, .25);
                    border-radius: 1px;
                    font-size: 26px;
                    font-weight: bold;
                    color: #b8a37f;
                }

                &:hover {
                    margin-left: 80px;
                }
            }
        }


        .bg {
            position: absolute;
            top: -20px;
            left: 0;
            z-index: -1;
        }
    }

    .container {
        position: absolute;
        top: 164px;
        left: 260px;
        width: calc(100% - 260px);
        min-height: 800px;
        pointer-events: none;
        z-index: 2;

        img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }

        .animation {
            animation: float 1.8s linear infinite alternate;
        }
    }

    .right-content {
        position: absolute;
        top: 100px;
        right: 230px;
        z-index: 2;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .list-wrap {
            background: url('/static/tpl/1/sub-game-list/arrow_diamonds_blue.png') 50% 0 no-repeat;
            background-size: 100%;
            margin: 16px 0;
            height: 86px;
            width: 177px;
            cursor: pointer;

            .list-inner {
                width: 138px;
                height: 70px;
                margin: 5px 0 auto 10px;
                position: relative;
                color: #39404d;

                &:hover::before {
                    width: 100%;
                }

                &:hover {
                    color: #FFF;
                }

                &::before {
                    content: " ";
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 7px;
                    height: 100%;
                    transition: all .3s;
                    z-index: 1;
                    background: #8b744d;
                }

                .list {
                    position: relative;
                    z-index: 2;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    font-size: 20px;
                    font-weight: bold;
                }
            }
        }
    }
}

@keyframes float {
    0% {
        top: 50px;
    }
    100% {
        top: 10px;
    }
}

@media screen and (max-width: 1750px) {
    .right-content {
        right: 150px !important;
    }
}
@media screen and (max-width: 1550px) {
    .right-content {
        right: 110px !important;
    }
}
</style>
