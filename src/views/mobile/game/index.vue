<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="$router.go(-1)">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">game</div>
            <div class="right">
                <img src="/static/mobile/ic_nav_search.png" />
            </div>
        </div>
        <div class="nav">
            <div class="list active">全部</div>
            <div class="list">熱門</div>
            <div class="list">收藏</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
.nav {
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    height: 44px;
    line-height: 44px;
    padding: 0 10px;

    .list {
        color: #666;

        &.active {
            color: #8b744d;
        }
    }
}
</style>
