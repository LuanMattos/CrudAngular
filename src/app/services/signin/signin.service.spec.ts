import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {FormLoginComponent} from '../../shared/form-login/form-login.component';
import {TokenService} from '../token/token.service';
import {SigninService} from './signin.service';

describe('FormSignIn', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;
  let service: SigninService;
  let token: TokenService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        FormLoginComponent
      ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        SigninService,
        TokenService,
        FormBuilder
      ]
    });
  });
  beforeEach(() => {
    service = TestBed.inject( SigninService );
    token = TestBed.inject( TokenService );
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Instanced', (() => {
    expect(FormLoginComponent).toBeTruthy();
  }));

  it('Auth Ok',  () => {
    const data = {user: 'admin', password: 'admin'};
    service.login(data);
    expect(token.hasToken()).toBeTrue();
  });

  it('No Auth', () => {
    const data = {user: 'admind', password: 'admind'};
    service.login(data);
    expect(token.hasToken()).toBeFalse();
  });
  it('User no Atuh', () => {
    token.removeToken();
    expect(token.hasToken()).toBeFalse();
  });
  it('Auth already exists', () => {
    token.setToken('test');
    expect(token.hasToken()).toBeTrue();
  });
});
