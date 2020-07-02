import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useStore = () => {
  const [test, setTest] = useState();

  return { test, setTest };
};

export default createContainer(useStore);
