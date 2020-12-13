<template>
    <div class="btn-confirm">{{ title }}</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        func: {
            type: Function,
            default: () => ({}),
        },
    },
}
</script>

<style lang="scss" scoped>
.btn-confirm {
    background: linear-gradient(270deg,#8b744d,#b8a37f);
    width: 48%;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    color: #fff;
    border-radius: 6px;
}
</style>
