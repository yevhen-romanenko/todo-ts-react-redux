import { useEffect } from 'react';

export const useEffectOnce = (callback: React.EffectCallback) =>
  // eslint-disable-next-line
  useEffect(callback, []);
