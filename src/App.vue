<template>
  <div class="animation-container">
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="animate__animated animate__fadeInRight"
        leave-active-class="animate__animated animate__fadeOutLeft"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
<style scoped>
.animate__animated.animate__fadeInRight,
.animate__animated.animate__fadeOutLeft {
  --animate-duration: 0.6s;
}
.animation-container {
  overflow-x: hidden;
  background-color: var(--cta-1);
}
</style>
