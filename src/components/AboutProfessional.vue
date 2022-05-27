<template>
  <div
    class="content col-md-10 col-lg-10 pt-5 px-4 px-sm-0 ps-sm-5 pb-5 shadow"
  >
    <div class="row col-12">
      <h1 class="title mb-4">Sobre o profissional</h1>
      <h4 class="subtitle">Dados do profissional</h4>
    </div>
    <div class="row mt-4">
      <div class="col">
        <div class="form-group mb-4">
          <label for="name" class="label mb-2">Nome completo*</label>
          <input
            type="text"
            name="name"
            class="form-control field col-12"
            placeholder="Digite o nome completo"
          />
        </div>
        <div class="form-group mb-4 col-8">
          <label for="cpf" class="label mb-2">CPF*</label>
          <input
            type="text"
            name="cpf"
            class="form-control field"
            placeholder="Digite um CPF"
            v-mask="'###.###.###-##'"
          />
        </div>
        <div class="form-group mb-4 col-8">
          <label for="cel" class="label mb-2">Número de celular*</label>
          <input
            type="text"
            name="cel"
            class="form-control field"
            placeholder="(00) 0 0000-0000"
            v-mask="['(##) ####-####', '(##) #####-####']"
          />
        </div>
        <div class="row mb-5">
          <div class="col">
            <div class="form-group col-12">
              <label for="state" class="label mb-2">Estado*</label>
              <select class="form-select field" name="state">
                <option selected class="option">Selecione</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group col-12">
              <label for="city" class="label mb-2">Cidade*</label>
              <select class="form-select field" name="city">
                <option selected class="option">Selecione</option>
              </select>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-9">
            <div class="progress">
              <div class="progress-bar w-50" role="progressbar"></div>
            </div>
          </div>
          <div class="col progress-text">1 de 2</div>
        </div>
        <router-link to="/about-attendance">
          <NextButton
            buttonText="PRÓXIMO"
            textColor="white"
            bgColor="--primary-0"
            class="col-12"
          />
        </router-link>
      </div>
      <div class="col-6 d-none d-sm-block">
        <img
          src="@/assets/img/desktop-pagina-1.png"
          class="img-fluid mx-auto d-block"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NextButton from '@/components/NextButton.vue';
import { mask } from 'vue-the-mask';
export default {
  components: { NextButton },
  directives: { mask },
  setup() {
    return {};
  },
};
</script>

<style scoped>
.content {
  background: var(--secondary-1);
  height: auto;
  border-radius: 25px;
}

.title {
  font-family: var(--comfortaa);
  font-weight: bold;
  color: var(--primary-0);
}

.subtitle {
  color: var(--secondary-8);
}

.label {
  font-family: var(--open-sans);
  color: var(--secondary-8);
}

.field {
  border-color: var(--primary-0);
}

.field:focus {
  box-shadow: none;
  border-color: var(--primary-0);
}

.field::placeholder {
  padding-left: 10px;
  font-family: var(--open-sans);
}

.progress-bar {
  background-color: var(--primary-0);
}

.progress-text {
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
