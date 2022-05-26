<template>
  <div
    class="container-fluid background p-0 overflow-y col-12 align-items-end align-items-sm-center"
  >
    <AboutProfessional />
  </div>
</template>

<script>
import AboutProfessional from '@/components/AboutProfessional.vue';
export default {
  components: { AboutProfessional },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.background {
  background-color: var(--cta-1);
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
