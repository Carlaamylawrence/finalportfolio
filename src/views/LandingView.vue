<template>
  <section id="landing" class="row d-flex">
    <div class="container p-5 d-flex flex-column align-items-center">
      <div class="title m-5">
        <h1 class="landingMain">CARLA AMY LAWRENCE</h1>
        <h3 class="landingSub">NEED A WEB DEVELOPER?</h3>
        <div class="wrapper text-center d-flex">
          <a
            href="https://www.linkedin.com/in/carla-amy-lawrence-807277225/"
            target="_blank"
            class="icon facebook"
          >
            <div class="tooltip">Linkedin</div>
            <span><i class="fab fa-linkedin"></i></span>
          </a>
          <a
            href="https://twitter.com/carlaxlawrence?lang=en"
            target="_blank"
            class="icon twitter"
          >
            <div class="tooltip">Twitter</div>
            <span><i class="fab fa-twitter"></i></span>
          </a>
          <a
            href="https://instagram.com/carlaamylawrence?igshid=YmMyMTA2M2Y="
            target="_blank"
            class="icon instagram"
          >
            <div class="tooltip">Instagram</div>
            <span><i class="fab fa-instagram"></i></span>
          </a>
          <a
            href="https://github.com/Carlaamylawrence"
            target="_blank"
            class="icon github"
          >
            <div class="tooltip">Github</div>
            <span><i class="fab fa-github"></i></span>
          </a>
        </div>
      </div>
    </div>
    <!-- <div class="profile col-lg-5 d-flex">
      <img src="../assets" />
    </div> -->
  </section>
</template>

<script>
// @ is an alias to /src

export default {};
</script>
<style scoped>
/* #landing {
  background: url(https://i.postimg.cc/jqXtLjcc/bgremoved.png);
  background-position: center;
  background-size: cover;
  object-fit: fill;
  background-color: black;
  max-height: 100vh;
} */
#landing {
  background: linear-gradient(0deg, rgb(54 54 54 / 38%), rgb(20 20 20 / 43%)),
    url(../assets/land4.jpg);
  background-position: center;
  background-size: cover;
}
.landingMain{
  font-size: 11vw;
  text-shadow: #525151 1px 2px 8px ;
}
.landingSub{
  text-shadow: #525151 1px 2px 8px ;
}
.container {
  height: 90vh;
}

.profile {
  bottom: 0;
  right: 0;
  margin-top: 2rem;
}

.wrapper .icon {
  position: relative;
  background-color: #aeaeae21;
  border-radius: 50%;
  margin: 10px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  display: inline-block;
  align-items: center;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  color: rgb(84, 84, 84);
  text-decoration: none;
}
.wrapper .tooltip {
  position: absolute;
  top: 0;
  line-height: 1.5;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}
.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #3b5999;
  color: #ffffff;
}
.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background-color: #46c1f6;
  color: #ffffff;
}
.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #e1306c;
  color: #ffffff;
}
.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background-color: #333333;
  color: #ffffff;
}

@media only screen and (max-width: 600px) {
  .wrapper .icon {
    margin: 0;
  }
}
</style>
