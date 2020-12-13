<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="$router.go(-1)">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">{{ $t('S_TRANSFER_POINT') }}</div>
            <div class="right">
            </div>
        </div>
        <div class="body">
            <div class="top">
                <div class="left">{{ $t('S_NO_WALLET') }}</div>
                <div class="right">{{ $t('S_TRANSFER_TIP') }}</div>
            </div>
            <div class="bottom">
                <div class="top-content">
                    <div class="list-wrap">
                        <img src="/static/mobile/transfer/icon-w03.png" />
                        <div>
                            <div class="title">{{ $t('S_MAIN_WALLET') }}</div>
                            <div class="amount">0.00</div>
                        </div>
                    </div>
                    <div class="list-wrap">
                        <img src="/static/mobile/transfer/icon-w01.png" />
                        <div>{{ $t('S_TRANSFER_BACK') }}</div>
                    </div>
                </div>
                <div class="content-wrap">
                    <div class="content">
                        <div
                            v-for="item in list"
                            :key="item.id"
                            class="game-list"
                        >
                            <div class="name">{{ item.text }}</div>
                            <div class="amount">{{ item.amount }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import { checkSession } from '@/lib/mcenterFunc';
import mcenter from '@/api/mcenter';
import loading from '@/components/loading'

export default {
    components: {
        loading,
    },
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    data() {
        return {
            isFetchApi: false,
            list: [
                {
                    id: 'bob_sport',
                    text: 'BOB體育',
                    amount: '1.00',
                },
                {
                    id: 'im_sport',
                    text: 'IM體育',
                    amount: '0.00',
                },
                {
                    id: 'saba_sport',
                    text: '沙巴體育',
                    amount: '0.00',
                },
                {
                    id: 'im_game',
                    text: 'IM電競',
                    amount: '0.00',
                },
            ],
            gameBalance: '',
        };
    },
    created() {
        this.getGameBalance();
    },
    methods: {
        getGameBalance() {
            this.isFetchApi = true;

            mcenter.getGameBalance({
                success: (res) => {
                    this.gameBalance = res.data;
                    this.isFetchApi = false;
                },
                fail: () => {
                    this.isFetchApi = false;
                },
            });
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.body {
    margin: 10px;
    font-size: 12px;

    .top {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        padding: 0 10px;
        box-shadow: 0 1px 0.16rem 0 rgba(31,32,33,.04);
        border-radius: 4px;
        font-size: 14px;

        .right {
            padding-right: 5px;
            color: #bfbfbf;
            font-size: 13px;
        }
    }

    .bottom {
        background-color: #fff;
        margin-top: 10px;

        .top-content {
            background-color: #fff;
            display: flex;
            height: 64px;
            text-align: left;

            .list-wrap {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                flex: 1;
                padding: 0 4px;

                &:last-child {
                    ::before {
                        content: none;
                    }
                }

                ::before {
                    content: " ";
                    position: absolute;
                    top: 50%;
                    right: 0;
                    -webkit-transform: translateY(-50%);
                    transform: translateY(-50%);
                    width: 1px;
                    height: 32px;
                    background: hsla(0,0%,60%,.3);
                }

                img {
                    width: 24px;
                    height: 24px;
                    margin-right: 6px;
                }

                .title {
                    color: #666;
                }

                .amount {
                    margin-top: 2px;
                }
            }
        }

        .content-wrap {
            background-color: #fff;
            padding: 0 20px;
            animation-name: flip;
            animation-duration: 1s;

            .content {
                display: flex;
                flex-wrap: wrap;
                border-top: 1px solid rgba(153, 153, 153, 0.3);

                .game-list {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-content: center;
                    width: 25%;
                    height: 46px;
                    margin-top: 12px;
                    font-size: 12px;

                    .name {
                        color: #666;
                    }

                    .amount {
                        margin-top: 6px;
                        padding: 0 5px;
                        color: #b8a37f;
                        font-size: 14px;
                    }
                }
            }
        }
    }
}
@keyframes flip {
    0% {
        transform: perspective(400px) rotateX(90deg);
        animation-timing-function: ease-in;
        opacity: 0;
    }
    40% {
        transform: perspective(400px) rotateX(-20deg);
        animation-timing-function: ease-in;
    }
    60% {
        transform: perspective(400px) rotateX(10deg);
        opacity: 1;
    }
    80% {
        transform: perspective(400px) rotateX(-5deg);
    }
    100% {
        transform: perspective(400px);
    }
}
</style>
