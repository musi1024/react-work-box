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
  return promise.then(res => [null, res]).catch(err => [err, null]);
}

const api = {
  postTest({ id, name }) {
    return handleApiRes(ins.post('/test', { id, name }));
  },
  getTest() {
    return ins.get('/test');
  },
  setToken(token) {
    ins.defaults.headers['x-token'] = token;
  }
};

ins.interceptors.request.use(
  config => config,
  error => Promise.reject(error)
);
ins.interceptors.response.use(
  response => {
    const { data, config } = response;
    if (data && !data.ok) {
      const { url, baseURL, method } = config;
      const path = url.replace(baseURL, '');
      let msg = `${method}:${path}=>${data.message}`;
      if (config.params) {
        msg += 'params:' + JSON.stringify(config.params);
      }
      if (config.data) {
        msg += 'data:' + JSON.stringify(config.data);
      }
      const error = Error(msg);
      window.Sentry.withScope(scope => {
        scope.setFingerprint([method, path]);
        window.Sentry.captureException(error);
      });
      return Promise.reject(error);
    }
    return Promise.resolve(response.data.result);
  },
  error => {
    if (error.code === 'ECONNABORTED') {
      console.log('请求超时');
    }
    window.Sentry.captureException(error);
    return Promise.reject(error);
  }
);

export default api;
