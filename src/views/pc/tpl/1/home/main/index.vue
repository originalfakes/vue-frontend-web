<template>
    <div class="container">
        <appDownload />
        <gameContent />
        <service />
    </div>
</template>

<script>
import appDownload from './appDownload';
import gameContent from './gameContent';
import service from './service';

export default {
    components: {
        appDownload,
        gameContent,
        service,
    },
};
</script>

<style lang="scss" scoped>
</style>
