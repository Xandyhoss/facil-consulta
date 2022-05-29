import axios from '@/utils/axios';

const URL = '/cidades';

export default {
  getCities: (estadoId) => {
    return axios.get(`${URL}?estadoId=${estadoId}`);
  },
};
