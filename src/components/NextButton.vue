<template>
  <button class="button">{{ buttonText }}</button>
</template>

<script>
export default {
  props: ['buttonText'],
};
</script>

<style scoped>
.button {
  background-color: var(--primary-0);
  color: white;
  font-family: var(--comfortaa);
  border: none;
  height: 40px;
  border-radius: 15px;
}

.button:active {
  background-color: var(--primary-0);
  color: white;
  font-family: var(--comfortaa);
  border: none;
  height: 40px;
  border-radius: 15px;
}
</style>
