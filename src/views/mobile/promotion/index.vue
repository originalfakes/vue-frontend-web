<template>
    <div class="promotion-wrap">
        <div class="header">{{ $t('S_PROMOTION') }}</div>
        promotion
        <homeFooter />
    </div>
</template>

<script>
import homeFooter from '../tpl/1/homeFooter';

export default {
    components: {
        homeFooter,
    },
};
</script>

<style lang="scss" scoped>
.promotion-wrap {
    min-height: 100vh;
    background-color: #f1f4f5;

    .header {
        background-color: #fff;
        height: 44px;
        line-height: 44px;
        font-size: 16px;
        color: #333;
    }
}
</style>
