import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SigninService} from '../../auth/signin/signin.service';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {
  menu = false;
  constructor(
    private signInService: SigninService,
    private router: Router
  ) {
    this.hasRoute();
  }
  toogleMenu(): void{
    this.menu = !this.menu;
  }
  hasRoute(): boolean {
    return (this.router.url !== '/' && this.router.url !== '/home');
  }
  logout(): void{
    this.menu = false;
    this.signInService.logout();
    this.router.navigate(['']);
  }
}
