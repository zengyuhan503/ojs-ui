<script setup>
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { banners } from "../api/list.js";

const modules = ref([Pagination]);
const onSwiper = (swiper) => {
  // console.log(swiper);
};
const onSlideChange = () => {
  // console.log("slide change");
};

let banner_list = ref([]);
const getBanners = () => {
  banners.list().then((res) => {
    // console.log(res);
    let items = res.data.data;
    items.forEach((item) => {
      item.lit_image = "https://ojs.cdwuhu.com/" + item.lit_image;
      item.lit_file = "https://ojs.cdwuhu.com/" + item.lit_file;
    });
    banner_list.value = res.data.data;
  });
};
onMounted(() => {
  getBanners();
});
</script>
<template>
  <div class="page-banner">
    <swiper
      :slides-per-view="1"
      :pagination="true"
      :modules="modules"
      :space-between="0"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in banner_list" :key="index">
        <div class="page-banner-jpg">
          <!-- <img src="../assets/image/home_banner.png" alt=""> -->
          <video
            ref="videoElement"
            autoplay
            loop
            muted
            preload="auto"
            :poster="item.lit_image"
            :src="item.lit_file"
          ></video>
        </div>
        <div class="page-banner-text">
          <div class="content">
            <p class="title">
              {{ item.name }}
            </p>
            <p class="desc">
              {{ item.dsp }}
            </p>
            <div class="btns">Read More</div>
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
        color: #ffffff;
        padding-bottom: 17px;
        border-bottom: 1px solid #ffffff;
        font-family: "Montserrat", sans-serif !important;

        span {
          color: #e8705a;
        }
      }

      .desc {
        font-size: 20px;
        line-height: 30px;
        color: #fcfcfd;
        margin-bottom: 24px;
        margin-top: 17px;
        font-family: "Montserrat", sans-serif !important;
      }

      .btns {
        cursor: pointer;
        width: 152px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #ffffff;
        font-size: 14px;
        line-height: 45px;
        text-align: center;
        margin: auto;
        color: #ffffff;
        font-family: "Montserrat", sans-serif !important;

        &:hover {
          border-color: #fcfcfd;
          background: rgba(0, 0, 0, 0.5);
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
  background: #1f3c8a;
  opacity: 1;
}

.page-banner .swiper-pagination-bullet-active {
  background: #ffffff;
}
</style>
