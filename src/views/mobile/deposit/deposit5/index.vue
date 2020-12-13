<template>
    <div class="form-content">
        <!--未綁定-->
        <div class="ps">{{ $t('S_BIND_USDT') }}</div>
        <div class="btn btn-bind" @click="$router.push('/mobile/usdtAdd')">{{ $t('S_GO_BIND') }}</div>
        <!--已綁定-->
        <!-- <div class="form-input-wrap">
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
                <div class="title">{{ $t('S_CUR_RATE') }}(USDT)</div>
                <div>0.0341</div>
            </div>
            <div class="form-input">
                <div class="title">{{ $t('S_EXCHANGE_POINT') }}(TWD)</div>
                <div>0</div>
            </div>
            <div class="form-input">
                <div class="title">{{ $t('S_DEPOSIT_AMOUNT') }}(USDT)</div>
                <input
                    v-model="amount"
                    type="text"
                    :placeholder="`${$t('S_SINGLE_DEPOSIT_AMOUNT')}，50~10000`"
                />
            </div>
            <div class="ps in">
                <div>{{ $t('S_USDT_INFO_1') }}</div>
                <div>{{ $t('S_USDT_INFO_2') }}</div>
            </div>
        </div>
        <div class="form-input-wrap">
            <div class="qrcode">
                <img src="/static/mobile/deposit/code.png" />
                <div class="text">{{ $t('S_USDT_QRCODE_INFO') }}</div>
            </div>
            <div class="copy">
                <input v-model="code" type="text" ref="code" class="code" readonly />
                <div class="btn btn-copy" @click="copyText">{{ $t('S_COPY') }}</div>
            </div>
        </div>
        <div class="btn btn-deposit">{{ $t('S_DEPOSIT_NOW') }}</div> -->
    </div>
</template>

<script>

export default {
    data() {
        return {
            amountList: [100, 500, 1000, 5000, 10000],
            amount: '',
            code: 123456789,
        };
    },
    methods: {
        addAmount(val) {
            this.amount = +(this.amount) + val;
        },
        copyText() {
            this.$refs.code.select();
            document.execCommand('copy');
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/index.scss';
.form-content {
    padding: 10px;

    .ps {
        padding: 5px 0 10px;
        color: #999;
        line-height: 1.8;
        text-align: left;
        font-size: 12px;
    }

    .btn-bind {
        font-size: 15px;
    }

    .in {
        border-top: 1px solid rgba(153, 153, 153, 0.3);
        padding: 8px 10px;
    }

    .qrcode {
        padding: 10px;

        .text {
            font-size: 12px;
        }
    }

    .copy {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        padding: 10px;

        .code {
            min-width: 80%;
            max-width: 80%;
            height: 40px;
            padding: 10px;
            border: 1px solid #CCC;
            color: #999;
            font-size: 12px;
            overflow-x: scroll;
            box-sizing: border-box;
        }

        .btn-copy {
            flex: 1;
            min-width: 60px;
        }
    }

    .btn-deposit {
        margin-top: 16px;
    }
}

.btn {
    background-image: linear-gradient(90deg,#8b744d,#b8a37f);
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    font-size: 14px;
    color: #FFF;
}
</style>
