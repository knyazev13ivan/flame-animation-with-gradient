import { useCallback, useLayoutEffect, useRef } from 'react'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

//из гитхаба. hook от Дэна Абрамова
export const useEvent = (handler: Event) => {
  const handlerRef: any = useRef(null);

  // In a real implementation, this would run before layout effects
  useLayoutEffect(() => {
    handlerRef.current = handler;
  });

  return useCallback((...args: any) => {
    // In a real implementation, this would throw if called during render
    const fn: any = handlerRef?.current;
    return fn(...args);
  }, []);
}