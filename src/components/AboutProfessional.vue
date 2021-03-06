<template>
  <div
    class="content col-md-10 col-lg-10 pt-5 px-4 px-sm-0 ps-sm-5 pb-5 shadow"
  >
    <LoadingOverlay v-if="loading" />
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
            v-bind:class="{ error: nameError }"
            placeholder="Digite o nome completo"
            v-model="name"
          />
          <small
            v-for="error of v$.name.$errors"
            :key="error.$uid"
            class="error-text"
          >
            {{ error.$message }}
          </small>
        </div>

        <div class="form-group mb-4 col-8">
          <label for="cpf" class="label mb-2">CPF*</label>
          <input
            type="text"
            name="cpf"
            class="form-control field"
            v-bind:class="{ error: cpfError }"
            placeholder="Digite um CPF"
            v-mask="'###.###.###-##'"
            v-model="cpf"
          />
          <small
            v-for="error of v$.cpf.$errors"
            :key="error.$uid"
            class="error-text"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="form-group mb-4 col-8">
          <label for="cel" class="label mb-2">Número de celular*</label>
          <input
            type="text"
            name="cel"
            class="form-control field"
            v-bind:class="{ error: telError }"
            placeholder="(00) 0 0000-0000"
            v-mask="['(##) ####-####', '(##) #####-####']"
            v-model="tel"
          />
          <small
            v-for="error of v$.tel.$errors"
            :key="error.$uid"
            class="error-text"
          >
            {{ error.$message }}
          </small>
        </div>
        <div class="row mb-5">
          <div class="col">
            <div class="form-group col-12">
              <label for="state" class="label mb-2">Estado*</label>
              <select
                class="form-select field"
                v-bind:class="{ error: stateError }"
                name="state"
                v-model="state"
                @change="handleCities()"
              >
                <option disabled selected value="" class="option">
                  Selecione
                </option>
                <option
                  class="option"
                  v-for="state of this.statesList"
                  :key="state.id"
                  :value="state"
                >
                  {{ state.nome }}
                </option>
              </select>
              <small
                v-for="error of v$.state.$errors"
                :key="error.$uid"
                class="error-text"
              >
                {{ error.$message }}
              </small>
            </div>
          </div>
          <div class="col">
            <div class="form-group col-12">
              <label for="city" class="label mb-2">Cidade*</label>
              <select
                class="form-select field"
                v-bind:class="{ error: cityError }"
                name="city"
                v-model="city"
              >
                <option disabled value="" class="option">Selecione</option>
                <option
                  class="option"
                  v-for="city of citiesList"
                  :key="city.id"
                  :value="city"
                >
                  {{ city.nome }}
                </option>
              </select>
              <small
                v-for="error of v$.city.$errors"
                :key="error.$uid"
                class="error-text"
              >
                {{ error.$message }}
              </small>
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

        <NextButton
          buttonText="PRÓXIMO"
          textColor="white"
          bgColor="--primary-0"
          class="col-12"
          @click="nextPage()"
        />
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
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import NextButton from '@/components/NextButton.vue';
import { mask } from 'vue-the-mask';
import profissionaisService from '@/services/profissionais';
import statesService from '@/services/states';
import citiesService from '@/services/cities';

import {
  SET_NAME,
  SET_CPF,
  SET_TEL,
  SET_STATE,
  SET_CITY,
} from '@/store/modules/registerInfo';

import useVuelidate from '@vuelidate/core';
import { required, minLength, maxLength, helpers } from '@vuelidate/validators';
import { mapGetters, mapMutations } from 'vuex';

export default {
  components: { NextButton, LoadingOverlay },
  directives: { mask },

  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      name: '',
      cpf: '',
      tel: '',
      state: '',
      city: '',
      nameError: false,
      cpfError: false,
      telError: false,
      stateError: false,
      cityError: false,
      loading: false,
      citiesList: [],
      statesList: [],
      professionalsList: [],
    };
  },
  validations() {
    return {
      name: {
        required: helpers.withMessage(
          'Este campo não pode estar em branco',
          required
        ),
        $lazy: true,
        minLengthValue: helpers.withMessage(
          'Este campo deve possuir entre 3 e 48 caracteres',
          minLength(3)
        ),
        maxLengthValue: helpers.withMessage(
          'Este campo deve possuir no máximo 48 caracteres',
          maxLength(48)
        ),
      },
      cpf: {
        required: helpers.withMessage(
          'Este campo não pode estar em branco',
          required
        ),
        minLengthValue: helpers.withMessage(
          'Número de CPF incompleto',
          minLength(14)
        ),
        verifyExists: helpers.withMessage('CPF já cadastrado', this.verifyCPF),
      },
      tel: {
        required: helpers.withMessage(
          'Este campo não pode estar em branco',
          required
        ),
        minLengthValue: helpers.withMessage(
          'Número de telefone/celular incompleto',
          minLength(14)
        ),
      },
      state: {
        required: helpers.withMessage('Selecione um Estado', required),
      },
      city: {
        required: helpers.withMessage('Selecione uma Cidade', required),
      },
    };
  },
  computed: {
    ...mapGetters('registerInfo', [
      'getName',
      'getCpf',
      'getTel',
      'getState',
      'getCity',
    ]),
  },
  methods: {
    ...mapMutations('registerInfo', {
      setName: SET_NAME,
      setCpf: SET_CPF,
      setTel: SET_TEL,
      setState: SET_STATE,
      setCity: SET_CITY,
    }),
    verifyCPF() {
      if (this.v$.cpf.$model.length == 14) {
        const cpfsArray = [];
        this.professionalsList.map((item) => cpfsArray.push(item.cpf));
        return !cpfsArray.includes(
          this.v$.cpf.$model.replace(/[\s.-]*/gim, '')
        );
      } else {
        return true;
      }
    },
    async nextPage() {
      const result = await this.v$.$validate();
      if (!result) {
        return this.verifyFields();
      }
      try {
        this.loading = true;
        this.submitInfo();
        this.$router.push('/about-attendance');
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async verifyFields() {
      this.v$.name.$errors[0]
        ? (this.nameError = true)
        : (this.nameError = false);

      this.v$.cpf.$errors[0] ? (this.cpfError = true) : (this.cpfError = false);

      this.v$.tel.$errors[0] ? (this.telError = true) : (this.telError = false);

      this.v$.state.$errors[0]
        ? (this.stateError = true)
        : (this.stateError = false);

      this.v$.city.$errors[0]
        ? (this.cityError = true)
        : (this.cityError = false);
    },
    async getProfessionals() {
      try {
        this.loading = true;
        const { data } = await profissionaisService.getProfessionals();
        this.professionalsList = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async getStates() {
      try {
        this.loading = true;
        const { data } = await statesService.getStates();
        this.statesList = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    async getCities(estadoId) {
      try {
        this.loading = true;
        const { data } = await citiesService.getCities(estadoId);
        this.citiesList = data;
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
    handleCities() {
      this.getCities(this.state.id);
    },
    submitInfo() {
      this.setName(this.name);
      this.setCpf(this.cpf);
      this.setTel(this.tel);
      this.setState(this.state);
      this.setCity(this.city);
    },
    verifyCompletion() {
      if (this.getName != '') {
        this.name = this.getName;
        this.cpf = this.getCpf;
        this.tel = this.getTel;
        this.state = this.getState;
        this.getCities(this.getState.id);
        this.city = this.getCity;
      }
    },
  },
  watch: {
    name() {
      this.verifyFields();
    },
    cpf() {
      this.verifyFields();
    },
    tel() {
      this.verifyFields();
    },
    state() {
      this.verifyFields();
    },
    city() {
      this.verifyFields();
    },
  },
  beforeMount() {
    this.getProfessionals();
    this.getStates();
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
