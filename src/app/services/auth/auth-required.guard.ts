import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {SigninService} from '../signin/signin.service';

@Injectable({providedIn: 'root'})
export class AuthRequiredGuard implements CanActivate{
  constructor(
    private router: Router,
    private sigInInService: SigninService
  ) {}

  canActivate(): any{
    if (!this.sigInInService.isLogged()){
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
