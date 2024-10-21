<script setup>
import { ref, onMounted } from "vue";
import { home_journals } from "../../api/list.js";
import moment from "moment";
import { useRouter, useRoute } from "vue-router";
let useroute = useRoute();
let j_id = useroute.query.id;
let j_info = ref({});
const getInfo = () => {
  let params = {
    id: j_id,
  };
  home_journals.artList(params).then((res) => {
    // console.log(res);
    j_info.value = res.data.data;
  });
};
onMounted(() => {
  // console.log(useroute);
  getInfo();
});
</script>
<template>
  <div style="background: #fffaf9">
    <div class="page-info">
      <a-row :gutter="24">
        <a-col flex="863px" class="grid-demo">
          <div class="left-content">
            <p class="title">{{ j_info.abbreviation }}</p>
            <div class="desc" v-html="j_info.description"></div>
            <img src="../../assets/image/journal_info_img.png" class="cover" alt="" />
            <div class="info-content">
              <p class="title">About The Journal</p>
              <p class="desc" v-html="j_info.about"></p>
            </div>
            <div class="articles">
              <p class="articles-btn">
                <a href="">Latest Articles</a>
              </p>
              <div class="items">
                <a-row :gutter="20">
                  <a-col :span="12">
                    <div class="item">
                      <p class="label">Review Article</p>
                      <p class="title">
                        Photocatalytic efficiency of green synthesized ZnO nanoparticles
                        for the degradation of methyl orange dye: A review
                      </p>
                      <p class="desc">
                        Naveen Thakur, Nikesh Thakur, Kuldeep Kumar, Vedpriya Arya,
                        Ashwani Kumar, Susheel Kalia
                      </p>
                      <div class="datas">
                        <img src="../../assets/image/calendar.png" alt="" />
                        <span>20-11-2022</span>
                        <a-divider direction="vertical" />
                        <img src="../../assets/image/eye.png" alt="" />
                        <span>196</span>
                        <a-divider direction="vertical" />
                        <img src="../../assets/image/dow.png" alt="" />
                        <span>2248 Downloads</span>
                      </div>
                      <div class="btns">
                        <a href="">
                          <img src="../../assets/image/text.png" alt="" /> Abstract</a
                        >
                        <a href="">
                          <img src="../../assets/image/file-pdf.png" alt="" /> PDF</a
                        >
                      </div>
                    </div>
                  </a-col>
                  <a-col :span="12">
                    <div class="item">
                      <p class="label">Review Article</p>
                      <p class="title">
                        Photocatalytic efficiency of green synthesized ZnO nanoparticles
                        for the degradation of methyl orange dye: A review
                      </p>
                      <p class="desc">
                        Naveen Thakur, Nikesh Thakur, Kuldeep Kumar, Vedpriya Arya,
                        Ashwani Kumar, Susheel Kalia
                      </p>
                      <div class="datas">
                        <img src="../../assets/image/calendar.png" alt="" />
                        <span>20-11-2022</span>
                        <a-divider direction="vertical" />
                        <img src="../../assets/image/eye.png" alt="" />
                        <span>196</span>
                        <a-divider direction="vertical" />
                        <img src="../../assets/image/dow.png" alt="" />
                        <span>2248 Downloads</span>
                      </div>
                      <div class="btns">
                        <a href="">
                          <img src="../../assets/image/text.png" alt="" /> Abstract</a
                        >
                        <a href="">
                          <img src="../../assets/image/file-pdf.png" alt="" /> PDF</a
                        >
                      </div>
                    </div>
                  </a-col>
                  <a-col :span="12">
                    <div class="item">
                      <p class="label">Review Article</p>
                      <p class="title">
                        Photocatalytic efficiency of green synthesized ZnO nanoparticles
                        for the degradation of methyl orange dye: A review
                      </p>
                      <p class="desc">
                        Naveen Thakur, Nikesh Thakur, Kuldeep Kumar, Vedpriya Arya,
                        Ashwani Kumar, Susheel Kalia
                      </p>
                      <div class="datas">
                        <img src="../../assets/image/calendar.png" alt="" />
                        <span>20-11-2022</span>
                        <a-divider direction="vertical" />
                        <img src="../../assets/image/eye.png" alt="" />
                        <span>196</span>
                        <a-divider direction="vertical" />
                        <img src="../../assets/image/dow.png" alt="" />
                        <span>2248 Downloads</span>
                      </div>
                      <div class="btns">
                        <a href="">
                          <img src="../../assets/image/text.png" alt="" /> Abstract</a
                        >
                        <a href="">
                          <img src="../../assets/image/file-pdf.png" alt="" /> PDF</a
                        >
                      </div>
                    </div>
                  </a-col>
                  <a-col :span="12">
                    <div class="item">
                      <p class="label">Review Article</p>
                      <p class="title">
                        Photocatalytic efficiency of green synthesized ZnO nanoparticles
                        for the degradation of methyl orange dye: A review
                      </p>
                      <p class="desc">
                        Naveen Thakur, Nikesh Thakur, Kuldeep Kumar, Vedpriya Arya,
                        Ashwani Kumar, Susheel Kalia
                      </p>
                      <div class="datas">
                        <img src="../../assets/image/calendar.png" alt="" />
                        <span>20-11-2022</span>
                        <a-divider direction="vertical" />
                        <img src="../../assets/image/eye.png" alt="" />
                        <span>196</span>
                        <a-divider direction="vertical" />
                        <img src="../../assets/image/dow.png" alt="" />
                        <span>2248 Downloads</span>
                      </div>
                      <div class="btns">
                        <a href="">
                          <img src="../../assets/image/text.png" alt="" /> Abstract</a
                        >
                        <a href="">
                          <img src="../../assets/image/file-pdf.png" alt="" /> PDF</a
                        >
                      </div>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </div>

            <div class="issues">
              <p class="title">
                <a href="">Recemt <span>Issues</span></a>
              </p>
              <div class="items">
                <a-row :gutter="24">
                  <a-col :span="24">
                    <div class="item">
                      <a-row :gutter="50">
                        <a-col :span="6">
                          <img src="../../assets/image/journals-list-img.png" alt="" />
                        </a-col>
                        <a-col :span="18">
                          <p class="title">Our <span> Title </span></p>
                          <p class="desc">
                            EurAsia Academic Publishing Group (EAPG) is an independent
                            International publisher that <br />
                            publishes online, <br />
                            peer-reviewed journals covering a wide range of academic
                            disciplines. EAPG follows strict publication ethics <br />
                            published by COPE. All the articles published under the EAPG
                            provide copyrights to the author providing<br />
                          </p>

                          <div class="datas">
                            <a-space :size="10">
                              <div>
                                IF <br />
                                <span>1.3</span>
                              </div>
                              <a-divider direction="vertical" />
                              <div>
                                Cite <br />
                                <span>3.7</span>
                              </div>
                              <a-divider direction="vertical" />
                              <div>
                                Current Issue <br /><span> v.69(2), Jun 2024</span>
                              </div>
                              <a-divider direction="vertical" />
                              <div>Upcoming Articles <br /><span> 5</span></div>
                              <a-divider direction="vertical" />
                              <div>
                                Total Articles <br />
                                <span> 252</span>
                              </div>
                            </a-space>
                          </div>
                        </a-col>
                      </a-row>
                    </div>
                  </a-col>
                </a-row>
              </div>
            </div>
          </div>
        </a-col>
        <a-col flex="360px" class="grid-demo">
          <div class="right-content" style="">
            <div class="btns">
              <a href="">Start Submission</a>
              <a href="">Become a Reviewer</a>
            </div>
            <div class="details">
              <div class="author">
                <p class="title">Editor <span> in Chief</span></p>
                <img src="../../assets/image/author.jpg" alt="" />
                <p class="desc" v-html="j_info.editorialTeam"></p>
              </div>
              <div class="forms">
                <img src="../../assets/image/map.png" alt="" />
                <p class="title">
                  Posts from <br />
                  <span>@EurasiaAcademic</span>
                </p>
                <p class="desc">
                  Nothing to see here - yet
                  <br />
                  When they post, their posts will show up here.
                </p>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>
<style lang="less" scoped>
.page-info {
  font-family: "Poppins", sans-serif;
  width: 1240px;
  margin: auto;
  padding: 80px 0;

  .left-content {
    p.title {
      font-size: 40px;
      font-weight: 600;
      line-height: 30px;
      color: #1f3c8a;
      line-height: 60px;
    }

    div.desc {
      margin-top: 16px;
      font-size: 14px;
      font-weight: 400;
      line-height: 25px;

      span {
        font-weight: 600;
      }
    }

    .cover {
      margin-top: 12px;
      width: 100%;
    }

    .articles {
      margin-top: 30px;

      .articles-btn {
        border-bottom: 1px solid #c1c1c1;
        padding-bottom: 14px;

        a {
          display: inline-block;
          width: 152px;
          height: 45px;
          border-radius: 4px;
          text-align: center;
          line-height: 45px;
          background: #e8705a;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }
      }

      .items {
        margin-top: 14px;

        .item {
          padding: 20px;
          border: 1px solid #ececece5;
          background: #fff;
          border-radius: 4px;
          margin-bottom: 20px;

          .label {
            font-size: 14px;
            line-height: 21px;
            color: #1f3c8a;
          }

          .title {
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            margin: 10px 0;
          }

          .desc {
            font-size: 12px;
            line-height: 18px;
            counter-reset: #666666;
          }

          .datas {
            margin-top: 14px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            img {
              width: 24px;
            }

            span {
              font-size: 12px;
              line-height: 24px;
              color: #666666;
              font-weight: 500;
            }
          }

          .btns {
            margin-top: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
              width: 174px;
              height: 45px;
              font-size: 14px;
              display: inline-flex;
              justify-content: center;
              align-items: center;
              background: #e8705a;
              color: #fff;
              border-radius: 4px;

              img {
                width: 16px;
                margin-right: 8px;
              }

              &:last-child {
                background: #fff;
                border: 1px solid #e8705a;
                color: #e8705a;
              }
            }
          }
        }
      }
    }

    .issues {
      .title {
        font-size: 40px;
        font-weight: 600;
        line-height: 30px;
        color: #1f3c8a;
        line-height: 60px;
        margin-bottom: 24px;

        span {
          color: #e8705a;
        }
      }

      .items {
        img {
          cursor: pointer;
          width: 100%;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .item {
          margin-top: 20px;
          margin-bottom: 48px;
          padding-bottom: 15px;
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);

          img {
            width: 100%;
            border-radius: 20px;
            cursor: pointer;
          }

          .title {
            font-size: 25px;
            border-bottom: 1px solid #344054;
          }

          .desc {
            font-size: 14px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            padding-bottom: 14px;
          }

          .datas {
            margin-top: 14px;
            display: flex;
            justify-content: flex-end;
            align-items: center;
            padding-left: 5%;

            img {
              width: 24px;
              margin-bottom: 0;
            }

            div {
              text-align: center;
            }

            span {
              font-size: 13px;
              line-height: 24px;
              color: #666666;
              font-weight: 500;
            }
          }
        }
      }
    }
  }

  .right-content {
    width: 360px;

    .btns {
      display: flex;
      justify-content: space-between;
      align-items: center;

      a {
        display: inline-block;
        width: 174px;
        height: 45px;
        border-radius: 4px;
        text-align: center;
        line-height: 45px;
        background: #e8705a;
        color: #fff;
        font-size: 14px;
        font-weight: 600;
      }

      a:last-child {
        background: #fff;
        border: 1px solid #e8705a;
        color: #e8705a;
      }
    }

    .details {
      margin-top: 24px;
      border: 1px solid #ececece5;
      padding: 20px;

      .author {
        padding: 20px;

        .title {
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
          color: #1f3c8a;

          span {
            color: #e8705a;
          }
        }

        img {
          width: 100%;
          margin: 8px 0;
        }

        .desc {
          font-size: 16px;
          line-height: 24.99px;

          span {
            color: #1f3c8a;
          }
        }
      }

      .forms {
        margin-top: 24px;

        img {
          width: 100%;
          border-radius: 20px 20px 0 0;
        }

        .title {
          font-size: 20px;
          font-weight: 600;
          line-height: 30px;
          color: #1f3c8a;
          padding: 20px;

          span {
            color: #e8705a;
          }
        }

        .desc {
          padding: 24px;
          font-size: 7.5px;
          color: #101828;
          line-height: 8.79px;
          padding-top: 0;
        }
      }
    }
  }
}
</style>
