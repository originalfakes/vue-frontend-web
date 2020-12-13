<template>
    <div class="marquee-wrap">
        <div class="marquee">
            <div class="title">{{ $t('S_ANNOUNCEMENT') }}</div>
            <marquee scrolldelay=190 width=100%>
                <span
                    v-for="item in marqueeContent"
                    :key="item.id"
                >
                    {{ item.content }}
                </span>
            </marquee>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    data() {
        return {
            marqueeContent: [],
        };
    },
    created() {
        this.getMarquee();
    },
    watch: {
        curLang() {
            this.getMarquee();
        },
    },
    computed: {
        ...mapGetters({
            curLang: 'getCurLang',
        }),
    },
}
</script>

<style lang="scss" scoped>
.marquee-wrap {
    background: rgba(67, 67, 67, 0.8);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 10px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;

    .marquee {
        display: flex;
        align-items: center;
        padding: 10px 0;
        color: #FFF;
        font-size: 12px;

        .title {
            font-family: Microsoft YaHei, 微软雅黑;
            min-width: 60px;
            margin-right: 6px;
            padding: 0 10px;
            text-align: left;
            color: #bfac8c;
            font-weight: bold;
        }
    }
}
</style>
