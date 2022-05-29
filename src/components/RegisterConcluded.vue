<template>
  <div class="content col-12 col-md-10 col-lg-10 py-5 px-4 px-sm-4 shadow">
    <div class="col-12">
      <h1 class="title text-center">Cadastro concluído!</h1>
    </div>
    <div class="col">
      <div class="col-12">
        <img
          src="@/assets/img/desktop-pagina-4.png"
          class="img-fluid mx-auto d-block"
        />
      </div>
      <div class="col-12 d-flex justify-content-center">
        <p class="finish-text text-center col-12 col-md-6 mb-5">
          Em breve um de nossos representantes entrará em contato pelo telefone
          informado no cadastro!
        </p>
      </div>
      <div class="col-12">
        <router-link
          to="/"
          class="col-12 d-flex justify-content-center text-decoration-none"
        >
          <NextButton
            buttonText="RETORNAR AO SITE"
            bgColor="--primary-0"
            textColor="white"
            class="col-12 col-md-4"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import NextButton from '@/components/NextButton.vue';
import { mapGetters } from 'vuex';
export default {
  components: { NextButton },
  computed: {
    ...mapGetters('registerInfo', ['getName']),
  },
  methods: {
    redirectIfEmptyFields() {
      if (this.getName == '') {
        this.$router.push('/');
      }
    },
  },
  beforeMount() {
    this.redirectIfEmptyFields();
  },
};
</script>

<style scoped>
.content {
  background: var(--secondary-1);
  height: auto;
  border-radius: 25px;
}

.finish-text {
  font-family: var(--open-sans);
  font-weight: bold;
  font-size: 20px;
}

.title {
  font-family: var(--comfortaa);
  font-weight: bold;
  color: var(--primary-0);
}
@media (max-width: 576px) {
  .content {
    border-radius: 25px 25px 0px 0px;
  }
}
</style>
