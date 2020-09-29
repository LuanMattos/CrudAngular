import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {User} from "../models/user";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Login';
  submitted = false;
  loading = false;
  user = {} as User;
  modal = true;
  constructor(
    private router: Router,
  ) {}

  ngOnInit(): void {
  }
  logar(form: NgForm){
    var data = form.value;

    if(data.login === 'admin' && data.password === 'admin'){
      this.router.navigate(['listar']);
      this.modal = false;
    }else{
      alert('Usuário/Senha incorretos')
      this.cleanForm(form);
    }
  }
  cleanForm(form: NgForm) {
    form.resetForm();
  }

}
