<template>
  <div class="text-group mb-4">
    <p class="param-title mb-2">{{ title }}</p>
    <p class="param">{{ info }}</p>
  </div>
</template>

<script>
export default {
  props: ['paramTitle', 'param'],
  data() {
    return {
      title: this.paramTitle,
      info: this.param,
    };
  },
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
