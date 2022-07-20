<template>
  <div class="card col-lg-5 col-md-3 flex-shrink-1 m-4">
    <img v-bind:src="project.img" />
    <div
      class="title d-flex justify-content-center align-items-center text-light"
    >
      <p>{{ project.title }}</p>
    </div>
    <div class="project-details">
      <p>{{ project.objective }}</p>
      <p>{{ project.desc }}</p>
      <div class="project-links d-flex justify-center-around">
        <a :href="project.live" target="_blank"
          ><button class="btn btn-outline-light">LIVE</button></a
        >
        <a :href="project.github" target="_blank"
          ><button class="btn btn-outline-light">GITHUB</button></a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["project"],
};
</script>
<style scoped>
.card {
  background-color: white;
  border-radius: 0%;
  box-shadow: grey 0px -2px 9px;
}
.project-details {
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.84) 0%,
    rgba(0, 0, 0, 0.4) 100%
  );
  border-radius: 0%;
  color: white;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px;
  opacity: 0;
  transition: all 0.3s linear;
  display: flex;
  flex-direction: column;
  justify-content: center;
  backdrop-filter: blur(7px);
}

.card:hover .project-details {
  opacity: 1;
}
p {
  color: white;
  text-shadow: rgb(49, 49, 49) 5px 4px 10px;
}
</style>
