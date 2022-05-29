import axios from '@/utils/axios';

const URL = '/estados';

export default {
  getStates: () => {
    return axios.get(`${URL}`);
  },
};
