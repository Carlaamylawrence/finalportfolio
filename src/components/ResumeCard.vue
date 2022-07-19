<template>
  <div class="card">
    <p>{{ resume.title }}</p>
    <p>{{ resume.header }}</p>
    <p></p>
  </div>
</template>
<script>
export default {
  props: ["resume"],
};
</script>
<style></style>
