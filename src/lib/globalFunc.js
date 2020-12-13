
import common from '@/api/common';
import store from '../store';

export const globalFunc = {
    methods: {
        scrollToTop(scrollDuration) {
            const scrollStep = -window.scrollY / (scrollDuration / 40);
            const scrollInterval = setInterval(() => {
                if (window.scrollY !== 0) {
                    window.scrollBy(0, scrollStep);
                    return;
                }
                clearInterval(scrollInterval);
            }, 5);
        },
        // 取得跑馬燈
        getMarquee() {
            const data = {
                // params: {
                //     lang: store.getters.getCurLang,
                // },
                success: (res) => {
                    this.marqueeContent = res.data;
                },
            };

            common.getNews(data);
        },
        // 取得文案頁樣板
        getCopywrittingInfo(key, site = 'default') {
            const data = {
                params: {
                    key,
                    site,
                    lang: store.getters.getCurLang,
                },
                success: (res) => {
                    this.pageInfo = res.data.content;
                },
            };

            common.getCopywrittingInfo(data);
        },
    },
};
