import { renderHook, act } from '@testing-library/react-hooks';
import { test, expect } from 'vitest';
import { useToggle } from '../src';

test('should useBoolean', () => {
  const { result } = renderHook(() => useToggle());
  expect(result.current.state).toBe(false);
  act(() => result.current.toggle());
  expect(result.current.state).toBe(true);
  act(() => result.current.toggle());
  expect(result.current.state).toBe(false);
  act(() => result.current.toggle());
  expect(result.current.state).toBe(true);
});

test('should useBoolean with initial', () => {
  const { result } = renderHook(() => useToggle(true));
  expect(result.current.state).toBe(true);
  act(() => result.current.toggle());
  expect(result.current.state).toBe(false);
});
