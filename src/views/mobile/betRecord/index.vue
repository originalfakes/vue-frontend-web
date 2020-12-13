<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="$router.go(-1)">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">{{ $t('S_BET_RECORD') }}</div>
            <div class="right" @click="isShowCompanyList = true">
                <img src="/static/mobile/betRecord/icon_all.png" />
                {{ curSelectCompany.id === 0 ? $t('S_ALL') : curSelectCompany.name }}
            </div>
        </div>
        <dateSelect @getDate="getDate" />
        <div class="body">
            <ul class="title">
                <li class="bet-wrap">
                    <span class="num">{{ $t('S_BET_TOTAL') }} :</span>
                    <span>{{ betRecord.total_amount }}</span>
                </li>
                <li class="win-loss-wrap">
                    <span class="num">{{ $t('S_WIN_LOSS_TOTAL') }} :</span>
                    <span>{{ betRecord.total_win }}</span>
                </li>
            </ul>
            <div v-if="betRecord.data && betRecord.data.length === 0" class="content">
                <img src="/static/mobile/betRecord/no_record.png" height="128px" />
                <div class="no-record">{{ $t('S_NO_RECORD') }}</div>
            </div>
            <div v-else class="content">
                <div class="th">
                    <div class="list">{{ $t('S_SERIAL') }}</div>
                    <div class="list date">{{ $t('S_TIME') }}</div>
                    <div class="list">{{ $t('S_GAME') }}</div>
                    <div class="list">{{ $t('S_TOTAL_BET') }}</div>
                    <div class="list">{{ $t('S_TOTAL_WIN_LOSS') }}</div>
                </div>
                <div
                    v-for="(item, index) in betRecord.data"
                    :key="`td-${index}`"
                    class="td"
                    :class="{
                        dark: index % 2 === 1
                    }"
                >
                    <div class="list">{{ index }}</div>
                    <div class="list date">{{ item.order_at }}</div>
                    <div class="list">{{ item.game }}</div>
                    <div class="list">{{ item.amount }}</div>
                    <div class="list">{{ item.win }}</div>
                </div>
            </div>
        </div>
        <!--company list-->
        <div
            v-show="isShowCompanyList"
            class="company-list-wrap"
            @click="isShowCompanyList = false"
        >
            <transition name="transition">
                <div v-show="isShowCompanyList" class="company-list">
                    <div class="list" @click="changeCompany({id: 0})">{{ $t('S_ALL') }}</div>
                    <div
                        v-for="item in companyList"
                        :key="item.id"
                        class="list"
                        @click="changeCompany(item)"
                    >
                        {{ item.name }}
                    </div>
                </div>
            </transition>
        </div>
        <loading v-show="isFetchApi" />
    </div>
</template>

<script>
import moment from 'moment';
import { checkSession, tokenInvalid } from '@/lib/mcenterFunc';
import mcenter from '@/api/mcenter';
import dateSelect from './dateSelect';
import loading from '@/components/loading';

export default {
    components: {
        dateSelect,
        loading,
    },
    data() {
        return {
            companyList: [],
            isShowCompanyList: false,
            curSelectCompany: {
                id: 0,
            },
            startDate: moment().format('YYYY-MM-DD'),
            endDate: moment().format('YYYY-MM-DD'),
            isFetchApi: false,
            betRecord: '',
        }
    },
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    created() {
        this.getCompanyList();
        this.getBetRecord();
    },
    methods: {
        getCompanyList() {
            mcenter.getCompanyList({
                success: (res) => {
                    this.companyList = res.data;
                },
                fail: (res) => {
                    if (res.message === 'Unauthorized.') {
                        tokenInvalid();
                    }
                },
            });
        },
        changeCompany(val) {
            if (this.curSelectCompany === val) {
                return;
            }
            this.curSelectCompany = val;
            this.getBetRecord();
        },
        getBetRecord() {
            this.isFetchApi = true;

            mcenter.getBetRecord({
                params: {
                    company_id: this.curSelectCompany.id,
                    start_at: this.startDate,
                    end_at: this.endDate,
                },
                success: (res) => {
                    this.betRecord = res;
                    this.isFetchApi = false;
                },
                fail: (res) => {
                    if (res.message === 'Unauthorized.') {
                        tokenInvalid();
                    }
                    this.isFetchApi = false;
                },
            })
        },
        getDate(val) {
            this.startDate = val.startDate;
            this.endDate = val.endDate;
            this.getBetRecord();
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.body {
    padding: 0 15px;
    font-size: 12px;

    .title {
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        margin: 10px auto;
        padding: 0 10px;
        border-radius: 5px;
        list-style: none;

        li {
            height: 48px;
            line-height: 48px;

            .num {
                margin-right: 5px;
            }
        }
    }

    .content {

        img {
            margin-top: 60px;
        }

        .no-record {
            margin-top: 10px;
            font-size: 14px;
        }

        .th,
        .td {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 5px;

            .list {
                flex: 1;
                height: 40px;
                line-height: 40px;
            }

            .date {
                min-width: 120px;
            }
        }

        .th {
            background-color: #F5F8F9;
            color: #9EACBE;
        }

        .td {
            background-color: #FFF;
            color: #333;
            border-bottom: 1px solid #EFEFEF;

            &.dark {
                background-color: #FBFCFD;
            }
        }
    }
}

.company-list-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: rgba(0,0,0,.6);

    .company-list {
        background: #fff;
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        max-height: 220px;
        padding: 15px 0;
        overflow-y: scroll;

        .list {
            padding: 10px;
            font-size: 20px;
        }
    }
}

.transition-enter-active,
.transition-leave-active {
    transition: all .3s;
}

.transition-enter {
    transform: translateY(220px);
}

.transition-leave-to {
    transform: translateY(0);
}
</style>
