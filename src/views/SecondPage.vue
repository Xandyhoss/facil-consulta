<template>
  <div
    class="container-fluid background p-0 py-sm-4 col-12 align-items-end align-items-sm-center"
  >
    <topBackButton linkTo="/" />
    <AboutAttendance />
  </div>
</template>

<script>
import AboutAttendance from '@/components/AboutAttendance.vue';
import topBackButton from '@/components/topBackButton.vue';
export default {
  components: { AboutAttendance, topBackButton },
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
