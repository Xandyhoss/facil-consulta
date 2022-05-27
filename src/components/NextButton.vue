<template>
  <button class="button" :style="style">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: ['buttonText', 'bgColor'],
  computed: {
    style() {
      return { 'background-color': 'var(' + this.bgColor + ')' };
    },
  },
};
</script>

<style scoped>
.button {
  color: white;
  font-family: var(--comfortaa);
  border: none;
  height: 40px;
  border-radius: 15px;
}
</style>
