<script setup>
import Banner from './banner.vue';
</script>
<template>
    <Banner />
    <div class="page-main">
        <a-row :gutter="24">
            <a-col flex="863px" class="grid-demo">
                <div class="left-content">
                    <p class="title">
                        Our <span>
                            Journals
                        </span>
                    </p>
                    <p class="desc">
                        EurAsia Academic Publishing Group (EAPG) is an independent International publisher that
                        publishes online,
                        peer-reviewed journals covering a wide range of academic disciplines. EAPG follows strict
                        publication ethics
                        published by COPE. All the articles published under the EAPG provide copyrights to the author
                        providing
                        their research high visibility and impact. Their articles are provided with unique Digital
                        Object Identifier
                        (DOI) that allows author, readers to identify the paper with no difficulty.
                    </p>
                    <div class="list">
                        <a-row class="grid-demo" :gutter="20">
                            <a-col :span="12">
                                <div class="item">
                                    <img src="../../assets/image/journals-list-img.png" alt="">
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="item">
                                    <img src="../../assets/image/journals-list-img.png" alt="">
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="item">
                                    <img src="../../assets/image/journals-list-img.png" alt="">
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="item">
                                    <img src="../../assets/image/journals-list-img.png" alt="">
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="item">
                                    <img src="../../assets/image/journals-list-img.png" alt="">
                                </div>
                            </a-col>
                            <a-col :span="12">
                                <div class="item">
                                    <img src="../../assets/image/journals-list-img.png" alt="">
                                </div>
                            </a-col>
                        </a-row>
                    </div>
                </div>
            </a-col>
            <a-col flex="353px" class="grid-demo">
                <div class="right-content">
                    <p class="title">
                        Unfold Your <span>Research, Equally And Globally!</span>
                    </p>
                    <p class="desc">
                        EurAsia Academic Publishing Group
                        – a genuine meeting between east
                        and west – unfolds quality research
                        equally and globally. EurAsia
                        Academic Publishing Group (EAPG)
                        is an independent International
                        publisher that publishes online,
                        peer-reviewed journals covering a
                        wide range of academic disciplines.
                        EAPG follows strict publication ethics
                        published by COPE. All the articles
                        published under the EAPG provide
                        copyrights to the author providing
                        their research high visibility and
                        impact. Their articles are provided
                        with unique Digital Object Identifier
                        (DOI) that allows author, readers to
                        identify the paper with no difficulty.
                    </p>
                    <p class="text">
                        Tweets by EurasiaAcademic
                    </p>
                    <div class="lang">
                        <span>
                            Language
                        </span>
                        <p>English</p>
                        <p>Español (España)</p>
                        <p>Português (Brasil)</p>
                        <p>简体中文</p>
                    </div>
                </div>
            </a-col>
        </a-row>
    </div>
</template>
<style lang="less" scoped>
.page-main {
    font-family: 'Poppins', sans-serif;
    width: 1240px;
    margin: auto;
    padding: 80px 0;
    display: flex;
    background: #FFFAF9;

    .left-content {
        .title {

            font-size: 40px;
            font-weight: 600;
            line-height: 30px;
            color: #1F3C8A;
            line-height: 60px;

            span {
                color: #E8705A;
            }
        }

        .desc {
            margin-top: 8px;
            font-size: 14px;
            line-height: 27px;
            color: #101828;
        }

        .list {
            margin-top: 48px;

            .item {
                margin-bottom: 48px;

                img {
                    width: 100%;
                    border-radius: 20px;
                    cursor: pointer;
                }
            }
        }
    }

    .right-content {
        padding: 0 20px;

        .title {
            font-size: 20px;
            font-weight: 600;
            line-height: 30px;
            color: #1F3C8A;
            line-height: 30px;

            span {
                color: #E8705A;
            }
        }

        .desc {
            margin-top: 8px;
            font-size: 16px;
            line-height: 27px;
            color: #101828;
        }

        .text {
            color: #1F3C8A;
            font-size: 14px;
            line-height: 24.99px;
            margin: 12px 0;
        }

        .lang {
            &>span {
                color: #1F3C8A;
                font-size: 20px;
                line-height: 30px;
                margin-bottom: 8px;
            }

            &>p {
                color: #344054;
                font-size: 14px;
                line-height: 20px;
                margin-bottom: 10px;
            }
        }
    }
}
</style>