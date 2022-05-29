export const SET_PROFESSIONALS_LIST = 'SET_PROFESSIONALS_LIST';

const state = {
  professionalsList: [],
};

const mutations = {
  [SET_PROFESSIONALS_LIST]: (state, professionals) => {
    state.professionalsList = professionals;
  },
};

const getters = {
  getProfessionalsList: (state) => state.professionalsList,
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
