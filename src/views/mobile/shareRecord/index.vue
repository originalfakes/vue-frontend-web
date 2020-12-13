<template>
    <div class="container">
        <div class="header">
            <div class="icon">
                <img src="/static/mobile/icon-back.png" @click="$router.go(-1)" />
            </div>
            <div class="title">{{ $t('S_SHARE_RECORD') }}</div>
            <div class="right" />
        </div>
        <div class="body">
            <div class="date-select-box">
                <div class="date-select">
                    <div class="title">{{ $t('S_START_DATE') }}</div>
                    <div class="form-input" @click="showStartDatepicker = !showStartDatepicker">{{ startDate }}</div>
                    <div v-if="showStartDatepicker" class="datepicker">
                        <datepicker
                            :inline="true"
                            :format="formatDate"
                            @selected="selectStartDate"
                        />
                    </div>
                </div>
                <div class="date-select">
                    <div class="title">{{ $t('S_END_DATE') }}</div>
                    <div class="form-input" @click="showEndDatePicker = !showEndDatePicker">{{ endDate }}</div>
                    <div v-if="showEndDatePicker" class="datepicker">
                        <datepicker
                            :inline="true"
                            :format="formatDate"
                            @selected="selectEndDate"
                        />
                    </div>
                </div>
                <div class="day-select">
                    <div
                        v-for="item in dayList"
                        :key="item.id"
                        class="list"
                        :class="{
                            active: item.id === curSelectDay
                        }"
                        @click="changeDay(item.id)"
                    >
                        {{ $t(item.text) }}
                    </div>
                </div>
            </div>
            <div class="btn-search">{{ $t('S_SEARCH') }}</div>
        </div>
    </div>
</template>

<script>
import { checkSession } from '@/lib/mcenterFunc';
import datepicker from 'vuejs-datepicker';
import moment from 'moment';

export default {
    components: {
        datepicker,
    },
    data() {
        return {
            showStartDatepicker: false,
            showEndDatePicker: false,
            startDate: moment().format('YYYY-MM-DD'),
            endDate: moment().format('YYYY-MM-DD'),
            curSelectDay: 'today',
            dayList: [
                {
                    id: 'today',
                    text: 'S_TODAY',
                },
                {
                    id: 'threeDay',
                    text: 'S_THREE_DAY',
                },
                {
                    id: 'oneWeek',
                    text: 'S_ONE_WEEK',
                },
                {
                    id: 'oneMonth',
                    text: 'S_ONE_MONTH',
                },
            ],
        };
    },
    watch: {
        curSelectDay(val) {
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
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    computed: {
        formatDate(date) {
            return moment(date).format('YYYY-MM-DD');
        },
    },
    methods: {
        selectStartDate(val) {
            this.startDate = moment(val).format('YYYY-MM-DD');
            this.showStartDatepicker = false;
        },
        selectEndDate(val) {
            this.endDate = moment(val).format('YYYY-MM-DD');
            this.showEndDatePicker = false;
        },
        changeDay(val) {
            if (this.curSelectDay === val) {
                return;
            }
            this.curSelectDay = val;
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.body {
    padding: 5%;

    .date-select-box {
        background-color: #fff;
        margin-bottom: 5px;
        padding: 0 10px;

        .date-select {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 48px;
            line-height: 48px;
            padding: 0 10px;
            border-bottom: 1px solid rgba(153, 153, 153, 0.3);

            .form-input {
                flex: 1;
                color: #999;
                text-align: right;
            }

            .datepicker {
                position: absolute;
                top: 36px;
                left: 50%;
                transform: translateX(-50%);
                z-index: 2;
            }
        }
    }

    .day-select {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10px 20px;

        .list {
            background-color: #f1f1f1;
            min-width: 66px;
            height: 34px;
            line-height: 34px;
            padding: 0 8px;
            border-radius: 4px;
            font-size: 14px;

            &.active {
                background: none;
                border: 1px solid #8b744d;
                color: #8b744d;
            }
        }
    }

    .btn-search {
        background-image: linear-gradient(90deg,#8b744d,#b8a37f);
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        border-radius: 5px;
        color: #fff;
        font-size: 15px;
    }
}
</style>
