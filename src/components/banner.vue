<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = ref([Pagination])
const onSwiper = (swiper) => {
    console.log(swiper);
};
const onSlideChange = () => {
    console.log('slide change');
};
</script>
<template>
    <div class="page-banner">
        <swiper :slides-per-view="1" :pagination="true" :modules="modules" :space-between="0" @swiper="onSwiper"
            @slideChange="onSlideChange">
            <swiper-slide>
                <div class="page-banner-jpg">
                    <!-- <img src="../assets/image/home_banner.png" alt=""> -->
                    <video ref="videoElement" autoplay loop muted preload="auto"
                        poster="../assets/image/home_banner.png" src="../assets/media/home_video.mp4"></video>
                </div>
                <div class="page-banner-text">
                    <div class="content">
                        <p class="title">
                            EurAsia and Shanghai University working <br> cooperative to host International Journal of
                            Sino-Western
                            Studies (IJS)
                        </p>
                        <p class="desc">
                            EurAsia and Prof Huang working together to host and index IJSWS in the ESCI and Scopus
                            database.
                        </p>
                        <div class="btns">
                            Read More
                        </div>
                    </div>
                </div>

            </swiper-slide>
            <swiper-slide>
                <div class="page-banner-jpg">
                    <!-- <img src="../assets/image/home_banner.png" alt=""> -->
                    <video ref="videoElement" autoplay loop muted preload="auto"
                        poster="../assets/image/home_banner.png" src="../assets/media/home_video.mp4"></video>
                </div>
                <div class="page-banner-text">
                    <div class="content">
                        <p class="title">
                            Unfold Your <span>Research, Equally</span> And Globally!
                        </p>
                        <p class="desc">
                            EurAsia Academic Publishing Group – a genuine meeting between east and west – unfolds
                            quality research equally and globally. <br>
                            EurAsia Academic Publishing Group (EAPG) is an independent International publisher that
                            publishes
                            online, peer-reviewed journals covering a wide range of academic disciplines. <br>
                            EAPG follows
                            strict
                            publication ethics published by COPE. All the articles published under the EAPG provide
                            copyrights
                            to the author providing their research high visibility and impact. Their articles are provided
                            with  unique <br>
                            Digital Object Identifier (DOI) that allows author, readers to identify the paper with no
                            difficulty.
                        </p>
                        <div class="btns">
                            Read More
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>

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

        video {
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
                font-family: 'Montserrat', sans-serif !important;

                span {
                    color: #E8705A;
                }
            }

            .desc {
                font-size: 20px;
                line-height: 30px;
                color: #FCFCFD;
                margin-bottom: 24px;
                margin-top: 17px;
                font-family: 'Montserrat', sans-serif !important;
            }

            .btns {
                cursor: pointer;
                width: 152px;
                height: 45px;
                border-radius: 5px;
                border: 1px solid #FFFFFF;
                font-size: 14px;
                line-height: 45px;
                text-align: center;
                margin: auto;
                color: #ffffff;
                font-family: 'Montserrat', sans-serif !important;

                &:hover {
                    border-color: #FCFCFD;
                    background: rgba(0, 0, 0, 0.5)
                }
            }
        }
    }
}
</style>
<style>
.page-banner .swiper-pagination {
    bottom: 102px;
}

.page-banner .swiper-pagination-bullet {
    background: #1F3C8A;
    opacity: 1;
}

.page-banner .swiper-pagination-bullet-active {
    background: #ffffff;
}
</style>