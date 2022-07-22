<template>
  <div
    class="test-card col-lg-5 col-md-4 px-3 d-flex flex-column justify-content-between mt-2"
  >
    <div class="testimonial image d-flex justify-content-center pb-2">
      <img v-bind:src="test.img" class="rounded-circle pt-2" />
    </div>

    <p>{{ test.message }}</p>
    <h5 class="fst-italic d-flex justify-content-end">
      {{ test.person }}
    </h5>
  </div>
</template>
<script>
export default {
  props: ["test"],
};
</script>
<style>
p {
  color: var(--color1);
  text-align: justify;
  text-justify: inter-word;
}
h5 {
  color: #75dab4;
  font-family: "Fjalla One", sans-serif;
}
.test-card {
  background-color: var(--background-color);
  max-width: 300px;
  min-height: 300px;
  padding: 1rem;
}
.test-card:hover {
  box-shadow: #75dab4 2px 1px 8px;
  transform: translateY(0) scale(1.1);
  transition: all ease-in 0.3s;
}
.test-card img:hover {
  transform: translateY(0) scale(1.2);
  transition: all ease-in 0.3s;
}

.rounded-circle {
  width: 150px;
}
</style>
