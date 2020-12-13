<template>
    <div class="modal-wrap">
        <div class="modal">
            <div class="title">{{ $t('S_SELECT_DATE_SEARCH') }}</div>
            <div class="date-select">
                <div class="date-title">{{ $t('S_START_DATE') }}</div>
                <datepicker
                    :format="selectStartDate"
                    :placeholder="$t('S_SELECT_DATE')"
                />
            </div>
            <div class="date-select">
                <div class="date-title">{{ $t('S_END_DATE') }}</div>
                <datepicker
                    :format="selectEndDate"
                    :placeholder="$t('S_SELECT_DATE')"
                />
            </div>
            <div class="btn-wrap">
                <div class="btn cancel" @click="closeModal(false)">{{ $t('S_CANCEL') }}</div>
                <div
                    class="btn confirm"
                    :class="{
                        disable: startDate === '' || endDate === ''
                    }"
                    @click="closeModal(true)"
                >
                    {{ $t('S_CONFIRM_2') }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
import datepicker from 'vuejs-datepicker';

export default {
    components: {
        datepicker,
    },
    data() {
        return {
            startDate: '',
            endDate: '',
        };
    },
    methods: {
        selectStartDate(val) {
            this.startDate = moment(val).format('YYYY-MM-DD');
            return moment(val).format('YYYY-MM-DD');
        },
        selectEndDate(val) {
            this.endDate = moment(val).format('YYYY-MM-DD');
            return moment(val).format('YYYY-MM-DD');
        },
        closeModal(val) {
            if (!val) {
                this.$emit('closeModal', false);
                return;
            }
            if (this.startDate === '' || this.endDate === '') {
                return;
            }

            this.$emit('dateValue', {
                startDate: this.startDate,
                endDate: this.endDate,
            });
            this.$emit('closeModal', false);
        },
    },
}
</script>

<style lang="scss" scoped>
.modal-wrap {
    background: rgba(0,0,0,.6);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    .modal {
        background: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        width: 90%;
        max-width: 270px;
        min-height: 200px;
        max-height: 80vh;
        padding: 10px 20px;
        transform: translate(-50%,-50%);
        border-radius: 8px;

        .title {
            font-size: 19px;
        }

        .date-select {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 21px;

            .date-title {
                font-size: 12px;
            }
        }

        .btn-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 33px;

            .btn {
                width: 48%;
                height: 44px;
                line-height: 44px;
                border-radius: 6px;
                color: #FFF;
            }

            .cancel {
                background: linear-gradient(270deg,#2cb9c0,#70e9e9 98%);
            }

            .confirm {
                background: linear-gradient(270deg,#8b744d,#b8a37f);

                &.disable {
                    opacity: .4;
                }
            }
        }
    }
}

/deep/ .vdp-datepicker input {
    border: none;
    text-align: right;
    color: #999;
}
/deep/ .vdp-datepicker__calendar {
    top: 25px;
    left: -53%;
}
</style>
