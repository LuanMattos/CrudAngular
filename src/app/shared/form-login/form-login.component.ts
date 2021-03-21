import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SigninService} from '../../services/signin/signin.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit{
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
