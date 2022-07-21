<template>
  <footer
    id="footer"
    class="text-dark d-flex flex-column justify-content-center align-content-center"
  >
    <div
      class="container-fluid p-2 d-flex flex-column justify-content-center align-content-center"
    >
      <div class="footer-text pb-3">
        <h3>LET'S TALK ABOUT YOUR PROJECT</h3>
        <h4>COLLAB? CONNECT? CREATE?</h4>

        <a href="#contact"
          ><button type="button" class="btn btn-outline-dark">
            GET IN TOUCH
          </button></a
        >
      </div>

      <div class="bottom-footer">
        <div class="d-flex justify-content-evenly">
          <div class="copyright">
            <small>© 2022 Copyright</small>
          </div>

          <div class="design">
            <small>Designed by Carla Amy Lawrence</small>
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
  position: sticky;
  bottom: 0;
  height: 100px;
  width: 100%;
  z-index: 10;
}
</style>
