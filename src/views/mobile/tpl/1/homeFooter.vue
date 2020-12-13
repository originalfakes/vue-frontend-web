<template>
    <div class="footer-wrap">
        <div class="footer">
            <div
                v-for="(item, index) in footerList"
                :key="`footer-list-${item.id}`"
                class="list"
                :class="{
                    active: item.id === $route.name
                }"
                @click="changePage(item)"
            >
                <div
                    :class="[
                        'img',
                        `img-${index}`,
                        {
                            active: $route.name === item.id
                        }
                    ]"
                />
                {{ $t(item.text) }}
            </div>
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
            footerList: [
                {
                    id: 'mobilePromotion',
                    text: 'S_PROMOTION',
                },
                {
                    id: 'mobileFriend',
                    text: 'S_SHARE_FRIEND',
                },
                {
                    id: 'mobileHome',
                    text: 'S_HOME_PAGE',
                },
                {
                    id: 'mobileService',
                    text: 'S_ONLINE_SERVICE',
                },
                {
                    id: 'mobileMCenter',
                    text: 'S_MEMBER_CENTER',
                },
            ],
            isShowModal: false,
        };
    },
    computed: {
        ...mapGetters({
            isLogin: 'getIsLogin',
        }),
    },
    methods: {
        changePage(val) {
            if (val.id === this.$route.name) {
                return;
            }

            switch (val.id) {
                case 'mobilePromotion':
                    this.$router.push('/mobile/promotion');
                    break;
                case 'mobileFriend':
                    if (this.isLogin === 'N') {
                        this.isShowModal = true;
                        break;
                    }
                    this.$router.push('/mobile/friend');
                    break;
                case 'mobileHome':
                    this.$router.push('/mobile/home');
                    break;
                case 'mobileService':
                    this.$router.push('/mobile/service');
                    break;
                case 'mobileMCenter':
                    this.$router.push('/mobile/mcenter');
                    break;
            }
        },
        closeModal(val) {
            this.isShowModal = val;
        },
    },
};
</script>

<style lang="scss" scoped>
.footer-wrap {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
}

.footer {
    background: url('/static/mobile/tpl/home/1/bg-footer.png') 0 0 no-repeat;
    background-size: 100% 100%;
    width: 100%;
    height: 57px;
    display: flex;
    padding-bottom: 5px;
}

.list {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    font-size: 12px;
    color: #9ca1aa;

    &.active {
        color: #8b744d;
    }

    .img {
        background-size: contain !important;
        width: 24px;
        height: 24px;
    }

    .img-0 {
        background: url('/static/mobile/tpl/home/1/footer/icon-sale.png') 0 0 no-repeat;

        &.active {
            background: url('/static/mobile/tpl/home/1/footer/icon-sale-active.png') 0 0 no-repeat;
        }
    }

    .img-1 {
        background: url('/static/mobile/tpl/home/1/footer/icon-share.png') 0 0 no-repeat;

        &.active {
            background: url('/static/mobile/tpl/home/1/footer/icon-share-active.png') 0 0 no-repeat;
        }
    }

    .img-2 {
        position: absolute;
        top: -20px;
        background: url('/static/mobile/tpl/home/1/footer/icon-home.png') 0 0 no-repeat;
        width: 48px;
        height: 48px;
    }

    .img-3 {
        background: url('/static/mobile/tpl/home/1/footer/icon-service.png') 0 0 no-repeat;

        &.active {
            background: url('/static/mobile/tpl/home/1/footer/icon-service-active.png') 0 0 no-repeat;
        }
    }

    .img-4 {
        background: url('/static/mobile/tpl/home/1/footer/icon-member.png') 0 0 no-repeat;

        &.active {
            background: url('/static/mobile/tpl/home/1/footer/icon-member-active.png') 0 0 no-repeat;
        }
    }
}
</style>
