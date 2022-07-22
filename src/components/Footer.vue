<template>
  <footer id="footer">
    <div class="container-fluid">
      <div class="top-footer p-5">
        <div class="footer-text d-flex flex-column align-items-center">
          <h3>LET'S TALK ABOUT YOUR PROJECT</h3>
          <h4>COLLAB? CONNECT? CREATE?</h4>
          <router-link to="/contact"
            ><button type="button" class="btn">
              GET IN TOUCH<i class="fa-solid fa-arrow-right-long"></i></button
          ></router-link>
        </div>
      </div>

      <div class="bottom-footer">
        <div class="d-flex justify-content-evenly pb-2">
          <div class="copyright">
            <small class="footerp">© 2022 Copyright</small>
          </div>

          <div class="design">
            <small class="footerp">Designed by Carla Amy Lawrence</small>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style>
/* hr {
  width: 100%;
  font-size: 3;
  color: black;
} */
#footer {
  background-color: var(--background-color);
  /* display: flex;
  flex-direction: column;
  align-content: flex-end; */
  /* position: sticky; */
  bottom: 0;
  height: 100px;
  width: 100%;
  z-index: 10;
}

.footerp {
  color: var(--color3);
}
</style>
