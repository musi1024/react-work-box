const isArray = e => Array.isArray(e);

function isObject(e) {
  return Object.prototype.toString.call(e) === '[object Object]';
}

const stringify = value => JSON.stringify(value);

const parse = parseString => {
  try {
    return JSON.parse(parseString);
  } catch (error) {
    return null;
  }
};

const omit = (obj, uselessKeys) => {
  return Object.keys(obj).reduce((acc, key) => {
    return uselessKeys.includes(key) ? acc : { ...acc, [key]: obj[key] };
  }, {});
};

function Storage(type, storageKey = '_default_storage_key') {
  const storage = window[type];

  const get = key => {
    if (!isArray(key) && typeof key !== 'string') {
      throw Error('get only accpet array and string');
    }
    const all = getAll();
    if (isArray(key)) {
      let res = {};
      key.forEach(i => {
        res[i] = all?.[i];
      });
      return res;
    }
    return all?.[key];
  };

  const getAll = () => parse(storage.getItem(storageKey));

  const has = key => {
    if (typeof key !== 'string') {
      throw Error('has only accpet string');
    }
    const all = getAll();
    return Boolean(all?.[key]);
  };

  const hasSome = keys => {
    if (!isArray(keys)) {
      throw Error('hasSome only accpet array');
    }
    return keys.some(i => has(i));
  };

  const hasAll = keys => {
    if (!isArray(keys)) {
      throw Error('hasAll only accpet array');
    }
    return keys.every(i => has(i));
  };

  const setItem = value => storage.setItem(storageKey, stringify(value));

  const setOne = async (key, value) => {
    return new Promise(async (resolve, reject) => {
      const all = getAll();
      if (typeof value === 'function') {
        try {
          value = await value(all?.[key], all);
        } catch (error) {
          reject(error);
        }
      }
      resolve([key, value]);
    });
  };

  const set = async obj => {
    if (!isObject(obj)) {
      throw Error('set only accpet object');
    }
    const all = getAll();
    let fns = [];
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        fns.push(setOne(key, obj[key]));
      }
    }
    return Promise.all(fns).then(res => {
      let newObj = {};
      res.forEach(([key, value]) => {
        newObj = { ...newObj, [key]: value };
      });
      setItem({ ...all, ...newObj });
      return newObj;
    });
  };

  const remove = key => {
    if (!isArray(key) && typeof key !== 'string') {
      throw Error('remove only accpet array and string');
    }
    const all = getAll();
    if (!all) return;
    const newObj = omit(all, isArray(key) ? key : [key]);
    setItem(newObj);
    return newObj;
  };

  const clear = () => storage.removeItem(storageKey);

  return {
    get,
    getAll,
    has,
    hasSome,
    hasAll,
    set,
    remove,
    clear
  };
}

export default Storage;
