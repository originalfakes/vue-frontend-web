<template>
    <div>
        <div class="title">{{ $t(title) }}</div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: () => '',
        },
    },
};
</script>

<style lang="scss" scoped>
.title {
    height: 70px;
    line-height: 70px;
    font-size: 16px;
    color: #39404d;
    font-weight: 600;
    border-bottom: 1px solid rgba(182, 197, 225, .3);
}
</style>
