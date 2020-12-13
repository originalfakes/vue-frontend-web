<template>
    <div class="user-select">
        <div class="link">
            <img src="/static/mobile/home/icon-save.png" />
            <span @click="openLink('deposit')">{{ $t('S_DEPOSIT') }}</span>
        </div>
        <div class="link">
            <img src="/static/mobile/home/icon-take.png" />
            <span @click="openLink('withdrawal')">{{ $t('S_CONSIGNMENT') }}</span>
        </div>
        <div class="link">
            <img src="/static/mobile/home/icon-sign.png" />
            <span>{{ isLogin === 'Y' ? userInfo.username : $t('S_HI') }}</span>
        </div>
        <div class="link">
            <img src="/static/mobile/home/icon-go.png" />
            <div v-if="isLogin === 'Y'">
                <div class="wallet">{{ $t('S_MAIN_WALLET') }}</div>
                {{ userInfo.wallet }}
            </div>
            <span v-if="isLogin === 'N'" @click="$router.push('/mobile/login')">{{ $t('S_PLEASE_LOGIN') }}</span>
        </div>
        <loginRemind v-if="isShowModal" @closeModal="closeModal" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import loginRemind from '@/components/mobile/loginRemind';

export default {
    components: {
        loginRemind,
    },
    data() {
        return {
            isShowModal: false,
        };
    },
    computed: {
        ...mapGetters({
            isLogin: 'getIsLogin',
            userInfo: 'getUserInfo',
        }),
    },
    methods: {
        openLink(val) {
            if (this.isLogin === 'N') {
                this.isShowModal = true;
                return;
            }
            this.$router.push(`/mobile/${val}`);
        },
        closeModal(val) {
            this.isShowModal = val;
        },
    },
}
</script>

<style lang="scss" scoped>
.user-select {
    background: url('/static/mobile/home/bg-user-link') 20% no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #39404d;

    .link {
        display: flex;
        align-items: center;
        height: 46px;
        font-size: 14px;

        img {
            width: 17.5px;
            height: 17.5px;
            margin-right: 5px;
            vertical-align: middle;
        }

        .wallet {
            margin-bottom: 3px;
        }
    }
}
</style>
