import {Injectable} from '@angular/core';
import {TokenService} from '../../token/token.service';

@Injectable()
export class SigninService{
  constructor(
    private tokenService: TokenService
  ) {}

  login( data ): boolean{
    if (data.user === 'admin' && data.password === 'admin'){
      this.tokenService.setToken('logged');
      return true;
    }
    this.tokenService.removeToken();
    return false;
  }
  logout(): void{
    this.tokenService.removeToken();
  }
  isLogged(): boolean{
    return this.tokenService.hasToken();
  }
}
