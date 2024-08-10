'use client';
import React, { ReactNode } from 'react';
import { MobxContext, rootStore } from '@mobx/store';

export const MobxProvider = ({ children }: { children: ReactNode }) => {
  return <MobxContext.Provider value={rootStore}>{children}</MobxContext.Provider>;
};
