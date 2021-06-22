function getUrlParam(sUrl, sKey) {
  var result = {};
  sUrl.replace(/\??(\w+)=(\w+)&?/g, function (a, k, v) {
    if (result[k] !== void 0) {
      var t = result[k];
      result[k] = [].concat(t, v);
    } else {
      result[k] = v;
    }
  });
  if (sKey === void 0) {
    return result;
  } else {
    return result[sKey] || '';
  }
}
console.log(
  getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&test1=4#hehe', 'aa')
);
