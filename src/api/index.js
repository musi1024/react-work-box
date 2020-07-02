import axios from 'axios';
import mock from './mock';
import query from 'utils/query';

const ins = axios.create({
  baseURL: ``,
  withCredentials: true,
  timeout: 10 * 1000
});

if (query.mock) {
  mock(ins);
}

function handleApiRes(promise) {
  return promise
    .then(res => [null, res])
    .catch(err => {
      if (err.type === 'api') {
        window.Sentry.withScope(function (scope) {
          const { url, baseURL, method } = err.config;
          const path = url.replace(baseURL, '');
          scope.setFingerprint([method, path]);
          window.Sentry.captureException(err);
        });
      } else {
        window.Sentry.captureException(err);
      }
      return [err, null];
    });
}

const api = {
  postTest({ id, name }) {
    return handleApiRes(ins.post('/test', { id, name }));
  },
  getTest() {
    return handleApiRes(ins.get('/test'));
  }
};

ins.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
ins.interceptors.response.use(
  function (response) {
    const { data, config } = response;
    if (data && !data.ok) {
      const { url, baseURL } = config;
      let msg = `${config.method}:${url.replace(baseURL, '')}=>${data.message}`;
      if (config.params) {
        msg += 'params:' + JSON.stringify(config.params);
      }
      if (config.data) {
        msg += 'data:' + JSON.stringify(config.data);
      }
      const err = Error(msg);
      err.type = 'api';
      err.config = config;
      return Promise.reject(err);
    }
    return Promise.resolve(response.data.result);
  },
  function (error) {
    if (error.code === 'ECONNABORTED') {
      console.log('请求超时');
    }
    return Promise.reject(error);
  }
);

export default api;
