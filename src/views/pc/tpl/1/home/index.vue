<template>
    <div>
        <carousel />
        <marquee />
        <mainContent />
    </div>
</template>

<script>
import carousel from './carousel';
import marquee from './marquee';
import mainContent from './main';

export default {
    components: {
        carousel,
        marquee,
        mainContent,
    },

}
</script>
