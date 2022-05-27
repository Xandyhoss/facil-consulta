<template>
  <div
    class="container-fluid background p-0 py-sm-4 col-12 align-items-end align-items-sm-center"
  >
    <topBackButton linkTo="/about-attendance" />
    <RegisterReview />
  </div>
</template>

<script>
import RegisterReview from '@/components/RegisterReview.vue';
import topBackButton from '@/components/topBackButton.vue';
export default {
  components: { RegisterReview, topBackButton },
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
