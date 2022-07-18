<template>
  <Navbar />
  <!-- <Footer></Footer> -->
  <router-view :key="$route.fullPath" />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
export default {
  components: { Navbar, Footer },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
  overflow-x: hidden;
  background-color: black;
}
</style>
