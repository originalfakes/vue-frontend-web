<template>
    <div class="modal-wrap">
        <div class="modal">
            <div class="title">{{ $t('S_LOGIN_REMIDER') }}</div>
            <div class="content">{{ $t('S_ONLY_TO_LOGIN_USER') }}</div>
            <div class="btn-wrap">
                <div class="btn btn-close" @click="$emit('closeModal', false)">{{ $t('S_CLOSE') }}</div>
                <div class="btn btn-register" @click="$router.push('/mobile/login')">{{ $t('S_REGISTER_AND_LOGIN') }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal-wrap {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.6);
    z-index: 2;

    .modal {
        background-color: #fff;
        position: fixed;
        top: 50%;
        left: 50%;
        width: 90%;
        min-height: 200px;
        padding: 10px 20px;
        border-radius: 8px;
        transform: translate(-50%,-50%);
        color: #263440;
        text-align: center;

        .title {
            font-size: 19px;
        }

        .content {
            margin: 40px 0;
            font-size: 16px;
        }

        .btn-wrap {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 10px;
            font-size: 15px;

            .btn {
                width: 48%;
                height: 44px;
                line-height: 44px;
                text-align: center;
                color: #FFF;
                border-radius: 6px;
            }

            .btn-close {
                background: linear-gradient(270deg,#2cb9c0,#70e9e9 98%);
            }

            .btn-register {
                background: linear-gradient(270deg,#8b744d,#b8a37f);
            }
        }
    }
}
</style>
