import { action, makeAutoObservable, observable } from 'mobx';

const initialState = {
  accountName: '',
  avatar: ''
};
export type accountType = {
  accountName: string;
  avatar: string;
};

export class AuthStore {
  @observable account: accountType = initialState;
  constructor() {
    makeAutoObservable(this, {
      updateAccount: action
    });
  }
  updateAccount(account: accountType) {
    this.account = account;
  }
  resetBreadcrumb() {
    this.account = initialState;
  }
}
export const account = new AuthStore();
