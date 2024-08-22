<script setup>
import { ref, onMounted } from 'vue'
import Banner from '@comments/banner.vue'
// import HomeVideo from '@comments/homeVideo.vue';
import UseCookieBanners from '@comments/cookieBanner.vue'

const videoElement = ref(null);

const journalItemActive = ref(1);
const journalsItems = ref([
    {
        name: "BIOSIS",
        content: `
          5  Biological Systems is an international fully peer-reviewed and
            Committee on Publication Ethics (COPE) compliant open access Journal that is published
            online with a quarterly frequency. The goal of this journal...
        `
    },
    {
        name: "NANOFABRICATION",
        content: `
          4  Biological Systems is an international fully peer-reviewed and
            Committee on Publication Ethics (COPE) compliant open access Journal that is published
            online with a quarterly frequency. The goal of this journal...
        `
    },
    {
        name: "IJS",
        content: `
          3  Biological Systems is an international fully peer-reviewed and
            Committee on Publication Ethics (COPE) compliant open access Journal that is published
            online with a quarterly frequency. The goal of this journal...
        `
    },
    {
        name: "BPH",
        content: `
          2  Biological Systems is an international fully peer-reviewed and
            Committee on Publication Ethics (COPE) compliant open access Journal that is published
            online with a quarterly frequency. The goal of this journal...
        `
    },
    {
        name: "Human Brain",
        content: `
           1 Biological Systems is an international fully peer-reviewed and
            Committee on Publication Ethics (COPE) compliant open access Journal that is published
            online with a quarterly frequency. The goal of this journal...
        `
    },
])
const hoverItem = (index) => {
    if (index == journalItemActive.value) return false
    journalItemActive.value = index
}

const cookiesRef = ref(null)
const cookieRes = (type) => {
    localStorage.setItem('isUseCookies', type);
    showCookieBanners.value = false
}
const showCookieBanners = ref(false);

onMounted(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                videoElement.value.play();
                observer.disconnect();
            }
        });
    });
    let isUseCookies = localStorage.getItem('isUseCookies');
    console.log(isUseCookies)
    if (!isUseCookies || isUseCookies == null) {
        showCookieBanners.value = true
    }
})

</script>
<template>
    <Banner />
    <div class="page-main">
        <div class="home-video-box">
            <div class="home-video-text">
                <p class="title">Unfold Your <span>Research, Equally</span> And Globally!</p>
                <p class="content">EurAsia Academic Publishing Group – a genuine meeting between east and west – unfolds
                    quality research equally and globally.
                    EurAsia Academic Publishing Group (EAPG) is an independent International publisher that publishes
                    online, peer-reviewed journals covering a wide range of academic disciplines. EAPG follows strict
                    publication ethics published by COPE. All the articles published under the EAPG provide copyrights
                    to
                    the author providing their research high visibility and impact. Their articles are provided with
                    unique
                    Digital Object Identifier (DOI) that allows author, readers to identify the paper with no
                    difficulty.
                </p>
                <div class="btns">Read More</div>
            </div>
        </div>
        <div class="home-mission">
            <div>
                <div class="left-text">
                    <p class="title">
                        Our <span>Mission</span>
                    </p>
                    <p class="desc">EurAsia Academic Publishing Group helps researchers to inspire a global community.
                        We are
                        dedicated to providing a platform for scholars to share their groundbreaking research and
                        insights with a wider audience. Our team works diligently to ensure that each publication meets
                        the highest academic standards, promoting the dissemination of knowledge across various fields.
                        By fostering collaboration among researchers, we aim to create a vibrant network that encourages
                        innovation and scholarly exchange. Our commitment to quality and accessibility ensures that
                        important findings reach those who need them most. Join us in our mission to empower researchers
                        and cultivate a thriving academic community worldwide.</p>
                </div>
                <div class="right-img">
                    <img src="../../assets/image/mission.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="home-mission home-vision">
            <div>
                <div class="right-img">
                    <img src="../../assets/image/mission2.jpg" alt="">
                </div>
                <div class="left-text">
                    <p class="title">
                        Our <span>Vision</span>
                    </p>
                    <p class="desc">All researchers have the opportunity to realize their full potential and transform
                        their societies. At EurAsia Academic Publishing Group, we believe that every study has the power
                        to spark change and drive progress. Our platform provides researchers with the resources,
                        support, and visibility they need to share their findings effectively. By connecting with a
                        global audience, researchers can inspire new ideas and solutions that address pressing
                        challenges. We are committed to fostering an environment where innovation thrives and diverse
                        perspectives are valued. Together, we can build a brighter future through the power of research
                        and collaboration.</p>
                </div>
            </div>
        </div>
        <div class="homve-journals">
            <div class="journals">
                <div class="head">
                    <p class="title">
                        Our <span>Journals</span>
                    </p>
                    <div class="btns">
                        <div :class="{ active: journalItemActive === i }" @mouseover="hoverItem(i)"
                            v-for="(item, i) in journalsItems" :key="i">
                            {{ item.name }}
                        </div>
                    </div>
                </div>
                <div class="main">
                    <div class="info">
                        <p class="title">
                            {{ journalsItems[journalItemActive].name }}
                        </p>
                        <p class="desc">
                            {{ journalsItems[journalItemActive].content }}
                        </p>
                        <div class="btns">
                            <a href="">View Journal</a>
                            <a href="">Current Issue</a>
                        </div>
                    </div>
                    <img src="../../assets/image/journals.png" alt="">
                </div>
            </div>
        </div>
        <div class="home-news">
            <div class="news">
                <p class="title">Latest <span>News</span></p>
                <div class="news-list">
                    <div class="recommend">
                        <a-row class="grid-demo" :gutter="32">
                            <a-col :span="12">
                                <div class="item" style="margin-bottom: 40px;">
                                    <img src="../../assets/image/news.png" alt="">
                                    <div class="content">
                                        <p class="time">
                                            August 29, 2021
                                        </p>
                                        <div class="title">
                                            <p>Importance of <span>Board Members</span></p>
                                            <img src="../../assets/image/arrow-up-right.png" alt="">
                                        </div>
                                        <p class="desc">
                                            The importance of capable board members in the <br>
                                            research fields-Xuefeng Zhu nominated to the SMT board.
                                        </p>
                                        <p class="update">
                                            5 min read
                                        </p>
                                    </div>
                                </div>
                            </a-col>
                            <a-col :span="12" style="margin-bottom: 40px;">
                                <div class="item">
                                    <img src="../../assets/image/news.png" alt="">
                                    <div class="content">
                                        <p class="time">
                                            August 29, 2021
                                        </p>
                                        <div class="title">
                                            <p>Importance of <span>Board Members</span></p>
                                            <img src="../../assets/image/arrow-up-right.png" alt="">
                                        </div>
                                        <p class="desc">
                                            The importance of capable board members in the <br>
                                            research fields-Xuefeng Zhu nominated to the SMT board.
                                        </p>
                                        <p class="update">
                                            5 min read
                                        </p>
                                    </div>
                                </div>
                            </a-col>
                            <a-col :span="8">
                                <div class="item">
                                    <img src="../../assets/image/news.png" alt="">
                                    <div class="content">
                                        <p class="time">
                                            August 29, 2021
                                        </p>
                                        <div class="title">
                                            <p>Importance of <span>Board Members</span></p>
                                            <img src="../../assets/image/arrow-up-right.png" alt="">
                                        </div>
                                        <p class="desc">
                                            The importance of capable board members in the <br>
                                            research fields-Xuefeng Zhu nominated to the SMT board.
                                        </p>
                                        <p class="update">
                                            5 min read
                                        </p>
                                    </div>
                                </div>
                            </a-col>
                            <a-col :span="8">
                                <div class="item">
                                    <img src="../../assets/image/news.png" alt="">
                                    <div class="content">
                                        <p class="time">
                                            August 29, 2021
                                        </p>
                                        <div class="title">
                                            <p>Importance of <span>Board Members</span></p>
                                            <img src="../../assets/image/arrow-up-right.png" alt="">
                                        </div>
                                        <p class="desc">
                                            The importance of capable board members in the <br>
                                            research fields-Xuefeng Zhu nominated to the SMT board.
                                        </p>
                                        <p class="update">
                                            5 min read
                                        </p>
                                    </div>
                                </div>
                            </a-col>
                            <a-col :span="8">
                                <div class="item">
                                    <img src="../../assets/image/news.png" alt="">
                                    <div class="content">
                                        <p class="time">
                                            August 29, 2021
                                        </p>
                                        <div class="title">
                                            <p>Importance of <span>Board Members</span></p>
                                            <img src="../../assets/image/arrow-up-right.png" alt="">
                                        </div>
                                        <p class="desc">
                                            The importance of capable board members in the <br>
                                            research fields-Xuefeng Zhu nominated to the SMT board.
                                        </p>
                                        <p class="update">
                                            5 min read
                                        </p>
                                    </div>
                                </div>
                            </a-col>

                        </a-row>
                    </div>
                </div>
            </div>
        </div>
        <div class="home-servers">
            <div class="servers">
                <p class="title">Services <span>We Offer</span></p>
                <p class="desc">EurAsia Academic Publishing Group offers different publishing solutions to the
                    scientific community. We offer publishing services to universities and other organizations that are
                    seeking a partner to publish all or some of their English language journals, books and other
                    publications. This applies to new publications and to previously published books and back journal
                    volumes. We publish monographs, textbooks, edited volumes, and other categories.</p>

                <div class="contents">
                    <div class="items">
                        <a-row :gutter="32">
                            <a-col :span="12">
                                <div class="item" style="margin-bottom: 40px;">
                                    <p class="title">
                                        CLASSIC
                                        <img src="../../assets/image/arrow-up-right.png" alt="">
                                    </p>
                                    <ul>
                                        <li>Hosting Platform</li>
                                        <li>Wide Electronic Distribution</li>
                                        <li>Content and Journal Indexing</li>
                                        <li>Account Management</li>
                                    </ul>
                                </div>
                                <div class="item" style="margin-bottom: 0px;">
                                    <p class="title">
                                        STANDARD
                                        <img src="../../assets/image/arrow-up-right.png" alt="">
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
                                <div class="item item2" style="margin-bottom: 40px;">
                                    <p class="title">
                                        CLASSIC
                                        <img src="../../assets/image/arrow-up-right.png" alt="">
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
                <div class="sign">
                    Join Maiiling List
                </div>
            </div>
        </div>
        <div class="home-imgs">
            <div class="imgs">
                <img src="../../assets/image/home-imgs.png" alt="">
            </div>
        </div>
    </div>
    <UseCookieBanners v-if="showCookieBanners" ref='cookiesRef' @cookieRes="cookieRes" />
</template>
<style lang="less" scoped>
@import url('./style.less');
</style>
<style></style>