import axios from 'axios';

const ins = axios.create({
  baseURL: '',
  timeout: 10 * 1000,
  withCredentials: true
});

const testApi = {
  getClear({ open_id }) {
    return ins.get('/back/user/clear', {
      params: {
        open_id
      }
    });
  },
  setScore({ user_id, score }) {
    return ins.get('/back/set_score', {
      params: {
        user_id,
        score
      }
    });
  }
};

ins.interceptors.response.use(
  function (config) {
    return config;
  },
  function (err) {
    console.log(err);
  }
);

export default testApi;
