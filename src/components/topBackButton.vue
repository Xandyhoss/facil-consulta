<template>
  <router-link :to="linkTo" class="back-button my-3 my-sm-0 mb-sm-4">
    <i class="fas fa-angle-left w-100 h-100"></i>
  </router-link>
</template>

<script>
export default {
  props: ['linkTo'],
};
</script>

<style scoped>
.back-button {
  width: auto;
  height: 25px;
  justify-self: flex-start;
  left: 10%;
  position: relative;
  color: var(--primary-0);
}
</style>
