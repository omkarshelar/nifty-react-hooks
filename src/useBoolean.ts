import { useState, useCallback } from 'react';
import { noOp } from '../types/index';

const useBoolean = (initialState: boolean = false) => {
  const [state, setState] = useState<boolean>(initialState);
  const setTrue: noOp = useCallback(() => {
    setState(true);
  }, [setState]);
  const setFalse: noOp = useCallback(() => {
    setState(false);
  }, [setState]);

  return { state, setTrue, setFalse };
};

export default useBoolean;
