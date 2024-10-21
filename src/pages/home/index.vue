<script setup>
import { ref, onMounted } from "vue";
import Banner from "@comments/banner.vue";
// import HomeVideo from '@comments/homeVideo.vue';
import UseCookieBanners from "@comments/cookieBanner.vue";
import moment from "moment";
import { homeConfig, news, banners, home_journals, HomeLinks } from "../../api/list.js";
const videoElement = ref(null);
const homeInfo = ref({
  plate_one_desc: "",
  plate_one_link: "",
  plate_two_desc: "",
  plate_two_image: "",
  plate_three_desc: "",
  plate_three_image: "",
  plate_four_list: [],
});
const journalItemActive = ref(1);
const journalsItems = ref([]);
let journalsItem = ref({});
const hoverItem = (item) => {
  console.log(item);
  journalItemActive.value = item.id;
  let params = {
    id: item.id,
  };
  home_journals
    .artList(params)
    .then((res) => {
      journalsItem.value = res.data.data;
    })
    .catch((err) => {});
};

const cookiesRef = ref(null);
const cookieRes = (type) => {
  localStorage.setItem("isUseCookies", type);
  showCookieBanners.value = false;
};
const showCookieBanners = ref(false);

let new_list = ref([]);
const getNews = () => {
  news.list().then((res) => {
    let data = res.data.data;
    if (data == null) return false;
    data.forEach((item) => {
      item.data_str = moment(item.modified).format("MMMM D, YYYY");
    });
    new_list.value = data;
  });
};

let journal_cates = ref([]);

const getJournalCates = () => {
  home_journals.cates().then((res) => {
    journal_cates.value = res.data.data;
    hoverItem(journal_cates.value[0]);
  });
};

let linkList = ref([]);
const getHomeLinks = () => {
  HomeLinks.list().then((res) => {
    linkList.value = res.data.data;
    linkList.value.forEach((item) => {
      item.cover_image = "https://ojs.cdwuhu.com/" + item.cover_image;
    });
  });
};
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        videoElement.value.play();
        observer.disconnect();
      }
    });
  });
  let isUseCookies = localStorage.getItem("isUseCookies");
  if (!isUseCookies || isUseCookies == null) {
    showCookieBanners.value = true;
  }
  homeConfig.info().then((res) => {
    let data = res.data;
    if (data.code == 0) {
      homeInfo.value = data.data;
    }
  });
  getNews();
  getHomeLinks();
  getJournalCates();
});
</script>
<template>
  <Banner />
  <div class="page-main">
    <div class="home-video-box">
      <div class="home-video-text">
        <p class="title">Unfold Your <span>Research, Equally</span> And Globally!</p>
        <p class="content">
          {{ homeInfo.plate_one_desc }}
        </p>
        <div class="btns">Read More</div>
      </div>
    </div>

    <div class="home-mission">
      <div>
        <div class="left-text">
          <p class="title">Our <span>Mission</span></p>
          <p class="desc">
            EurAsia Academic Publishing Group helps researchers to inspire a global
            community. We are dedicated to providing a platform for scholars to share
            their groundbreaking research and insights with a wider audience. Our team
            works diligently to ensure that each publication meets the highest academic
            standards, promoting the dissemination of knowledge across various fields. By
            fostering collaboration among researchers, we aim to create a vibrant network
            that encourages innovation and scholarly exchange. Our commitment to quality
            and accessibility ensures that important findings reach those who need them
            most. Join us in our mission to empower researchers and cultivate a thriving
            academic community worldwide.
          </p>
        </div>
        <div class="right-img">
          <img src="../../assets/image/mission.jpg" alt="" />
        </div>
      </div>
    </div>
    <div class="home-mission home-vision">
      <div>
        <div class="right-img">
          <img src="../../assets/image/mission2.jpg" alt="" />
        </div>
        <div class="left-text">
          <p class="title">Our <span>Vision</span></p>
          <p class="desc">
            All researchers have the opportunity to realize their full potential and
            transform their societies. At EurAsia Academic Publishing Group, we believe
            that every study has the power to spark change and drive progress. Our
            platform provides researchers with the resources, support, and visibility they
            need to share their findings effectively. By connecting with a global
            audience, researchers can inspire new ideas and solutions that address
            pressing challenges. We are committed to fostering an environment where
            innovation thrives and diverse perspectives are valued. Together, we can build
            a brighter future through the power of research and collaboration.
          </p>
        </div>
      </div>
    </div>
    <div class="homve-journals">
      <div class="journals">
        <div class="head">
          <p class="title">Our <span>Journals</span></p>
          <div class="btns">
            <div
              :class="{ active: journalItemActive === item.id }"
              @mouseover="hoverItem(item, index)"
              v-for="(item, i) in journal_cates"
              :key="i"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="main">
          <div class="info">
            <p class="title">
              {{ journalsItem.enname }}
            </p>
            <div v-html="journalsItem.dsp"></div>
            <div class="btns">
              <a href="">View Journal</a>
              <a href="">Current Issue</a>
            </div>
          </div>
          <img src="../../assets/image/journals.png" alt="" />
        </div>
      </div>
    </div>
    <div class="home-news">
      <div class="news">
        <p class="title">Latest <span>News</span></p>
        <div class="news-list">
          <div class="recommend">
            <a-row class="grid-demo" :gutter="32">
              <a-col :span="12" v-for="(item, index) in new_list" :key="index">
                <div class="item" style="margin-bottom: 40px">
                  <img :src="item.custom_image" alt="" />
                  <div class="content">
                    <p class="time">
                      {{ item.data_str }}
                    </p>
                    <div class="title">
                      <p>{{ item.title.rendered }}</p>
                      <img src="../../assets/image/arrow-up-right.png" alt="" />
                    </div>
                    <div class="desc" v-html="item.excerpt.rendered"></div>
                    <p class="update">{{ item.reading_time }}</p>
                  </div>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
    </div>
    <div class="home-services">
      <div class="services">
        <p class="title">Services <span>We Offer</span></p>
        <p class="desc">
          EurAsia Academic Publishing Group offers different publishing solutions to the
          scientific community. We offer publishing services to universities and other
          organizations that are seeking a partner to publish all or some of their English
          language journals, books and other publications. This applies to new
          publications and to previously published books and back journal volumes. We
          publish monographs, textbooks, edited volumes, and other categories.
        </p>

        <div class="contents">
          <div class="items">
            <a-row :gutter="32">
              <a-col :span="12">
                <div class="item" style="margin-bottom: 40px">
                  <p class="title">
                    CLASSIC
                    <img src="../../assets/image/arrow-up-right.png" alt="" />
                  </p>
                  <ul>
                    <li>Hosting Platform</li>
                    <li>Wide Electronic Distribution</li>
                    <li>Content and Journal Indexing</li>
                    <li>Account Management</li>
                  </ul>
                </div>
                <div class="item" style="margin-bottom: 0px">
                  <p class="title">
                    STANDARD
                    <img src="../../assets/image/arrow-up-right.png" alt="" />
                  </p>
                  <ul>
                    <li>Hosting Platform</li>
                    <li>Wide Electronic Distribution</li>
                    <li>Content and Journal Indexing</li>
                    <li>Account Management</li>
                  </ul>
                </div>
              </a-col>
              <a-col :span="12">
                <div class="item item2" style="margin-bottom: 40px">
                  <p class="title">
                    CLASSIC
                    <img src="../../assets/image/arrow-up-right.png" alt="" />
                  </p>
                  <ul>
                    <li>Hosting Platform</li>
                    <li>Wide Electronic Distribution</li>
                    <li>Content and Journal Indexing</li>
                    <li>Account Management</li>
                    <li>Online Submission System</li>
                    <li>Typesetting and Proofreading</li>
                    <li>Fulltext XML Publication</li>
                    <li>Copyediting (heavy edit)</li>
                    <li>Marketing Extra Package</li>
                    <li>Consulting</li>
                  </ul>
                </div>
              </a-col>
            </a-row>
          </div>
        </div>
        <div class="sign">Join Maiiling List</div>
      </div>
    </div>
    <div class="home-imgs">
      <div class="imgs">
        <img
          :src="item.cover_image"
          v-for="(item, index) in linkList"
          :key="index"
          alt=""
        />
      </div>
    </div>
  </div>
  <UseCookieBanners v-if="showCookieBanners" ref="cookiesRef" @cookieRes="cookieRes" />
</template>
<style lang="less" scoped>
@import url("./style.less");
</style>
<style></style>
