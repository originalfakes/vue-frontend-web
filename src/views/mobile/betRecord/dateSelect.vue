<template>
    <div class="date-select">
        <div
            v-for="item in dayList"
            :key="item.id"
            class="list"
            :class="{
                active: item.id === curSelect
            }"
            @click="changeDaySelect(item.id)"
        >
            {{ $t(item.text) }}
            <span v-show="item.id === curSelect" />
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
import dayList from '@/config/dateSelect';
import dateSelect from '@/components/mobile/dateSelect';

export default {
    components: {
        dateSelect,
    },
    data() {
        return {
            dayList,
            curSelect: 'today',
            isShowModal: false,
            startDate: moment().format('YYYY-MM-DD'),
            endDate: moment().format('YYYY-MM-DD'),
        };
    },
    methods: {
        changeDaySelect(val) {
            if (this.curSelect === val && val !== 'optional') {
                return;
            }
            if (val === 'optional') {
                this.isShowModal = true;
                this.curSelect = val;
                return;
            }
            this.getDatePeriod(val);
            this.curSelect = val;

        },
        closeModal(val) {
            this.isShowModal = val;
        },
        dateValue(val) {
            this.startDate = val.startDate;
            this.endDate = val.endDate;
            this.$emit('getDate', {
                startDate: this.startDate,
                endDate: this.endDate,
            });
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
            this.$emit('getDate', {
                startDate: this.startDate,
                endDate: this.endDate,
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.date-select {
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 10px;
    box-shadow: 0 1px 0.16rem 0 rgba(31,32,33,.04);

    .list {
        position: relative;
        height: 44px;
        line-height: 44px;
        flex: 1;
        color: #333;
        font-size: 14px;

        &.active {
            color: #8b744d;
        }

        span {
            background: #8b744d;
            position: absolute;
            left: 50%;
            bottom: 0;
            width: 27px;
            height: 2px;
            transform: translateX(-50%);
        }
    }
}
</style>
