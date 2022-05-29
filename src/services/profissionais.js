import axios from '@/utils/axios';

const URL = '/profissionais';

export default {
  getProfessionals: () => {
    return axios.get(`${URL}`);
  },
};
