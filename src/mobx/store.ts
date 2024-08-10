'use client';
import { createContext, useContext } from 'react';
import { observable } from 'mobx';
import { account } from './stores/authStore';
import { breadcrumb } from './stores/breadcrumStore';

export const rootStore = observable({ breadcrumb, account });
export const MobxContext = createContext<typeof rootStore | null>(null);
export const useStore = () => {
  const store = useContext(MobxContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
};
