<template>
    <div>
        <!-- <div class="title">{{ $t('S_PERSONAL_INFO') }}</div> -->
        <mainTitle :title="'S_PERSONAL_INFO'" />
        <template v-if="!memberInfo.name">
            <div class="form">
                <div class="row">
                    <div class="list-name">
                        {{ $t('S_NAME') }}
                        <i class="icon">*</i>
                    </div>
                    <input
                        v-model="username"
                        type="text"
                        class="input"
                    />
                </div>
                <div v-if="errorMsg.name" class="error">{{ errorMsg.name }}</div>
                <!-- <div class="row">
                    <div class="list-name">
                        LINE ID
                        <i class="icon">*</i>
                    </div>
                    <input
                        v-model="line"
                        type="text"
                        class="input"
                    />
                </div>
                <div v-if="errorMsg.line" class="error">{{ errorMsg.line }}</div> -->
                <div class="row">
                    <div class="list-name">
                        {{ $t('S_GENDER') }}
                        <i class="icon">*</i>
                    </div>
                    <div
                        class="btn-input"
                        :class="{
                            active: gender === 'male'
                        }"
                        @click="gender = 'male'"
                    >
                        {{ $t('S_MALE') }}
                    </div>
                    <div
                        class="btn-input"
                        :class="{
                            active: gender === 'female'
                        }"
                        @click="gender = 'female'"
                    >
                        {{ $t('S_FEMALE') }}
                    </div>
                </div>
                <div v-if="errorMsg.gender" class="error">{{ errorMsg.gender }}</div>
                <div class="row">
                    <div class="list-name">
                        {{ $t('S_BIRTH') }}
                        <i class="icon">*</i>
                    </div>
                    <select v-model="curYear" class="select">
                        <option
                            v-for="(year) in yearList"
                            :key="year.id"
                            :value="year.id"
                        >
                            {{ year.year }}
                        </option>
                    </select>
                    <select v-model="curMonth" class="select">
                        <option
                            v-for="(month, index) in monthList"
                            :key="index"
                            :value="month.id"
                        >
                            {{ $t(month.month) }}
                        </option>
                    </select>
                    <select v-model="curDay" class="select">
                        <option
                            v-for="(day, index) in dayList"
                            :key="index"
                            :value="day.id"
                        >
                            {{ day.day }}
                        </option>
                    </select>
                </div>
                <div v-if="errorMsg.birthday" class="error">{{ errorMsg.birthday }}</div>
                <div class="btn-save" @click="updateInfo">{{ $t('S_SAVE') }}</div>
            </div>
        </template>
        <template v-else>
            <div class="userInfo">
                <div class="row">
                    <div class="list-name left">{{ $t('S_NAME') }}</div>
                    <div class="info">{{ memberInfo.name }}</div>
                </div>
                <div class="row">
                    <div class="list-name left">{{ $t('S_GENDER') }}</div>
                    <div class="info">{{ memberInfo.gender }}</div>
                </div>
                <div class="row">
                    <div class="list-name left">{{ $t('S_BIRTH') }}</div>
                    <div class="info">{{ memberInfo.birthday }}</div>
                </div>
            </div>
        </template>
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
import { tokenInvalid } from '@/lib/mcenterFunc';
import mcenter from '@/api/mcenter';
import monthList from '@/config/month';
import mainTitle from '../components/title';
import loading from '@/components/loading';

export default {
    components: {
        mainTitle,
        loading,
    },
    data() {
        return {
            yearList: [],
            curYear: moment().format('YYYY'),
            curMonth: '01',
            curDay: '01',
            dayList:[],
            monthList,
            memberInfo: {},
            username: '',
            // line: '',
            gender: '',
            isFetchApi: false,
            errorMsg: {},
        };
    },
    created() {
        this.getPersonalInfo();
        let curYear = +(moment().format('YYYY'));

        for (let i=0; i< 100; i++) {
            this.yearList.push({
                id: curYear,
                year: this.$t('S_YEAR_NUM').replace('%s', curYear),
            });
            curYear -= 1;
        }
        this.changeDayList();
    },
    watch: {
        curYear() {
            this.changeDayList();
        },
        curMonth() {
            this.changeDayList();
        },
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo',
        }),
    },
    methods: {
        ...mapActions([
            'actionSetLoginStatus',
        ]),
        getPersonalInfo() {
            this.isFetchApi = true;
            mcenter.getPersonalInfo({
                success: (res) => {
                    this.memberInfo = res.data;
                    this.isFetchApi = false;
                },
                fail: (res) => {
                    if (res.message === 'Unauthorized.') {
                        tokenInvalid();
                    }
                },
            });
        },
        changeDayList() {
            this.dayList = [];
            const dayCount = moment(`${this.curYear}-${this.curMonth}`).daysInMonth();
            for(let i=1; i<=dayCount; i++) {
                let id;
                if (i < 10) {
                    id = `0${i}`;
                }
                this.dayList.push({
                    id,
                    day: this.$t('S_DAY_NUM').replace('%s', i),
                });
            }
        },
        updateInfo() {
            if (this.username === '' || this.gender === '') {
                alert(this.$t('S_IS_REQUIRE'));
                return;
            }
            if (this.isFetchApi) {
                return;
            }

            this.isFetchApi = true;
            const birthday = `${this.curYear}-${this.curMonth}-${this.curDay}`;
            const data = {
                params: {
                    name: this.username,
                    // line: this.line,
                    gender: this.gender,
                    birthday,
                },
                success: (res) => {
                    this.memberInfo = res.data;
                    this.actionSetLoginStatus();
                    this.isFetchApi = false;
                },
                fail: (res) => {
                    if (res.message === 'Unauthorized.') {
                        tokenInvalid();
                    }
                    this.errorMsg = res.errors;
                    this.isFetchApi = false;
                },
            }
            mcenter.updatePersonalInfo(data);
        },
    },
};
</script>

<style lang="scss" scoped>
.title {
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    color: #39404d;
    font-weight: 600;
    border-bottom: 1px solid rgba(182, 197, 225, .3);
}

    .row {
        display: flex;
        align-items: center;
        margin-top: 24px;

        .list-name {
            width: 80px;
            height: 38px;
            line-height: 38px;
            margin-right: 8px;
            text-align: right;
            color: #39404d;
            font-size: 14px;

            &.left {
                width: 60px;
                margin-right: 16px;
            }

            .icon {
                display: inline-block;
                width: 11px;
                padding-right: 5px;
                color: #F00;
            }
        }

        .input {
            background: #fff;
            width: 170px;
            height: 34px;
            line-height: 34px;
            padding-left: 10px;
            border: 1px solid #dbe3f1;
            border-radius: 8px;
        }

        .btn-input {
                width: 184px;
                height: 38px;
                line-height: 38px;
                margin-right: 10px;
                border: 1px solid #dbe3f1;
                color: #39404d;
                border-radius: 4px;
                text-align: center;
                cursor: pointer;
                transition: all .15s ease-in-out;

                &.active,
                &:hover {
                    color: #007bff;
                    border-color: #007bff;
                }
        }

        .select {
            width: 184px;
            height: 38px;
            margin-right: 15px;
            padding-left: 8px;
            color: #39404d;
            border: 1px solid #dbe3f1;
            border-radius: 8px;
        }

        .info {
            height: 38px;
            line-height: 38px;
            font-size: 14px;
        }
    }

    .error {
        margin: 4px 0 0 30px;
        font-size: 14px;
        color: #F00;
    }

    .btn-save {
        background: #b8a37f;
        width: 158px;
        height: 38px;
        line-height: 38px;
        margin: 30px 0 0 86px;
        color: #fff;
        border: 1px solid #b8a37f;
        box-shadow: 0 5px 12px 5px rgba(195, 209, 234, .16);
        border-radius: 19px;
        text-align: center;
        cursor: pointer;

        &:hover {
            background: #8b744d;
        }
    }
</style>
