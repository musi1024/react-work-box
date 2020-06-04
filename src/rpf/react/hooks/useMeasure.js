import ResizeObserver from 'resize-observer-polyfill';
import React from 'react';

/**
 * @return {[import('react').Ref<any>,{
 *  top:number;
 *  left:number;
 *  right:number;
 *  bottom:number;
 *  width:number;
 *  height:number;
 * }]}
 * @example
 * const [ref,{top,left,bottom,right,width,height}]=useMeasure()
 * <div ref={ref} >top:{top}</div>
 */

const useMeasure = () => {
  const [rect, set] = React.useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0
  });
  const observer = React.useMemo(
    () =>
      //https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver
      new ResizeObserver(entries => {
        const entry = entries[0];
        if (entry) {
          if (entry.target.getBoundingClientRect) {
            const {
              width,
              top,
              left,
              bottom,
              right,
              height
            } = entry.target.getBoundingClientRect();
            set({ width, top, left, bottom, right, height });
          } else {
            set(entry.contentRect);
          }
        }
      }),
    []
  );
  const ref = React.useCallback(
    node => {
      observer.disconnect();
      if (node !== null) {
        observer.observe(node);
      }
    },
    [observer]
  );

  return [ref, rect];
};

export default useMeasure;
