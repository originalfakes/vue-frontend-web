<template>
  <div id="app">
    <notifications group="edit" position="top center" :duration="1000" />
    <router-view />
  </div>
</template>

<script>
import isMobile from '@/lib/isMobile';

export default {
    mounted() {
        if (isMobile()) {
            document.body.classList.add('mobile');
        }
    },
    watch: {
        $route(to) {
            if (to.name === 'mobileHome') {
                document.body.classList.add('mobile-home');
                return;
            }
            document.body.classList.remove('mobile-home');
        },
    },
};
</script>

<style lang="scss">
body,
html {
    height: 100%;
}

body {
    min-width: 1370px;
    font-family: "Microsoft YaHei", 微软雅黑 !important;

    &.mobile {
        min-width: auto;
        font-family: sans-serif, '微軟正黑體' !important;
    }

    &.mobile-home {
        overflow: hidden;
    }
}

html, body, div, span, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, img,
dl, dt, dd, ol, ul, li,
table, tbody, thead, tr, th, td {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
}
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1; /*For IE 6&7 only*/
}
input {
  outline: none;
}
</style>
