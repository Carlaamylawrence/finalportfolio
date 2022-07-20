<template>
  <div class="resume-card">
    <p>{{ resume.header }}</p>
    <p>{{ resume.title }}</p>
    <p>{{ resume.role }}</p>
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
