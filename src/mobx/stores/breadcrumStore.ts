import { action, makeAutoObservable, observable } from 'mobx';

export type breadcrumbType = {
  name: string;
  href: string;
};
export interface StoreType {
  breadcrumbStore: typeof breadcrumb;
}
const initialState = [
  {
    name: 'Home',
    href: '/'
  }
];
export class BreadcrumbStore {
  breadcrumbList: breadcrumbType[] = initialState;
  constructor() {
    makeAutoObservable(this, {
      breadcrumbList: observable,
      updateBreadcrumb: action
    });
  }
  updateBreadcrumb(breadcrumb: breadcrumbType) {
    this.breadcrumbList.push(breadcrumb);
  }
  resetBreadcrumb() {
    this.breadcrumbList = initialState;
  }
}
export const breadcrumb = new BreadcrumbStore();
