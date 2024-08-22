<script setup>
import Header from "@comments/headr.vue"
import Footer from "@comments/footer.vue"
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
