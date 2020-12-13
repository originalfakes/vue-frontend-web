<template>
    <div class="container mt-80">
        <div class="left">
            <img src="/static/movie/title.png" class="title" />
            <img :src="`/static/movie/${curLang}/game-list.png`" class="game-list" />
            <div class="play-now">{{ $t('S_PLAY_NOW') }}</div>
        </div>
        <div class="right">
            <div class="bg-right"></div>
            <img src="/static/movie/bg_player.png" class="player" />
            <img src="/static/movie/float_left.png" class="float left-pic" />
            <img src="/static/movie/float_right.png" class="float right-pic" />
        </div>
        <div class="bottom">
            <div class="row row-1" />
            <div class="row row-2" />
            <div class="bar" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters({
            curLang: 'getCurLang',
        }),
    },
}
</script>

<style lang="scss" scoped>
@import '@/scss/gameHall.scss';

.bg-right {
        background: url('/static/movie/bg_right.png') 50% 0 no-repeat;
}
</style>
