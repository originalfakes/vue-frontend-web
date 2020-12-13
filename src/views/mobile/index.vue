<template>
    <div class="home">
        <component :is="templateName" />
    </div>
</template>

<script>
export default {
    components: {
        template1: () => import('./tpl/1'),
    },
    computed: {
        templateName() {
            return `template${1}`;
        },
    },
}
</script>
