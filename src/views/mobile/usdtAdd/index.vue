<template>
    <div class="container">
        <div class="header">
            <div class="icon" @click="$router.go(-1)">
                <img src="/static/mobile/mcenter/icon_nav_back.png" />
            </div>
            <div class="title">{{ $t('S_ADD_USDT') }}</div>
            <div class="right" />
        </div>
    </div>
</template>
<script>
import { checkSession } from '@/lib/mcenterFunc';

export default {
    beforeRouteEnter(to, from, next) {
        checkSession(to, from, next);
    },
}
</script>

<style lang="scss" scoped>
@import '../scss/inner_header.scss';
</style>
