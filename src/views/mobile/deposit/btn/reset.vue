<template>
    <div class="btn-reset" @click="func">{{ title }}</div>
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
.btn-reset {
    background: linear-gradient(270deg,#2cb9c0,#70e9e9 98%);
    width: 48%;
    height: 44px;
    line-height: 44px;
    font-size: 15px;
    color: #fff;
    border-radius: 6px;
}
</style>
