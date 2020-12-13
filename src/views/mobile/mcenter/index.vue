<template>
    <div class="mcenter-wrap">
        <div class="top">
                <img src="/static/mobile/mcenter/pic.png" />
            <div class="text">{{ isLogin === 'Y' ? userInfo.username : $t('S_LOGIN_TO_VIEW') }}</div>
        </div>
        <div class="content">
            <div class="info-wrap">
                <div class="wallet">
                    <div class="title">{{ $t('S_MAIN_WALLET') }}</div>
                    <div class="text">{{ isLogin === 'Y' ? userInfo.wallet : $t('S_LOGIN_TO_VIEW') }}</div>
                    <div
                        v-if="isLogin === 'N'"
                        class="go-register-wrap"
                        @click="$router.push('/mobile/login')"
                    >
                        <img src="/static/mobile/mcenter/icon-king.png" class="icon" />
                        <div class="slogan">
                            <div class="go-register">{{ $t('S_GO_REGISTER') }}</div>
                            <div>{{ $t('S_OPEN_BRILLIANT') }}</div>
                        </div>
                    </div>
                </div>
                <div class="link-wrap">
                    <div class="link" @click="openLink('deposit')">
                        <img src="/static/mobile/mcenter/icon-save.png" />
                        <div class="text">{{ $t('S_DEPOSIT') }}</div>
                    </div>
                    <div class="link" @click="openLink('withdrawal')">
                        <img src="/static/mobile/mcenter/icon-take.png" />
                        <div class="text">{{ $t('S_CONSIGNMENT') }}</div>
                    </div>
                    <div class="link" @click="openLink('transfer')">
                        <img src="/static/mobile/mcenter/icon-turn.png" />
                        <div class="text">{{ $t('S_TRANSFER_POINT') }}</div>
                    </div>
                </div>
            </div>
            <div class="my-func">
                <div
                    v-for="item in myFuncList"
                    :key="`list-${item.id}`"
                    class="list"
                    @click="openLink(item.id)"
                >
                    <img :src="`/static/mobile/mcenter/icon-${item.id}.png`" />
                    <div>{{ $t(item.text) }}</div>
                </div>
            </div>
            <div
                v-if="isLogin === 'Y'"
                class="logout"
                @click="logout"
            >
                {{ $t('S_LOGOUT') }}
            </div>
        </div>
        <homeFooter />
        <loginRemind v-if="isShowModal" @closeModal="closeModal" />
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from '@/store';
import homeFooter from '../tpl/1/homeFooter';
import loading from '@/components/mainLoading';
import loginRemind from '@/components/mobile/loginRemind';
import common from '@/api/common';

export default {
    components: {
        homeFooter,
        loading,
        loginRemind,
    },
    data() {
        return {
            myFuncList: [
                {
                    id: 'betRecord',
                    text: 'S_BET_RECORD',
                },
                {
                    id: 'tranRecord',
                    text: 'S_TRANSACTION_RECORD',
                },
                {
                    id: 'friend',
                    text: 'S_SHARE_FRIEND',
                },
                {
                    id: 'info',
                    text: 'S_ANNOUNCEMENT_AND_NEWS',
                },
                {
                    id: 'member',
                    text: 'S_PERSONAL_INFO',
                },
                {
                    id: 'about',
                    text: 'S_ABOUT_US',
                },
                {
                    id: 'download',
                    text: 'S_COMPLEX',
                },
                {
                    id: 'question',
                    text: 'S_HELP',
                },
                {
                    id: 'set',
                    text: 'S_SETTING',
                },
                {
                    id: 'bank',
                    text: 'S_BANK_CARD',
                },
                {
                    id: 'usdt',
                    text: 'S_USDT_WALLET',
                },
            ],
            isFetchApi: false,
            isShowModal: false,
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
        ...mapGetters({
            isLogin: 'getIsLogin',
            userInfo: 'getUserInfo',
        }),
    },
    methods: {
        // 登出
        logout() {
            if (this.isFetchApi) {
                return;
            }

            this.isFetchApi = true;
            const data = {
                success: () => {
                    this.isFetchApi = false;
                    this.$cookies.remove('token');
                    location.reload();
                },
                fail: () => {
                    this.isFetchApi = false;
                },
            };

            common.logout(data);
        },
        openLink(val) {
            if (val === 'about' || val === 'download' || val === 'question') {
                this.$router.push(`/mobile/${val}`);
                return;
            }
            if (this.isLogin === 'N') {
                this.isShowModal = true;
                return;
            }
            this.$router.push(`/mobile/${val}`);
        },
        closeModal(val) {
            this.isShowModal = val;
        },
    },
};
</script>

<style lang="scss" scoped>
.mcenter-wrap {
    font-family: sans-serif, 微軟正黑體;
    min-height: 100vh;
    background-color: #f1f4f5;
    text-align: left;

    .top {
        background: url('/static/mobile/mcenter/bg-top.png') 50% 0 no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        height: 150px;
        padding: 0 12px;

        img {
            width: 60px;
            height: 60px;
            margin-right: 20px;
        }


        .text {
            color: #FFF;
            font-size: 12px;
        }
    }

    .content {
        width: 95%;
        margin: -25px auto 0;
        padding-bottom: 60px;

        .info-wrap {
            position: relative;
            background: url('/static/mobile/mcenter/bg-mid.png') 50% 0 no-repeat;
            background-size: 100% 100%;
            width: 98%;
            height: 150px;
            margin: 0 auto 10px;
            padding: 0 15px;

            .wallet {
                padding-top: 20px;
                color: #333;
                font-size: 12px;

                .text {
                    margin-top: 5px;
                    font-size: 18px;
                }

                .go-register-wrap {
                    background: #f7f7f7;
                    position: absolute;
                    top: 20px;
                    right: 1px;
                    display: flex;
                    align-items: center;
                    min-width: 155px;
                    height: 45px;
                    padding: 0 10px;
                    border-radius: 22.5px 0 0 22.5px;
                    box-shadow: -2.5px 0 4px rgba(31,32,33,.2);

                    .icon {
                        width: 33px;
                        height: 33px;
                        margin-right: 2px;
                        vertical-align: middle;
                    }

                    .go-register {
                        font-weight: bold;
                    }
                }
            }

            .link-wrap {
                display: flex;
                margin-top: 37px;

                .link {
                    display: flex;
                    align-items: center;
                    padding-right: 35px;
                    color: #333;

                    img {
                        width: 24px;
                        height: 24px;
                        margin-right: 4px;
                    }

                    .text {
                        font-size: 14px;
                    }
                }
            }
        }

        .my-func {
            background-color: #fff;
            display: flex;
            flex-wrap: wrap;
            padding: 20px 0;
            text-align: center;
            font-size: 12px;

            .list {
                flex: 0 0 25%;
                padding: 0 5px 17px;

                img {
                    width: 24px;
                    height: 24px;
                    margin-bottom: 7px;
                }
            }
        }

        .logout {
            background: #fff;
            margin-top: 10px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            box-shadow: 0 1px 0.16rem 0 rgba(31,32,33,.04);
            border-radius: 8px;
            font-size: 14px;
        }
    }
}

/deep/ #main {
    opacity: .9;
}
</style>
