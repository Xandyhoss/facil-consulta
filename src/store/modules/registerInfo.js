const SET_NAME = 'SET_NAME';
const SET_CPF = 'SET_CPF';
const SET_TEL = 'SET_TEL';
const SET_STATE = 'SET_STATE';
const SET_CITY = 'SET_CITY';
const SET_SPECIALTY = 'SET_SPECIALTY';
const SET_PRICE = 'SET_PRICE';
const SET_PAYMENT = 'SET_PAYMENT';
const SET_INSTALLMENTS = 'SET_INSTALLMENTS';

export {
  SET_NAME,
  SET_CPF,
  SET_TEL,
  SET_STATE,
  SET_CITY,
  SET_SPECIALTY,
  SET_PRICE,
  SET_PAYMENT,
  SET_INSTALLMENTS,
};

const state = {
  name: '',
  cpf: '',
  tel: '',
  state: { nome: '', id: '' },
  city: { nome: '', id: '' },
  specialty: { nome: '', id: '' },
  price: '',
  paymentMethods: [],
  installments: '',
};

const mutations = {
  [SET_NAME]: (state, name) => {
    state.name = name;
  },
  [SET_CPF]: (state, cpf) => {
    state.cpf = cpf;
  },
  [SET_TEL]: (state, tel) => {
    state.tel = tel;
  },
  [SET_STATE]: (state, estado) => {
    state.state = estado;
  },
  [SET_CITY]: (state, city) => {
    state.city = city;
  },
  [SET_SPECIALTY]: (state, specialty) => {
    state.specialty = specialty;
  },
  [SET_PRICE]: (state, price) => {
    state.price = price;
  },
  [SET_PAYMENT]: (state, payment) => {
    state.paymentMethods = payment;
  },
  [SET_INSTALLMENTS]: (state, installments) => {
    state.installments = installments;
  },
};

const getters = {
  getName: (state) => state.name,
  getCpf: (state) => state.cpf,
  getTel: (state) => state.tel,
  getState: (state) => state.state,
  getCity: (state) => state.city,
  getSpecialty: (state) => state.specialty,
  getPrice: (state) => state.price,
  getPaymentMethods: (state) => state.paymentMethods,
  getInstallments: (state) => state.installments,
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
