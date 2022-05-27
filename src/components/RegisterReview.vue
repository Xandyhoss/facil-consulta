<template>
  <div
    class="content col-12 col-md-10 col-lg-10 pt-5 px-4 px-sm-0 ps-sm-5 pb-5 shadow"
  >
    <div class="row col-12">
      <h1 class="title mb-4">Revisão do cadastro</h1>
    </div>
    <div class="row mt-4">
      <div class="col">
        <TextCell
          paramTitle="Nome completo"
          param="Alexandre Harrison Colares de Souza"
        />
        <TextCell paramTitle="CPF" param="700.758.716-02" />
        <TextCell
          paramTitle="Número de celular ou telefone"
          param="(73)99101-3527"
        />
        <TextCell
          paramTitle="Estado/Cidade"
          param="Teixeira de Freitas - Bahia"
        />
        <TextCell paramTitle="Especialidade principal" param="Cardiologia" />
        <TextCell paramTitle="Preço da consulta" param="R$ 200,00" />
        <TextCell
          paramTitle="Formas de pagamento da consulta"
          param="Dinheiro, Pix"
        />
        <router-link to="/register-concluded">
          <NextButton
            buttonText="CADASTRAR PROFISSIONAL"
            bgColor="--cta-0"
            textColor="black"
            class="col-12"
          />
        </router-link>
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
export default {
  components: { NextButton, TextCell },
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
