<script setup>
import { message } from "ant-design-vue";
import { user } from "../../api/list";
import { ref, reactive, toRefs, onBeforeMount, onMounted, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
// Your script here
/**
 * 路由对象
 */
const route = useRoute();
/**
 * 路由实例
 */
const router = useRouter();

// 基础变量区域（通用性）
const form = reactive({
  account: "",
  password: "",
});

// 基础函数区域（通用性）

const handleSubmit = (data) => {
  let params = {
    ...form,
  };
  user.login(params).then((res) => {
    if (res.data.code == 1) {
      let data = res.data.data;
      let userinfo = data.userinfo;
      let token = userinfo.token;
      localStorage.setItem("ojs_token", token);
      localStorage.setItem("ojs_userInfo", JSON.stringify(userinfo));
      router.push("/");
    } else {
      message.error(res.data.msg);
    }
  });
};
const toRegister = () => {
  router.push({
    path: "/register",
  });
};
onBeforeMount(() => {
  //console.log('2.组件挂载页面之前执行----onBeforeMount')
});
onMounted(() => {
  //console.log('3.-组件挂载到页面之后执行-------onMounted')
});
watchEffect(() => {});
// 使用toRefs解构
// let { } = { ...toRefs(data) }
defineExpose({});
</script>

<template>
  <div class="page-login">
    <div class="left_box">
      <div class="text">
        <p class="title">欢迎来到OJS期刊官网</p>
        <p class="desc">
          我们致力于为学术界提供一个开放、透明和高效的出版平台
          <br />
          <!-- 我们的期刊涵盖多个学科领域，旨在为全球科研人员、学者和专业人士提供一个开放获取的知识交流平台，促进科研成果的广泛传播和共享。我们相信，开放获取的学术出版模式能够有效推动知识的传播和应用，提升全球学术界的研究水平。 -->
        </p>
        <p class="desc"></p>
      </div>
      <img src="../../assets/image/mission.jpg" alt="" />
    </div>
    <div class="right_box">
      <p class="title">登录使用OJS</p>
      <a-form :model="form" @submit="handleSubmit" layout="vertical">
        <a-form-item field="name">
          <a-input v-model="form.account" placeholder="please enter your email" />
        </a-form-item>
        <a-form-item field="password">
          <a-input v-model="form.password" placeholder="please enter your password" />
        </a-form-item>
        <a-form-item>
          <div style="display: flex; justify-content: space-between; width: 100%">
            <a-button type="text" @click="toRegister">前往注册</a-button>
            <a-button html-type="submit" block type="primary">登录</a-button>
          </div>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<style lang="less" scoped>
.page-login {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fffaf9;
  z-index: 999;
  .left_box {
    width: 100%;
    height: 100%;
    position: relative;
    .text {
      position: absolute;
      left: 10%;
      top: 30%;
      width: 50%;
      .title {
        color: #e8705a;
        font-size: 22px;
        font-weight: 600;
      }
      .desc {
        color: #e8705a;
        font-size: 18px;
        margin-top: 50px;
        line-height: 50px;
        padding-left: 50px;
      }
    }
    & > img {
      //   width: ;
      width: 0%;
      height: 100%;
    }
  }
  .right_box {
    position: absolute;
    right: 10%;
    top: 30%;
    width: 400px;
    padding: 35px;
    background: #fff;
    border-radius: 15px;
    box-shadow: 0px 0px 1px #333;
    .title {
      text-align: center;
      font-weight: 600;
      margin-bottom: 20px;
      font-size: 21px;
    }
  }
}
/* Your styles here */
</style>
