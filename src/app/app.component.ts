import {Component, OnInit} from '@angular/core';
import { DragoesService } from './services/Dragoes.service';
import { Dragoes } from './models/Dragoes';
import { NgForm } from '@angular/forms';
import {User} from "./models/user";
import { Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Dragões';
  dragao = {} as Dragoes;
  dragoes:Dragoes[];
  submitted = false;
  loading = false;
  user = {} as User;
  router: string;
  id:string


  constructor(
    public _router: Router
  ) {
    this.router = _router.url;
  }

  ngOnInit() {
    this.isLoggedSimple()
  }

  startToLogin(){
    this._router.navigate(['login']);
  }
  hasRoute() {
    return this._router.url == '/';
  }
  isLoggedSimple(){
    var auth = localStorage.getItem("auth")
    if(auth !== 'a') {
      this._router.navigate(['login']);
    }
  }

}
