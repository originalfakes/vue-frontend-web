<template>
    <div class="service-wrap">
        <img src="/static/tpl/1/title_service.png" class="title" />
        <div class="service">
            <div class="list">
                <img src="/static/tpl/1/service-01.png" class="service-img" />
                <span>60</span>
                <div class="sub-title">信誉资金托管</div>
                <div class="en">MORE WAYS TO PROTECT</div>
                <div class="info">独立开发，128位加密技术和严格的安全管理体系，让客户资金得到最完善的保障。</div>
            </div>
            <div class="list">
                <img src="/static/tpl/1/service-02.png" class="service-img" />
                <span>90</span>
                <div class="sub-title">90秒极速出款</div>
                <div class="en">MORE WAYS TO WIN</div>
                <div class="info">最新技术自主研发的财务处理系统，极速存、取、转。独家网络优化技术，为您提供一流的游戏体验。</div>
            </div>
            <div class="list">
                <img src="/static/tpl/1/service-03.png" class="service-img" />
                <span>80</span>
                <div class="sub-title">三端数据互通</div>
                <div class="en">MORE DEVICES ACCOUNT</div>
                <div class="info">支持各种终端设备，完美兼容PC、移动端。原生态App让您随时随地轻松投注。</div>
            </div>
            <div class="list">
                <img src="/static/tpl/1/service-04.png" class="service-img" />
                <span>19</span>
                <div class="sub-title">赛事覆盖全面</div>
                <div class="en">MORE EVENTS TO PLAY</div>
                <div class="info">每天提供超过500场不同类别的精彩赛事，涵盖世界范围内主要体育运动，让客户拥有最完美的游戏体验。</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.service-wrap {
    width: 1200px;
    min-height: 578px;
    margin: 110px auto 57px;
    text-align: left;

    .title {
        width: 399px;
        margin-bottom: 60px;
    }

    .service {
        display: flex;
        justify-content: space-around;

        .list {
            position: relative;
            width: 226px;
            text-align: center;

            .service-img {
                width: 185px;
                height: 213px;
            }

            span {
                position: absolute;
                left: -10px;
                top: 150px;
                font-size: 76px;
                color: #b8a37f;
            }

            .sub-title {
                margin-top: 79px;
                font-size: 22px;
                color: #2e384d;
                font-weight: 700;
            }

            .en {
                margin-top: 2px;
                font-size: 16px;
                color: #f1f2fe;
            }

            .info {
                font-size: 14px;
                color: #2e384d;
                margin-top: 16px;
                line-height: 22px;
            }
        }
    }
}
</style>
