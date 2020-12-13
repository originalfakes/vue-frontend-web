<template>
    <div class="marquee-wrap">
        <div class="marquee">
            <div class="title">{{ $t('S_ANNOUNCEMENT') }}</div>
            <marquee scrolldelay=190 width=972>
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

    .marquee {
        display: flex;
        align-items: center;
        width: 1200px;
        margin: 0 auto;
        padding: 10px 0;

        .title {
            font-family: Microsoft YaHei, 微软雅黑;
            margin-right: 40px;
            padding: 0 10px;
            color: #bfac8c;
            font-size: 20px;
            font-weight: bold;
        }
    }
}

@keyframes marquee {
    0% {
        transform: translateX(1100px);
    }
    100% {
        transform: translateX(0);
    }
}
</style>
