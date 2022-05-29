import axios from '@/utils/axios';

const URL = '/especialidades';

export default {
  getSpecialties: () => {
    return axios.get(`${URL}`);
  },
};
