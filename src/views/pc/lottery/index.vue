<template>
    <div class="container mt-80">
        <div class="left">
            <img :src="`/static/lottery/${curSelect}/title.png`" class="title" />
            <img :src="`/static/lottery/${curSelect}/${curLang}/game-list.png`" class="game-list" />
            <div class="play-now">{{ $t('S_PLAY_NOW') }}</div>
        </div>
        <div class="right">
            <div
                class="bg-right"
                :style="{
                    background: `url('/static/lottery/${curSelect}/bg_right.png') 50% 0 no-repeat`
                }"
            />
            <img :src="`/static/lottery/${curSelect}/bg_player.png`" class="player" />
            <img :src="`/static/lottery/${curSelect}/float_left.png`" class="float left-pic" />
            <img :src="`/static/lottery/${curSelect}/float_right.png`" class="float right-pic" />
        </div>
        <div class="bottom">
            <div class="row row-1" />
            <div class="row row-2" />
            <ul>
                <li
                    v-for="subItem in curList.companies"
                    :key="subItem.key"
                >
                    <img :src="`/static/lottery/${subItem.key}.png`" />
                    <span
                        class="game-name"
                        :class="{
                            active: curSelect === subItem.key
                        }"
                        @click="curSelect = subItem.key"
                    >
                        {{ subItem.name }}
                    </span>
                </li>
            </ul>
            <div class="bar" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            curList: [],
            curSelect: 'apl-lottery',
        };
    },
    computed: {
        ...mapGetters({
            curLang: 'getCurLang',
            navbarList: 'getNavbarList',
        }),
    },
    created() {
        if (Object.keys(this.navbarList).length === 0) {
            return;
        }
        this.curList = this.navbarList.value.filter(item => item.key === 'lottery')[0];
        this.curSelect = this.curList.companies[0].key;
    },
    watch: {
        navbarList() {
            this.curList = this.navbarList.value.filter(item => item.key === 'lottery')[0];
            this.curSelect = this.curList.companies[0].key;
        },
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/gameHall.scss';

.bg-right {
    background-size: contain !important;
}
</style>
