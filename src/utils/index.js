import qs from 'qs';

export const query = qs.parse(window.location.search.slice(1));

const HPW = window.innerHeight / window.innerWidth;
export const getHeightPercent = (tagHPW = 1200 / 750) => {
  const percent = HPW / tagHPW;
  return percent > 1 ? 1 : percent;
};
