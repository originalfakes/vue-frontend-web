<template>
    <div class="container">
        <div class="bg" />
        <div class="home-btn">
            <span @click="$router.push('/')">{{ $t('S_GO_HOME') }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    min-height: 100vh;

    .bg {
        background: url('/static/404.jpg') 20% 0 no-repeat;
        height: 380px;
    }

    .home-btn {
        margin: 10px 0 0 109px;

        span {
            display: inline-block;
            padding: 12px 24px;
            font-weight: 700;
            font-size: 16px;
            border: 2px solid #dae1e7;
            border-radius: 6px;
            color: #3d4852;
            cursor: pointer;

            &:hover {
                border-color: #b8c2cc;
            }
        }
    }
}

//     .left {
//         width: 50%;

//         .title {
//             font-weight: 900;
//             font-size: 40px;
//             color: #22292f;
//         }

//         .bar {
//             margin: 20px 0;

//             .line {
//                 width: 200px;
//                 height: 10px;
//                 background-color: #a779e9;
//             }
//         }
//     }

// }
</style>
