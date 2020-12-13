<template>
    <div class="header">
        <!-- <img src="/static/mobile/tpl/home/1/logo_home.png" class="logo" /> -->
        <div class="lang-drop" @click="isShowLang = true">
            <div class="lang-pic" />
            <div class="text">語系</div>
        </div>
        <div
            v-show="isShowLang"
            class="lang-list-wrap"
            @click="isShowLang = false"
        >
            <transition name="transiiton">
                <div v-show="isShowLang" class="lang-list">
                    <div
                        v-for="item in langList"
                        :key="item.id"
                        class="list"
                        @click="changeLang(item.id)"
                    >
                        {{ item.text }}
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import langList from '@/config/langList';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            langList,
            isShowLang: false,
        };
    },
    methods: {
        ...mapActions([
            'actionSetLang',
        ]),
        changeLang(val) {
            this.actionSetLang(val);
            this.$i18n.locale = val;
        },
    },
};
</script>

<style lang="scss" scoped>
.header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 10px;

    .logo {
        max-width: 120px;
    }

    .lang-drop {
        display: flex;
        justify-content: center;
        align-items: center;

        .lang-pic {
            background: url('/static/mobile/tpl/home/1/icon-global.svg');
            background-size: cover;
            width: 15px;
            height: 15px;
            margin: 0 5px;
        }

        .text {
            color: #263440;;
            font-size: 12px;
        }
    }

    .lang-list-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,.6);
        z-index: 1;

        .lang-list {
            position: absolute;
            bottom: 0;
            background-color: #fff;
            width: 100%;
            max-height: 220px;
            padding: 15px 0;
            text-align: center;

            .list {
                color: #263440;
                padding: 10px;
                font-size: 20px;
            }
        }
    }
}

.transiiton-enter-active,
.transiiton-leave-active {
    transition: all .3s;
}

.transiiton-enter {
    transform: translateY(200px);
}

.transiiton-leave-to {
    transform: translateY(200px);
}
</style>
