<template>
    <div class="swiper-contain">
        <swiper v-if="sliderList.length >= 1" :options="swiperOption" ref="swiper">
            <!-- slides -->
            <swiper-slide
                v-for="item in sliderList"
                :key="item.id"
            >
                <!-- <div class="slider"
                    :style="{
                        background: `url(${item.image_file.replace('..', 'http://z00.ateam99.net')}) 50% 0 no-repeat`
                    }"
                /> -->
                <img :src="`${item.image_file.replace('..', 'http://z00.ateam99.net')}`" width="100%" height="460px" />
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';
import common from '@/api/common';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    directives: {
        swiper: directive,
    },
    data() {
        return {
            swiperOption: {
                // 設定初始化時slide的索引
                initialSlide: 0,
                loop:true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                direction : 'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class=${className}></span>`;
                    },
                },
                // effect : 'fade',
            },
            sliderList: [],
        }
    },
    created() {
        this.getAdSilder();
    },
    computed: {
        swiper() {
            return this.$refs.swiper.swiper;
        },
    },
    methods: {
        getAdSilder() {
            const data = {
                params: {
                    device: 1,
                },
                success: (res) => {
                    this.sliderList = res.data;
                },
            };

            common.getAdSlider(data);
        },
    },
};
</script>

<style lang="scss" scoped>
.swiper-contain {
    padding-top: 80px;

    .swiper-pagination {
        width: auto;
        left: 50%;
        bottom: 20px;
        transform: translateX(-50%);

        /deep/ .swiper-pagination-bullet {
            width: 30px;
            height: 3px;
            margin-right: 3px;
            margin-left: 3px;
            border-radius: unset;
        }
    }
    --swiper-pagination-color: #fff;
}
.slider {
    height: 610px;
    background-size: cover !important;
}
.swiper-pagination {
    width: 10px;
    height: 10px;
}
</style>
