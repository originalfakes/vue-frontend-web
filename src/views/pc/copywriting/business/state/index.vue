<template>
    <div class="content">
        <div v-html="pageInfo"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageInfo: '',
        }
    },
    created() {
        this.getCopywrittingInfo('ex_stateme');
    },
}
</script>

<style lang="scss" scoped>
@import '../../scss/index.scss';
</style>
