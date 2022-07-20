<template>
  <div class="resume-card">
    <h5>{{ resume.header }}</h5>
    <h4>{{ resume.title }}</h4>
    <p class="fst-italic">{{ resume.role }}</p>
    <p>{{ resume.description }}</p>
    <p>{{ resume.heading }}</p>
    <p>{{ resume.list }}</p>
  </div>
</template>
<script>
export default {
  props: ["resume"],
};
</script>
<style></style>
