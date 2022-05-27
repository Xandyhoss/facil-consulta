<template>
  <button class="button" :style="style">
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  props: ['buttonText', 'bgColor', 'textColor'],
  computed: {
    style() {
      return {
        'background-color': 'var(' + this.bgColor + ')',
        color: this.textColor,
      };
    },
  },
};
</script>

<style scoped>
.button {
  font-size: 16px;
  font-family: var(--comfortaa);
  border: none;
  height: 40px;
  border-radius: 15px;
}
</style>
