<script setup>
import Header from "./components/headr.vue"
import Footer from "./components/footer.vue"
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
