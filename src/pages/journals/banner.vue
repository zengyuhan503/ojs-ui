<script setup></script>
<template>
    <div class="page-banner">
        <div class="page-banner-jpg">
            <img src="../../assets/image/journals-list.png" alt="">
        </div>
        <div class="page-banner-text">
            <div class="content">
                <p class="title">
                    Unfold Your Research, Equally And Globally!
                </p>
                <p class="desc">
                    EurAsia Academic Publishing Group – a genuine meeting between east and west – unfolds quality research equally and globally. EurAsia Academic Publishing Group (EAPG) is an independent International publisher that publishes online, peer-reviewed journals covering a wide range of academic disciplines.
                </p>
               
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.page-banner {
    width: 100%;
    position: relative;

    .page-banner-jpg {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .page-banner-text {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .content {
            width: 1240px;
            text-align: center;

            .title {
                font-size: 48px;
                line-height: 72px;
                color: #FFFFFF;
                padding-bottom: 17px;
                border-bottom: 1px solid #FFFFFF;
            }

            .desc {
                font-size: 20px;
                line-height: 30px;
                color: #FCFCFD;
                margin-bottom: 24px;
                margin-top: 17px;
            }
        }
    }
}
</style>