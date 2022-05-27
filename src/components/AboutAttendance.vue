<template>
  <div
    class="content col-md-10 col-lg-10 pt-5 px-4 px-sm-0 ps-sm-5 pb-5 shadow"
  >
    <div class="row col-12">
      <h1 class="title mb-4">Sobre o atendimento</h1>
      <h4 class="subtitle">Detalhes do atendimento</h4>
    </div>
    <div class="row mt-4">
      <div class="col">
        <div class="form-group mb-4">
          <label for="specialty" class="label mb-2"
            >Especialidade principal*</label
          >
          <select class="form-select field" name="specialty">
            <option selected class="option">Selecione</option>
          </select>
        </div>
        <div class="form-group mb-4 col-8">
          <label for="value" class="label mb-2"
            >Informe o preço da consulta*</label
          >
          <div class="input-group mb-3">
            <span class="input-group-text field-left">R$</span>
            <input
              name="value"
              type="text"
              class="form-control field"
              placeholder="Valor"
              v-mask="['##,##', '###,##']"
            />
          </div>
        </div>
        <div class="form-group mb-4">
          <label for="payment" class="label mb-4"
            >Formas de pagamento da consulta*</label
          >
          <div class="form-check shadow-sm mb-3 py-3">
            <div class="row">
              <div class="col-2">
                <input
                  class="form-check-input mx-3"
                  type="checkbox"
                  name="pix"
                  value="pix"
                />
              </div>
              <div class="col-10">
                <label class="form-check-label mx-auto" for="pix"> Pix </label>
              </div>
            </div>
          </div>
          <div class="form-check shadow-sm mb-3 py-3">
            <div class="row">
              <div class="col-2">
                <input
                  class="form-check-input mx-3"
                  type="checkbox"
                  name="dinheiro"
                  value="dinheiro"
                />
              </div>
              <div class="col-10">
                <label class="form-check-label mx-auto" for="dinheiro">
                  Em dinheiro
                </label>
              </div>
            </div>
          </div>
          <div
            class="form-check shadow-sm mb-5 py-3"
            v-bind:class="{ cardChecked: cardChecked }"
          >
            <div class="row">
              <div class="col-2">
                <input
                  class="form-check-input mx-3"
                  type="checkbox"
                  name="cartao"
                  value="cartao"
                  v-model="cardChecked"
                />
              </div>
              <div class="col-10">
                <label class="form-check-label" for="cartao">
                  Cartão de crédito
                </label>
                <div class="col-12 mt-4">
                  <label for="installments">Parcelamento em</label>
                  <div class="radio mt-3">
                    <input
                      class="form-radio"
                      type="radio"
                      name="installments"
                      value="1"
                    />
                    <label class="radio-label ms-2" for="installments">
                      1x, sem juros
                    </label>
                  </div>
                  <div class="radio mt-3">
                    <input
                      class="form-radio"
                      type="radio"
                      name="installments"
                      value="2"
                    />
                    <label class="radio-label ms-2" for="installments">
                      2x, sem juros
                    </label>
                  </div>
                  <div class="radio mt-3">
                    <input
                      class="form-radio"
                      type="radio"
                      name="installments"
                      value="3"
                    />
                    <label class="radio-label ms-2" for="installments">
                      3x, sem juros
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-9">
            <div class="progress">
              <div class="progress-bar w-100" role="progressbar"></div>
            </div>
          </div>
          <div class="col progress-text">2 de 2</div>
        </div>
        <router-link to="/">
          <NextButton
            buttonText="PRÓXIMO"
            bgColor="--primary-0"
            class="col-12"
          />
        </router-link>
      </div>
      <div class="col-6 d-none d-sm-block d-flex">
        <img
          src="@/assets/img/desktop-pagina-2.png"
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
  data() {
    return {
      cardChecked: false,
    };
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
.field-left {
  background-color: var(--primary-0);
  border: 1px solid var(--primary-0);
  color: var(--secondary-0);
  font-family: var(--open-sans);
}

.field:focus {
  box-shadow: none;
  border-color: var(--primary-0);
}

.field::placeholder {
  padding-left: 10px;
  font-family: var(--open-sans);
}

.form-check {
  max-height: 60px;
  background-color: #f3f3f3;
  box-shadow: 2px 4px 8px #d9d9d9 !important;
  border-radius: 5px;
  transition: 0.2s;
  overflow: hidden;
}

.cardChecked {
  transition: 0.5s;
  max-height: 500px;
}

.form-check-label {
  font-family: var(--open-sans);
  font-weight: bold;
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
