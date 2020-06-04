/*
 * @Author: Sexy
 * @Date: 2019-08-16 18:34:46
 * @LastEditors: Sexy
 * @LastEditTime: 2019-09-11 10:54:23
 * @Description: 防止重复点击hook
 */
import { useState } from 'react';
/**
 * @description: 返回一个数组[fun,running],fun为修饰后函数，running为运行中标志
 * @param {Function<Promise>} fun
 * @return {[Function,Boolean]}
 */
function usePreventRepeat(fun) {
  const [running, setRunning] = useState(false);
  return [
    async (...args) => {
      if (running) return;
      setRunning(true);
      await fun(...args);
      setRunning(false);
    },
    running
  ];
}

export default usePreventRepeat;
