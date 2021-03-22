import {Injectable} from '@angular/core';

const KEY = 'authToken';

@Injectable({providedIn: 'root'})

export class TokenService{
  constructor() {}
  hasToken(): boolean{
      return !!this.getToken();
  }
  setToken(token): void{
    localStorage.setItem(KEY, token);
  }
  getToken(): any{
    return localStorage.getItem(KEY);
  }
  removeToken(): void{
    localStorage.removeItem(KEY);
  }
}
