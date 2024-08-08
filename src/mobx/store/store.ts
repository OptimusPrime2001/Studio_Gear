import { observable } from 'mobx';
import { account, AuthStore } from './authStore';
import breadcrumb, { BreadcrumbStore } from './breadcrumStore';

export interface StoreContextType {
  breadcrumb: BreadcrumbStore;
  account: AuthStore;
}
export const store = observable({ breadcrumb, account });
