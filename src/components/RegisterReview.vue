<template>
  <div
    class="content col-12 col-md-10 col-lg-10 pt-5 px-4 px-sm-0 ps-sm-5 pb-5 shadow"
  >
    <div class="row col-12">
      <h1 class="title mb-4">Revisão do cadastro</h1>
    </div>
    <div class="row mt-4">
      <div class="col">
        <TextCell paramTitle="Nome completo" :param="nome" />
        <TextCell paramTitle="CPF" :param="cpf" />
        <TextCell paramTitle="Número de celular ou telefone" :param="tel" />
        <TextCell paramTitle="Estado/Cidade" :param="`${state} - ${city}`" />
        <TextCell paramTitle="Especialidade principal" :param="specialty" />
        <TextCell
          paramTitle="Preço da consulta"
          :param="`R$ ${price.replace(/\./g, ',')}`"
        />
        <TextCell
          paramTitle="Formas de pagamento da consulta"
          :param="paymentMethods.toString().replace(/\,/g, ' | ')"
        />
        <NextButton
          buttonText="CADASTRAR PROFISSIONAL"
          bgColor="--cta-0"
          textColor="black"
          class="col-12"
          @click="nextPage()"
        />
        <router-link to="/" class="text-decoration-none">
          <div class="edit-register col-12 mt-4">Editar cadastro</div>
        </router-link>
      </div>
      <div class="col-6 d-none d-sm-block d-flex">
        <img
          src="@/assets/img/desktop-pagina-3.png"
          class="img-fluid mx-auto d-block"
        />
      </div>
    </div>
  </div>
</template>

<script>
import NextButton from '@/components/NextButton.vue';
import TextCell from '@/components/TextCell.vue';
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
      nome: '',
      cpf: '',
      tel: '',
      state: {},
      city: {},
      specialty: {},
      price: '',
      paymentMethods: [],
      installments: '',
    };
  },
  components: { NextButton, TextCell },
  computed: {
    ...mapGetters('registerInfo', [
      'getName',
      'getCpf',
      'getTel',
      'getState',
      'getCity',
      'getSpecialty',
      'getPrice',
      'getPaymentMethods',
      'getInstallments',
    ]),
  },
  methods: {
    nextPage() {
      this.$router.push('/register-concluded');
    },
    redirectIfEmptyFields() {
      if (this.getName == '') {
        this.$router.push('/');
      }
    },
    fetchData() {
      this.nome = this.getName;
      this.cpf = this.getCpf;
      this.tel = this.getTel;
      this.state = this.getState.nome;
      this.city = this.getCity.nome;
      this.specialty = this.getSpecialty.nome;
      this.price = this.getPrice;
      this.installments = this.getInstallments;
      this.getPaymentMethods.map((method) => {
        method == 'dinheiro' ? this.paymentMethods.push('Dinheiro') : null;
        method == 'pix' ? this.paymentMethods.push('Pix') : null;
        method == 'cartao'
          ? this.paymentMethods.push(
              `Cartão de crédito - Parcelamento em ${this.installments}x sem juros`
            )
          : null;
      });
    },
  },
  beforeMount() {
    this.redirectIfEmptyFields();
    this.fetchData();
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

.edit-register {
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  font-family: var(--comfortaa);
  color: var(--primary-0);
}
@media (max-width: 576px) {
  .content {
    border-radius: 25px 25px 0px 0px;
  }
  .title {
    font-size: 27px;
  }
}
</style>
