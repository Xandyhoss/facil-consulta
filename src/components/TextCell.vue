<template>
  <div class="text-group mb-4">
    <p class="param-title mb-2">{{ paramTitle }}</p>
    <p class="param">{{ param }}</p>
  </div>
</template>

<script>
export default {
  props: ['paramTitle', 'param'],
};
</script>

<style scoped>
.param-title {
  font-family: var(--open-sans);
  font-weight: bold;
}

.param {
  font-family: var(--open-sans);
}
</style>
