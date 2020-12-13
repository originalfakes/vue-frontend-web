<template>
    <div class="mcenter-wrap mt-80">
        <div class="mcenter">
            <ul class="left-content">
                <li>
                    <div class="title">{{ $t('S_FINANCE_CENTER') }}</div>
                    <div
                        v-for="item in financeList"
                        :key="`finance-${item.id}`"
                        class="list"
                        :class="{
                            active: $route.name === item.id
                        }"
                        @click="changePage(item)"
                    >
                        <img
                            :src="`/static/mcenter/icon/icon-${item.id}.png`"
                        />
                        <span
                        >
                            {{ $t(item.text) }}
                        </span>
                    </div>
                </li>
                <li>
                    <div class="title">{{ $t('S_PERSONAL_CENTER') }}</div>
                    <div
                        v-for="item in personalList"
                        :key="`finance-${item.id}`"
                        class="list"
                        :class="{
                            active: $route.name === item.id
                        }"
                        @click="changePage(item)"
                    >
                        <img
                            :src="`/static/mcenter/icon/icon-${item.id}.png`"
                        />
                        <span
                        >
                            {{ $t(item.text) }}
                        </span>
                    </div>
                </li>
            </ul>
            <div class="right-content">
                <div class="top">
                    <div class="photo">
                        <img v-if="userInfo" src=""/>
                    </div>
                    <div class="user-info">
                        <div class="username">{{ userInfo.username }}</div>
                        <div class="balance">
                            <span class="title">{{ $t('S_ACCOUNT_BALANCE') }}</span>
                            <strong class="amount">{{ userInfo.wallet }}</strong>
                        </div>
                    </div>
                    <div class="info">
                        <ul>
                            <li>
                                <img src="/static/mcenter/icon/person.png" />
                                <span class="title">{{ $t('S_BASIC_INFO') }}:</span>
                                <span class="text edit">{{ +(userInfo.basic_information_complete) === 0 ? $t('S_NOT_COMPLETE') : $t('S_IS_COMPLETE') }}</span>
                            </li>
                            <li>
                                <img src="/static/mcenter/icon/hadSafe.png" />
                                <span class="title">{{ $t('S_ACCOUNT_SECURITY') }}:</span>
                                <span v-if="+(userInfo.security_level) === 1" class="text">{{ $t('S_LOW') }}</span>
                                <span v-else-if="+(userInfo.security_level) === 2" class="text">{{ $t('S_MID') }}</span>
                                <span v-else class="text">{{ $t('S_HIGH') }}</span>
                            </li>
                            <li>
                                <img src="/static/mcenter/icon/hadPassword.png" />
                                <span class="title">{{ $t('S_CHANGE_PASSWORD') }}:</span>
                                <span class="text edit">{{ $t('S_GO_EDIT') }}</span>
                            </li>
                            <li>
                                <img src="/static/mcenter/icon/hadBank.png" />
                                <span class="title">{{ $t('S_BIND_BANK_CARD') }}:</span>
                                <span class="text edit">{{ +(userInfo.member_bank) === 0 ? $t('S_GO_BIND') : $t('S_IS_BIND') }}</span>
                            </li>
                            <li>
                                <img src="/static/mcenter/icon/phone.png" />
                                <span class="title">{{ $t('S_BIND_CELLPHONE') }}:</span>
                                <span class="text">092****0926</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="bottom">
                    <router-view />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { checkSession } from '@/lib/mcenterFunc';
// import VueCookie from 'vue-cookie'

export default {
    data() {
        return {
            financeList: [
                {
                    id: 'deposit',
                    text: 'S_DEPOSIT',
                },
                {
                    id: 'withdraw',
                    text: 'S_CONSIGNMENT',
                },
                {
                    id: 'transfer',
                    text: 'S_TRANSFER_POINT',
                },
                {
                    id: 'tranRecord',
                    text: 'S_TRANSACTION_RECORD',
                },
                {
                    id: 'betRecord',
                    text: 'S_BET_RECORD',
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
            personalList: [
                {
                    id: 'member',
                    text: 'S_ACCOUNT_CENTER',
                },
                {
                    id: 'friend',
                    text: 'S_SHARE_FRIEND',
                },
                {
                    id: 'message',
                    text: 'S_ANNOUNCEMENT_AND_NEWS',
                },
                {
                    id: 'personal',
                    text: 'S_PERSONAL_INFO',
                },
                {
                    id: 'changePsw',
                    text: 'S_CHANGE_PASSWORD',
                },
                {
                    id: 'perfurds',
                    text: 'S_PERSONAL_FUNDING_DETAIL',
                },
            ],
        }
    },
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo',
        }),
    },
    methods: {
        changePage(val) {
            if (this.$route.name === val.id) {
                return;
            }
            this.$router.push(`/mcenter/${val.id}`);
        },
    },
};
</script>

<style lang="scss" scoped>
.mcenter-wrap {
    min-height: 100vh;
    background: #f4f8f9;
}

.mcenter {
    width: 1200px;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
}

.left-content {
    width: 190px;
    min-height: 617px;
    margin-right: 16px;
    list-style: none;

    li {
        background-color: #fff;
        margin-bottom: 16px;
        padding: 0 20px;
        box-shadow: 0 5px 12px 5px rgba(195, 209, 234, .16);
        text-align: left;
        font-size: 16px;

        .title {
            height: 45px;
            line-height: 45px;
            margin-bottom: 8px;
            border-bottom: 1px solid rgba(182, 197, 225, .3);
        }

        .list {
            display: flex;
            align-items: center;
            height: 45px;
            line-height: 45px;
            margin-bottom: 2px;
            font-size: 14px;
            cursor: pointer;

            &.active {

                img {
                    width: 30px;
                    height: 30px;
                }

                span {
                    font-size: 18px;
                    color: #b8a37f;
                }
            }

            &:hover {

                img {
                    width: 0;
                    height: 0;
                    transition: all .3s;
                }

                span {
                    font-size: 18px;
                    color: #b8a37f;
                }
            }

            img {
                height: 24px;
                width: 24px;
                transition: all .3s;
            }

            span {
                margin-left: 10px;
            }
        }
    }
}

.right-content {
    width: 992px;

    .top {
        display: flex;
        align-items: center;
        background-color: #fff;
        margin-bottom: 16px;
        padding: 20px 0 20px 24px;
        border-radius: 8px;
        box-shadow: 0 5px 12px 5px rgba(195, 209, 234, .16);
        text-align: left;

        .photo {
            width: 65px;
            height: 65px;
            border-radius: 50%;
            margin-right: 20px;
        }

        .user-info {
            width: 211px;

            .username {
                line-height: 24px;
                margin-bottom: 5px;
                font-size: 16px;
                color: #39404d;
            }

            .balance {
                line-height: 20px;
                font-size: 14px;
                color: #39404d;

                .amount {
                    margin-left: 10px;
                    color: #f8682f;
                    font-weight: bold;
                }
            }
        }

        .info {
            width: 672px;

            ul {
                display: flex;
                flex-flow: wrap;
                align-items: center;
                list-style: none;

                li {
                    width: 224px;
                    height: 40px;
                    line-height: 40px;
                    text-align: left;
                    font-size: 14px;
                    color: #39404d;

                    img {
                        width: 24px;
                        height: 24px;
                        margin-right: 8px;
                        vertical-align: middle;
                    }

                    .edit {
                        color: #b8a37f;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .bottom {
        background-color: #fff;
        width: 992px;
        min-height: 556px;
        padding: 0 20px;
        box-shadow: 0 5px 12px 5px rgba(195, 209, 234, .16);
        text-align: left;
    }
}
</style>
