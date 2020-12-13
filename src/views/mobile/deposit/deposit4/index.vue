<template>
    <div class="form-content">
        <div class="form-input-wrap">
            <div class="select-list">
                <div
                    v-for="item in amountList"
                    :key="`amount-${item}`"
                    class="list"
                    @click="addAmount(item)"
                >
                    {{ item }}
                </div>
            </div>
            <div class="form-input">
                <div class="title">{{ $t('S_DEPOSIT_AMOUNT') }}(CNY)</div>
                <input
                    v-model="amount"
                    type="text"
                    :placeholder="`${$t('S_SINGLE_DEPOSIT_AMOUNT')}，300~8000`"
                />
            </div>
            <div class="form-input">
                <div class="title">{{ $t('S_CUR_RATE') }}(CNY)</div>
                <div>4.93</div>
            </div>
            <div class="form-input">
                <div class="title">{{ $t('S_EXCHANGE_POINT') }}(TWD)</div>
                <div>0</div>
            </div>
        </div>
        <div class="btn-wrap">
            <btnReset :title="$t('S_RESET_INFO')" :func="clearInput" />
            <btnConfirm :title="$t('S_SEND')" :func="nextFunc" />
        </div>
    </div>
</template>

<script>
import btnReset from '../btn/reset';
import btnConfirm from '../btn/confirm';

export default {
    components: {
        btnReset,
        btnConfirm,
    },
    data() {
        return {
            amountList: [300, 1000, 2000, 4000, 8000],
            amount: '',
        };
    },
    methods: {
        addAmount(val) {
            this.amount = +(this.amount) + val;
        },
        clearInput() {
            this.amount = '';
        },
        nextFunc() {

        },
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';
</style>
