import { useState, useCallback } from 'react';
import { NoOp } from '../types';

const useToggle = (initialState: boolean = false) => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle: NoOp = useCallback(() => setState(!state), [state, setState]);

  return { state, toggle };
};

export default useToggle;
