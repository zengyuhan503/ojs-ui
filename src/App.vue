<script setup>
import { ref, onMounted } from 'vue'
import Header from "@comments/headr.vue"
import Footer from "@comments/footer.vue"
import { token } from './api/list.js'
async function getorResetToken() {
  let tokens = localStorage.getItem('token');
  if (tokens) {
    return false;
  }
  try {
    let params = {
      "username": "jack",
      "password": "123456"
    }
    let res = token.token(params)
    localStorage.setItem('tokne', "Bearer " + res.data.jwt_token)
  } catch (error) {

  }
}
onMounted(async () => {
  await getorResetToken()
})
</script>

<template>
  <div class="page-layout">
    <Header />
    <div class="page-content">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
<style>
body,
html {
  min-width: 1441px;
}
</style>
