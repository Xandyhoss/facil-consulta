<template>
  <div
    class="content col-md-10 col-lg-10 pt-5 px-4 px-sm-0 ps-sm-5 pb-5 shadow"
  >
    <LoadingOverlay v-if="loading" />
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
          <select
            class="form-select field"
            :class="{ error: specialtyError }"
            name="specialty"
            value=""
            v-model="specialty"
          >
            <option disabled value="" class="option">Selecione</option>
            <option
              class="option"
              v-for="specialty of specialtiesList"
              :key="specialty.id"
              :value="specialty"
            >
              {{ specialty.nome }}
            </option>
          </select>
          <small
            v-for="error of v$.specialty.$errors"
            :key="error.$uid"
            class="error-text"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="form-group mb-4 col-8">
          <label for="price" class="label mb-2"
            >Informe o preço da consulta*</label
          >
          <div class="input-group">
            <span
              class="input-group-text field-left"
              :class="{ error: priceError, 'bg-danger': priceError }"
              >R$</span
            >
            <money3
              name="price"
              type="text"
              class="form-control field"
              :class="{ error: priceError }"
              placeholder="Valor"
              v-money3="config"
              v-model="price"
            />
          </div>
          <small
            v-for="error of v$.floatPrice.$errors"
            :key="error.$uid"
            class="error-text"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="form-group mb-4">
          <label for="payment" class="label mb-4"
            >Formas de pagamento da consulta*</label
          >
          <div
            class="form-check shadow-sm mb-3 py-3"
            :class="{ error: paymentError }"
          >
            <div class="row">
              <div class="col-2">
                <input
                  class="form-check-input mx-3"
                  type="checkbox"
                  name="pix"
                  value="pix"
                  v-model="pixChecked"
                  @input="handlePaymentMethod('pix')"
                />
              </div>
              <div class="col-10">
                <label class="form-check-label mx-auto" for="pix"> Pix </label>
              </div>
            </div>
          </div>
          <div
            class="form-check shadow-sm mb-3 py-3"
            :class="{ error: paymentError }"
          >
            <div class="row">
              <div class="col-2">
                <input
                  class="form-check-input mx-3"
                  type="checkbox"
                  name="dinheiro"
                  value="dinheiro"
                  v-model="moneyChecked"
                  @input="handlePaymentMethod('dinheiro')"
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
            class="form-check shadow-sm mb-2 py-3"
            :class="{ 'card-checked': cardChecked, error: paymentError }"
          >
            <div class="row">
              <div class="col-2">
                <input
                  class="form-check-input mx-3"
                  type="checkbox"
                  name="cartao"
                  value="cartao"
                  v-model="cardChecked"
                  @input="handlePaymentMethod('cartao')"
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
                      checked
                      type="radio"
                      name="installments"
                      value="1"
                      v-model="cardInstallments"
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
                      v-model="cardInstallments"
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
                      v-model="cardInstallments"
                    />
                    <label class="radio-label ms-2" for="installments">
                      3x, sem juros
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <small
            v-for="error of v$.paymentMethods.$errors"
            :key="error.$uid"
            class="error-text mt-5"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="row mb-3 mt-5">
          <div class="col-9">
            <div class="progress">
              <div class="progress-bar w-100" role="progressbar"></div>
            </div>
          </div>
          <div class="col progress-text">2 de 2</div>
        </div>
        <NextButton
          buttonText="PRÓXIMO"
          textColor="white"
          bgColor="--primary-0"
          class="col-12"
          @click="nextPage()"
        />
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
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import { Money3Component } from 'v-money3';
import { mask } from 'vue-the-mask';
import { Money3Directive } from 'v-money3';
import specialtiesService from '@/services/specialties';

import {
  SET_SPECIALTY,
  SET_PRICE,
  SET_PAYMENT,
  SET_INSTALLMENTS,
} from '@/store/modules/registerInfo';

import useVuelidate from '@vuelidate/core';
import { required, helpers, between } from '@vuelidate/validators';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: { NextButton, LoadingOverlay, money3: Money3Component },
  directives: { mask, money3: Money3Directive },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      specialty: '',
      price: '',
      paymentMethods: [],
      cardInstallments: '1',
      cardChecked: false,
      pixChecked: false,
      moneyChecked: false,
      specialtyError: false,
      priceError: false,
      paymentError: false,
      config: {
        prefix: '',
        suffix: '',
        thousands: '.',
        decimal: ',',
        precision: 2,
        allowBlank: false,
      },
      specialtiesList: [],
      loading: false,
    };
  },
  validations() {
    return {
      specialty: {
        required: helpers.withMessage('Selecione uma especialidade', required),
      },
      floatPrice: {
        required: helpers.withMessage(
          'Insira um valor para a consulta',
          required
        ),
        betweenValue: helpers.withMessage(
          'O valor precisa estar entre R$30,00 e R$ 350,00',
          between(30, 350)
        ),
      },
      paymentMethods: {
        required: helpers.withMessage(
          'Selecione no mínimo um método de pagamento',
          required
        ),
      },
    };
  },
  methods: {
    ...mapMutations('registerInfo', {
      setSpecialty: SET_SPECIALTY,
      setPrice: SET_PRICE,
      setPaymentMethods: SET_PAYMENT,
      setInstallments: SET_INSTALLMENTS,
    }),
    async nextPage() {
      const result = await this.v$.$validate();
      if (!result) {
        this.verifyFields();
        return;
      }
      try {
        this.submitInfo();
        this.$router.push('/register-review');
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async verifyFields() {
      this.v$.specialty.$errors[0]
        ? (this.specialtyError = true)
        : (this.specialtyError = false);

      this.v$.floatPrice.$errors[0]
        ? (this.priceError = true)
        : (this.priceError = false);

      this.v$.paymentMethods.$errors[0]
        ? (this.paymentError = true)
        : (this.paymentError = false);
    },
    handlePaymentMethod(method) {
      const indexOfMethod = this.paymentMethods.indexOf(method);
      if (indexOfMethod === -1) {
        this.paymentMethods.push(method);
      } else {
        this.paymentMethods.splice(indexOfMethod, 1);
      }
    },
    async getSpecialties() {
      try {
        this.loading = true;
        const { data } = await specialtiesService.getSpecialties();
        this.specialtiesList = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    redirectIfEmptyFields() {
      if (this.getName == '') {
        this.$router.push('/');
      }
    },
    verifyCompletion() {
      if (this.getSpecialty.nome != '') {
        this.specialty = this.getSpecialty;
        this.price = this.getPrice;
        this.paymentMethods = this.getPaymentMethods;
        this.cardInstallments = this.getInstallments;

        this.getPaymentMethods.includes('dinheiro')
          ? (this.moneyChecked = true)
          : (this.moneyChecked = false);
        this.getPaymentMethods.includes('pix')
          ? (this.pixChecked = true)
          : (this.pixChecked = false);
        this.getPaymentMethods.includes('cartao')
          ? (this.cardChecked = true)
          : (this.cardChecked = false);
      }
    },
    submitInfo() {
      this.setSpecialty(this.specialty);
      this.setPrice(this.price);
      this.setPaymentMethods(this.paymentMethods);
      this.setInstallments(this.cardInstallments);
    },
  },
  watch: {
    specialty() {
      this.verifyFields();
    },
    price() {
      this.verifyFields();
    },
    paymentMethods: {
      handler() {
        this.verifyFields();
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters('registerInfo', [
      'getName',
      'getSpecialty',
      'getPrice',
      'getPaymentMethods',
      'getInstallments',
    ]),
    floatPrice: function () {
      return parseFloat(this.price);
    },
  },
  beforeMount() {
    this.getSpecialties();
    this.redirectIfEmptyFields();
    this.verifyCompletion();
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

.card-checked {
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

.error-text {
  color: var(--danger);
}

.error {
  border: 1px solid var(--danger);
}

@media (max-width: 576px) {
  .content {
    border-radius: 25px 25px 0px 0px;
  }
}
</style>
