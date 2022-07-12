import { useState, useCallback } from 'react';
import { NoOp } from '../types/index';

const useBoolean = (initialState: boolean = false) => {
  const [state, setState] = useState<boolean>(initialState);
  const setTrue: NoOp = useCallback(() => {
    setState(true);
  }, [setState]);
  const setFalse: NoOp = useCallback(() => {
    setState(false);
  }, [setState]);

  return { state, setTrue, setFalse };
};

export default useBoolean;
