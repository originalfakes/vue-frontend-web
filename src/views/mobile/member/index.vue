<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="toLastPage">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">{{ $t('S_PERSONAL_INFO') }}</div>
            <div class="right">
                <img src="/static/mobile/mcenter/icon_service.png" />
            </div>
        </div>
        <div v-if="!isAddPersonalInfo" class="body">
            <div class="form-item">
                <div class="form-title">{{ $t('S_ACCOUNT_NAME') }}</div>
                <div class="form-input">{{ userInfo.username }}</div>
            </div>
            <div class="form-item">
                <div class="form-title">LINE ID</div>
                <div
                    v-if="+(userInfo.member_bank === 0)"
                    class="form-input"
                    @click="$router.push('/mobile/bankAdd')"
                >
                    {{ $t('S_COMPLETE_INFO') }}
                </div>
                <div v-else class="form-input">{{ personalInfo.line }}</div>
            </div>
            <div
                class="form-item"
                @click="showUpdatePage"
            >
                <div class="form-title">{{ $t('S_ACTUAL_NAME') }}</div>
                <div v-if="personalInfo.name" class="name">{{ personalInfo.name }}</div>
                <img
                    v-else
                    src="/static/mobile/mcenter/icon_nav_next.png"
                    class="next"
                />
            </div>
        </div>
        <!--綁定個人資料-->
        <template v-else>
            <div class="body">
                <div class="form-item">
                    <div class="form-title">{{ $t('S_ACTUAL_NAME') }}</div>
                    <input
                        v-model="username"
                        type="text"
                        class="form-input"
                        :placeholder="$t('S_ENTER_ACTUAL_NAME')"
                    />
                </div>
                <div class="errorMsg">{{ errorMsg.name }}</div>
                <div class="form-item">
                    <div class="form-title">{{ $t('S_GENDER') }}</div>
                    <select v-model="curGender">
                        <option
                            v-for="item in genderList"
                            :key="item.id"
                            :value="item.id"
                        >
                            {{ $t(item.text) }}
                        </option>
                    </select>
                </div>
                <div class="errorMsg">{{ errorMsg.gender }}</div>
                <div class="form-item">
                    <div class="form-title">{{ $t('S_SELECT_BIRTHDAY') }}</div>
                    <div class="form-input" @click="isShowDatepicker = true">{{ date }}</div>
                    <div v-if="isShowDatepicker" class="datepicker">
                        <datepicker
                            :inline="true"
                            :format="formatDate"
                            @selected="selectDate"
                        />
                    </div>
                </div>
                <div class="errorMsg">{{ errorMsg.birthday }}</div>
            </div>
            <div class="tip">{{ $t('S_ADD_PERSONAL_INFO_TIP') }}</div>
            <div class="btn-submit" @click="updatePersonalInfo">{{ $t('S_SUBMIT') }}</div>
        </template>
        <loading v-if="isFetchApi" />
    </div>
</template>

<script>
import { checkSession, tokenInvalid } from '@/lib/mcenterFunc';
import { mapGetters } from 'vuex';
import mcenter from '@/api/mcenter';
import datepicker from 'vuejs-datepicker';
import moment from 'moment';
import loading from '@/components/loading'

export default {
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
    components: {
        datepicker,
        loading,
    },
    data() {
        return {
            isFetchApi: false,
            username: '',
            personalInfo: '',
            isAddPersonalInfo: false,
            genderList: [
                {
                    id: 'male',
                    text: 'S_MALE',
                },
                {
                    id: 'female',
                    text: 'S_FEMALE',
                },
            ],
            curGender: 'male',
            date: '2020-01-01',
            isShowDatepicker: false,
            errorMsg: {},
        };
    },
    created() {
        this.getPersonalInfo();
    },
    computed: {
        ...mapGetters({
            userInfo: 'getUserInfo',
        }),
        formatDate(date) {
            return moment(date).format('YYYY-MM-DD');
        },
    },
    methods: {
        selectDate(val) {
            this.date = moment(val).format('YYYY-MM-DD');
            this.isShowDatepicker = false;
        },
        getPersonalInfo() {
            this.isFetchApi = true;

            mcenter.getPersonalInfo({
                success: (res) => {
                    this.personalInfo = res.data;
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
        updatePersonalInfo() {
            this.isFetchApi = true;

            mcenter.updatePersonalInfo({
                params: {
                    name: this.username,
                    gender: this.curGender,
                    birthday: this.date,
                },
                success: () => {
                    // this.actionSetLoginStatus();
                    this.getPersonalInfo();
                    this.isAddPersonalInfo = false;
                },
                fail: (res) => {
                    if (res.message === 'Unauthorized.') {
                        tokenInvalid();
                    }
                    this.errorMsg = res.errors;
                    this.isFetchApi = false;
                },
            })
        },
        showUpdatePage() {
            if (this.personalInfo.name) {
                return;
            }
            this.isAddPersonalInfo = true;
        },
        toLastPage() {
            if (this.isAddPersonalInfo) {
                this.isAddPersonalInfo = false;
                return;
            }
            this.$router.go(-1);
        },
    },
};
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
@import './scss/index.scss';
</style>
