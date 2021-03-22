import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {SigninService} from '../auth/signin/signin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  messageValid: string;
  constructor(
    private formBuilder: FormBuilder,
    private signInService: SigninService,
    private router: Router
  ) {}
  loginForm: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  login(): any{
    const form = this.loginForm.getRawValue();
    if (this.loginForm.valid){
      if ( this.signInService.login(form) ){
        this.router.navigate(['dashboard']);
      }else{
        this.messageValid = 'Usuário/Senha incorreto(s)';
      }
    }else{
      this.messageValid = 'Usuário e Senha são obrigatórios';
    }
  }
}
