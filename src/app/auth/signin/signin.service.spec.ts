import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {SigninService} from './signin.service';
import {LoginComponent} from '../../login/login.component';
import {TokenService} from '../../token/token.service';

describe('FormSignIn', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: SigninService;
  let token: TokenService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      declarations: [
        LoginComponent
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
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Instanced', (() => {
    expect(LoginComponent).toBeTruthy();
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
