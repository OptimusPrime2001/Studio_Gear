'use client';
import React, { createContext, useContext } from 'react';
import { store, StoreContextType } from './store/store';

const StoreContext = createContext<StoreContextType | null>(null);

export const StoreProvider = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};
export const useStore = () => useContext(StoreContext);
