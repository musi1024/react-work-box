import axios from 'axios';
// import Cookies from 'js-cookie';
import mock from './mock';
import { query } from 'utils';
import ErrorModal from 'components/ErrorModal';

// const TOKEN_KEY = '';
// const token = Cookies.get(TOKEN_KEY);

const BASE_URL = '';
const ins = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
  timeout: 10 * 1000
  // headers: { Authorization: token }
});

if (query.mock) {
  mock(ins);
}

export function handleApiRes(promise, ignore = []) {
  return promise
    .then(res => [null, res.data.result])
    .catch(err => {
      if (err.type === 'api') {
        if (ignore && ![-1004, ...ignore].includes(err.data.error_code)) {
          ErrorModal.open();
          window.Sentry.withScope(function (scope) {
            const { url, baseURL, method } = err.config;
            const path = url.replace(baseURL, '');
            scope.setFingerprint([method, path]);
            window.Sentry.captureException(err);
          });
        }
      } else {
        ErrorModal.open('timeout');
        window.Sentry.captureException(err);
      }
      return [err, null];
    });
}

// const setToken = token => {
//   ins.defaults.headers['Authorization'] = `Bearer ${token}`;
//   Cookies.set(TOKEN_KEY, `Bearer ${token}`, { expires: 7 });
// };

const api = {};

ins.interceptors.request.use(
  config => config,
  err => Promise.reject(err)
);

ins.interceptors.response.use(
  async response => {
    const { data, config } = response;
    if (data.error_code === -1004) {
    }
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
      const err = Error(msg);
      err.type = 'api';
      err.config = config;
      err.data = data;
      return Promise.reject(err);
    }
    return response;
  },
  err => Promise.reject(err)
);

export default api;
