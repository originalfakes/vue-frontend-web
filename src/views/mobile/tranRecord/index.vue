<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="$router.go(-1)">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">{{ $t('S_TRANSACTION_RECORD') }}</div>
            <div class="right">
                <img src="/static/mobile/mcenter/icon_service.png" />
            </div>
        </div>
        <div class="nav-wrap">
            <div
                v-for="item in navList"
                :key="item.id"
                class="nav-list"
                :class="{
                    active: item.id === curNavList
                }"
                @click="changeNavList(item.id)"
            >
                {{ $t(item.text) }}
                <span v-show="item.id === curNavList" />
            </div>
        </div>
        <div class="date-select-wrap">
            <div
                v-for="item in dayList"
                :key="`date-select-${item.id}`"
                class="date-select"
                :class="{
                    active: item.id === curDayList
                }"
                @click="changeDay(item.id)"
            >
                {{ $t(item.text) }}
            </div>
        </div>
        <div class="content">
            <img src="/static/mobile/tranRecord/no_record.png" height="128px" />
            <div class="no-record">{{ $t('S_NO_RECORD') }}</div>
        </div>
        <dateSelect
            v-show="isShowModal"
            @closeModal="closeModal"
            @dateValue="dateValue"
        />
    </div>
</template>

<script>
import moment from 'moment';
import { checkSession } from '@/lib/mcenterFunc';
import dayList from '@/config/dateSelect';
import dateSelect from '@/components/mobile/dateSelect';

export default {
    components: {
        dateSelect,
    },
    data() {
        return {
            dayList,
            navList: [
                {
                    id: 'deposit',
                    text: 'S_DEPOSIT',
                },
                {
                    id: 'withdraw',
                    text: 'S_CONSIGNMENT',
                },
                {
                    id: 'tranPoint',
                    text: 'S_TRANSFER_POINT',
                },
                {
                    id: 'bonus',
                    text: 'S_BONUS',
                },
            ],
            curNavList: 'deposit',
            curDayList: 'today',
            isShowModal: false,
            startDate: moment().format('YYYY-MM-DD'),
            endDate: moment().format('YYYY-MM-DD'),
        };
    },
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    methods: {
        changeNavList(val) {
            if (this.curNavList === val) {
                return;
            }
            this.curNavList = val;

        },
        changeDay(val) {
            if (this.curDayList === val && val !== 'optional') {
                return;
            }
            if (val === 'optional') {
                this.isShowModal = true;
                this.curDayList = val;
                return;
            }
            this.getDatePeriod(val);
            this.curDayList = val;
        },
        closeModal(val) {
            this.isShowModal = val;
        },
        dateValue(val) {
            this.startDate = val.startDate;
            this.endDate = val.endDate;
        },
        getDatePeriod(val) {
            switch(val) {
                case 'today':
                    this.startDate = moment().format('YYYY-MM-DD');
                    this.endDate = moment().format('YYYY-MM-DD');
                    break;
                case 'threeDay':
                    this.startDate = moment().subtract(2, 'days').format('YYYY-MM-DD');
                    this.endDate = moment().format('YYYY-MM-DD');
                    break;
                case 'oneWeek':
                    this.startDate = moment().subtract(6, 'days').format('YYYY-MM-DD');
                    this.endDate = moment().format('YYYY-MM-DD');
                    break;
                case 'oneMonth':
                    this.startDate = moment().subtract(29, 'days').format('YYYY-MM-DD');
                    this.endDate = moment().format('YYYY-MM-DD');
                    break;
                default:
                    break;
            }
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.nav-wrap {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0 1px 0.16rem 0 rgba(31,32,33,.04);

    .nav-list {
        position: relative;
        flex: 1;
        height: 44px;
        line-height: 44px;
        font-size: 14px;

        &.active {
            color: #8b744d;
        }

        span {
            background: #8b744d;
            position: absolute;
            bottom: 0;
            left: 50%;
            width: 27px;
            height: 2px;
            transform: translateX(-50%);
        }
    }
}

.date-select-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 1px;

    .date-select {
        flex: 1;
        margin: 0 10px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        border-radius: 4px;

        &.active {
            border: 1px solid #8b744d;
            color: #8b744d;
        }
    }
}
.content {
    padding: 9px 15px 15px;
    color: #333;
    font-size: 14px;

    img {
        margin-top: 60px;
    }

    .no-record {
        margin-top: 5px;
    }
}
</style>
