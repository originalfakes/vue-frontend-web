<template>
    <div class="game-bg">
        <div class="container">
            <div class="left">
                <div class="title">{{ $t("S_PROMOTION") }}</div>
                <hr>
                <div class="list-wrap">
                    <div
                        v-for="item in promotionList"
                        :key="`list-${item.id}`"
                        class="list"
                        :class="{
                            active: item.id === curList
                        }"
                    >
                        <img :src="`/static/promotions/promotion_${item.id}.png`" />
                        <span class="text">{{ $t(item.text) }}</span>
                    </div>
                </div>
            </div>
            <div class="right"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            promotionList: [
                {
                    id: '1',
                    text: 'S_ALL_ACTIVITY',
                },
                {
                    id: '2',
                    text: 'S_MONTH_HOT',
                },
                {
                    id: '3',
                    text: 'S_NEW_REGISTER',
                },
                {
                    id: '4',
                    text: 'S_DEPOSIT_PROMOTION',
                },
            ],
            curList: '1',
        };
    },
}
</script>

<style lang="scss" scoped>
.game-bg {
    background: url('/static/promotions/league_bg.jpg') 50% 50% no-repeat;
    background-size: cover;
    min-height: 500px;
    margin-top: 80px;
    padding-bottom: 48px;

    .container {
        display: flex;
        width: 1140px;
        margin: 0 auto;
        padding: 0 15px;

        .left {
            flex: 0 0 17%;
            padding: 48px 15px 0;
            background: #fff;
            box-shadow: 0 5px 12px 5px rgba(195, 209, 234, .16);
            text-align: left;

            .title {
                margin: 0 0 8px 16px;
                font-size: 16px;
            }

            hr {
                margin: 16px 0 8px;
                border: 0;
                border-top: 1px solid rgba(182,197,225,.3);
            }

            .list {
                display: flex;
                align-items: center;
                padding: 16px;
                color: #707070;
                font-size: 16px;
                cursor: pointer;

                &.active {
                    color: #5b6ef2;
                    font-weight: bold;
                }

                &:hover {
                    color: #5b6ef2;
                }

                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }

        .right {
            flex: 0 0 83%;
            height: 500px;
        }
    }
}
</style>
