<template>
  <Navbar />
  <Footer></Footer>
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
:root {
  --background-color: white;
  --color1: white;
  --color2: #75dab4;
  --color3: black;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

body {
  font-family: sans-serif;
  overflow-x: hidden;
  background-color: var(--background-color) !important;
  min-height: 100vh;
}

text {
  color: var(--color1);
  text-shadow: rgb(49, 49, 49) 5px 4px 10px;
}
h1,
h2,
h3,
h4,
h5 {
  color: var(--color2);
  font-family: "Fjalla One", sans-serif;
}
</style>
