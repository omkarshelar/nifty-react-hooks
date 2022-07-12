import { renderHook, act } from '@testing-library/react-hooks';
import { useBoolean } from '../src';
import { test, expect } from 'vitest';

test('should useBoolean', () => {
  const { result } = renderHook(() => useBoolean());
  expect(result.current.state).toBe(false);
  act(() => result.current.setTrue());
  expect(result.current.state).toBe(true);
  act(() => result.current.setFalse());
  expect(result.current.state).toBe(false);
  act(() => result.current.setFalse());
  expect(result.current.state).toBe(false);
});

test('should useBoolean with initial', () => {
  const { result } = renderHook(() => useBoolean(true));
  expect(result.current.state).toBe(true);
  act(() => result.current.setFalse());
  expect(result.current.state).toBe(false);
});
