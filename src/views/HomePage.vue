<template>
  <div
    class="container-fluid background p-0 py-sm-4 col-12 align-items-end align-items-sm-center"
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
  min-height: 100vh;
  max-height: auto;
  display: grid;
  align-items: center;
  justify-items: center;
}
</style>
