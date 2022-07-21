<template>
  <Navbar />
  <router-view :key="$route.fullPath" />
  <Footer />
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
.main-title {
  font-size: 8rem;
  z-index: 2;
  color: var(--color3);
  text-shadow: 0px 0px 2px black;
}
.section-title {
  position: relative;
  width: fit-content;
  color: var(--color2);
  /* mix-blend-mode: difference; */
}

.subtitle {
  position: absolute;
  white-space: nowrap;
  text-shadow: 0px 0px 2px rgb(150, 149, 149);
  top: 50%;
  left: 70%;
  margin: 0;
  z-index: 3;
  transform: translatey(-50%);
  /*   background: white; */
  padding: 2px;
}

@media only screen and (max-width: 600px) {
}
</style>
