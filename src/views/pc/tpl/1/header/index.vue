<template>
    <div class="header-wrap">
        <div class="header">
            <div v-if="isLogin === 'Y'" @click="openGameTest">遊戲測試</div>
            <!-- <img
                src="/static/tpl/1/logo.png"
                class="logo"
                :class="{
                    login: isLogin === 'Y'
                }"
                @click="toHomePage"
            /> -->
            <navbar />
            <!--not login-->
            <form v-if="isLogin === 'N'">
                <input
                    v-model="username"
                    type="text"
                    class="username"
                    :placeholder="$t('S_USERNAME')"
                />
                <div class="input-wrap">
                    <input
                        v-model="password"
                        type="password"
                        class="password"
                        :placeholder="$t('S_PASSWORD')"
                        @keyup.enter="login"
                    />
                    <div class="forget-psw" @click="showForgetPsw = true">{{ $t('S_FORGET') }}?</div>
                </div>
                <div class="btn login" @click="login">{{ $t("S_LOGIN") }}</div>
                <div class="btn register" @click="$router.push('/register')">{{ $t('S_REGISTER') }}</div>
                <select class="select" :value="curLang" @change="changeLang($event)">
                    <option
                        v-for="item in langList"
                        :key="item.id"
                        :value="item.id"
                    >
                        {{ item.text }}
                    </option>
                </select>
            </form>
            <!--login-->
            <div v-else class="right">
                <img src="/static/tpl/1/mail.png" class="mail" />
                <div class="bar" />
                <div class="user-info">
                    <div class="top-column">
                        <img src="/static/tpl/1/vip_0.png" />
                        <div class="username">{{ userInfo.username }}</div>
                        <div class="link" @click="toMcenterPage('deposit')">{{ $t('S_DEPOSIT') }}</div>
                        <div class="link" @click="toMcenterPage('withdraw')">{{ $t('S_CONSIGNMENT') }}</div>
                        <div class="link">{{ $t('S_TRANSFER_POINT') }}</div>
                    </div>
                    <div class="bottom-column">
                        <div class="wallet">
                            {{ $t('S_WALLET') }}:
                            <span class="amount">{{ userInfo.wallet }}</span>
                            <span class="dollar">{{ $t('S_DOLLAR') }}</span>
                        </div>
                        <div class="bar" />
                        <div class="logout" @click="logout">{{ $t('S_LOGOUT') }}</div>
                    </div>
                </div>
            </div>
        </div>
        <mainLoading v-if="isFetchApi" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import navbar from './navbar';
import loginForm from '@/mixins/loginForm';
import mainLoading from '@/components/mainLoading';
import langList from '@/config/langList';
import common from '@/api/common';

export default {
    components: {
        navbar,
        mainLoading,
    },
    mixins: [loginForm],
    data() {
        return {
            showForgetPsw: false,
            langList,
            navClicked: false,
            launchData: '',
        };
    },
    watch: {
        $route() {
            this.navClicked = false;
        },
    },
    computed: {
        ...mapGetters({
            curLang: 'getCurLang',
            isLogin: 'getIsLogin',
            userInfo: 'getUserInfo',
        }),
    },
    methods: {
        ...mapActions([
            'actionSetLang',
        ]),
        changeLang(event) {
            this.actionSetLang(event.target.value);
            this.$i18n.locale = event.target.value;
        },
        closeModal(val) {
            this.showForgetPsw = val;
        },
        toHomePage() {
            if (this.$route.name === 'home') {
                return;
            }

            this.$router.push('/');
        },
        toMcenterPage(val) {
            if (this.$route.name === val || this.navClicked) {
                return;
            }
            this.navClicked = true;
            this.$router.push(`/mcenter/${val}`);
        },
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
                    // this.$router.push('/');
                    location.reload();
                },
                fail: () => {
                    this.isFetchApi = false;
                },
            };

            common.logout(data);
        },
        openGameTest() {
            common.launchGame({
                params: {
                    game_code: 'S128Cock',
                },
                success: (res) => {
                    this.launchData = res.data;
                    this.openPostWindow();
                },
            })
        },
        openPostWindow() {
            const form = document.createElement('form');
            form.id = 'form';
            form.method = 'post';
            form.action = this.launchData.url;
            form.target = 'map';

            const hideInput = document.createElement('input');
            hideInput.type = 'hidden';
            hideInput.name = 'login_id';
            hideInput.value = this.launchData.body.login_id;
            form.appendChild(hideInput);

            const hideInput_1 = document.createElement('input');
            hideInput_1.type = 'hidden';
            hideInput_1.name = 'session_id';
            hideInput_1.value = this.launchData.body.session_id;
            form.appendChild(hideInput_1);

            document.body.appendChild(form);
            window.open('', 'map');
            form.submit();
            document.body.removeChild(form);
        },
    },
};
</script>

<style lang="scss" scoped>
.header-wrap {
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, .2);

    .header {
        width: 1370px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;

        .logo {
            width: 160px;
            height: 38px;
            margin: 0 8px;
            cursor: pointer;
        }

        form {
            display: flex;
            align-items: center;

            input {
                width: 115px;
                height: 29px;
                line-height: 29px;
                margin-right: 10px;
                padding-left: 10px;
                border: 1px solid #cdcdd5;
                border-radius: 2px;
            }

            .input-wrap {
                position: relative;

                .forget-psw {
                    position: absolute;
                    top: 10px;
                    right: 20px;
                    color: #374e69;
                    font-size: 12px;
                    cursor: pointer;
                }
            }

            .btn {
                height: 33px;
                line-height: 33px;
                padding: 0 14px;
                color: #FFF;
                border-radius: 4px;
                font-size: 13px;
                cursor: pointer;
            }

            .login {
                background: #06cdbd;
            }

            .register {
                background: #b8a37f;
                margin-left: 8px;
            }
        }

        .right {
            display: flex;
            align-items: center;

            .mail {
                width: 22px;
                height: 24px;
                margin-right: 19px;
                padding-top: 2px;
            }

            .bar {
                background-image: linear-gradient(180deg, rgba(231, 237, 243, 0), #d8d8d8 49%, rgba(231, 237, 243, 0));
                width: 1px;
                height: 56px;
                margin-right: 10px;
            }

            .user-info {
                display: flex;
                flex-direction: column;

                .top-column {
                    display: flex;
                    align-items: center;

                    img {
                        height: 16px;
                        margin-right: 8px;
                        cursor: pointer;
                    }

                    .username {
                        max-width: 120px;
                        color: #1d2e42;
                        font-size: 14px;
                        font-weight: 700;
                        font-style: italic;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .link {
                        margin-left: 21px;
                        font-size: 17px;
                        color: #2a2a2a;
                        cursor: pointer;
                    }
                }

                .bottom-column {
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    margin-top: 8px;

                    .wallet {
                        margin-right: 11px;

                        .amount {
                            color: #f8682f;
                            margin-right: 2px;
                        }

                        .dollar {
                            font-size: 12px;
                            color: #1d2e42;
                        }
                    }

                    .bar {
                        width: 1px;
                        height: 15px;
                        background: #d7d7d7;
                        margin: 2px 10px 0;
                    }

                    .logout {
                        padding-top: 4px;
                        font-size: 12px;
                        color: #1d2e42;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}

/deep/ #main {
    opacity: .85;
}

.fades-enter-active,
.fades-leave-active {
    transition: opacity .3s ease-out;
}

.select {
    background: transparent;
    width: 55px;
    height: 33px;
    margin-left: 8px;
    padding: 0 4px;
    border: 1px solid #ced4da;
    color: #000;
    outline: none;
    font-size: 12px;
    cursor: pointer;
}
</style>
