<template>
    <div class="game-bg">
        <div class="copywriting-container">
            <div class="menu-wrap">
                <div class="link" @click="toCopyWrittingPage('help', 'register')">
                    <img
                        src="/static/copyWriting/about01.png"
                        :class="{
                            active: $route.name === 'help'
                        }"
                    />
                    <div :class="{
                        active: $route.name === 'help'
                    }">
                        {{ $t('S_HELP') }}
                    </div>
                </div>
                <div class="link" @click="toCopyWrittingPage('business', 'about')">
                    <img
                        src="/static/copyWriting/about02.png"
                        :class="{
                            active: $route.name === 'business'
                        }"
                    />
                    <div :class="{
                        active: $route.name === 'business'
                    }">
                        {{ $t('S_BUSSINESS') }}
                    </div>
                </div>
                <div class="link" @click="toCopyWrittingPage('contact', 'partner')">
                    <img
                        src="/static/copyWriting/about03.png"
                        :class="{
                            active: $route.name === 'contact'
                        }"
                    />
                    <div :class="{
                        active: $route.name === 'contact'
                    }">
                        {{ $t('S_CONTACT_US') }}
                    </div>
                </div>
            </div>
            <router-view />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        toCopyWrittingPage(val, childVal) {
            if (this.$route.name === val) {
                return;
            }

            this.$router.push(`/${val}/${childVal}`);
        },
    },
};
</script>

<style lang="scss" scoped>
.game-bg {
    margin-top: 130px;

    .copywriting-container {
        background-color: #f2f2f2;
        min-height: 800px;
        width: 1200px;
        margin: 0 auto 50px;
        padding: 0 50px 50px;

        .menu-wrap {
            display: flex;
            justify-content: center;

            .link {
                margin-right: 32px;
                padding: 12px 16px;
                font-size: 18px;
                color: #707070;
                cursor: pointer;

                img {
                    width: 36px;
                    height: 36px;
                    margin-bottom: 10px;
                    opacity: .5;

                    &.active {
                        opacity: 1;
                    }
                }

                .active {
                    color: #5b6ef2;
                    font-weight: bold;
                }

                &:hover {
                    color: #5b6ef2;
                }

                &:last-child {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
