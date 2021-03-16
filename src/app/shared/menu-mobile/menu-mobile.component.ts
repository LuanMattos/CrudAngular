import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html',
  styleUrls: ['./menu-mobile.component.scss']
})
export class MenuMobileComponent {
  menu = false;
  constructor() {}
  toogleMenu(): void{
    this.menu = !this.menu;
  }
}
