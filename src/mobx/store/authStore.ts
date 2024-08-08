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
  account: accountType = initialState;
  constructor() {
    makeAutoObservable(this, {
      account: observable,
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
