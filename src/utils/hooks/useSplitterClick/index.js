import { useEffect } from 'react';

const useSplitterClick = (clickHandler, deps) => {
  useEffect(_ => {
    const spliter = document.querySelector('.main-splitter .layout-splitter');
    
    if (spliter) {
      spliter.addEventListener('click', clickHandler);

      return _ => spliter.removeEventListener('click', clickHandler);
    }
  });
};

export default useSplitterClick;
