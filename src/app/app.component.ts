import {Component, OnInit} from '@angular/core';
import { Dragoes } from './models/Dragoes';
import {User} from './models/user';
import { Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dragões';
  dragoes: Dragoes[];
  loading = false;
  user = {} as User;
  router: string;
  id: string;



  constructor(
    public route: Router
  ) {
    // this.router = route.url;
  }

  ngOnInit(): void {
    // this.isLoggedSimple();
  }

  startToLogin(): void{
    this.route.navigate(['login']);
  }
  hasRoute(): boolean {
    return this.route.url === '/';
  }
  isLoggedSimple(): void{
    const auth = localStorage.getItem('auth');
    if (auth !== 'a') {
      this.route.navigate(['login']);
    }
  }

}
