import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';

import { FormLoginComponent } from './form-login.component';
import {TokenService} from '../../services/token/token.service';
import {SigninService} from '../../services/signin/signin.service';


describe('FormLoginComponent', () => {
  let component: FormLoginComponent;
  let fixture: ComponentFixture<FormLoginComponent>;
  let token: TokenService;
  let service: SigninService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLoginComponent ],
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
    })
    .compileComponents();
  });
  beforeEach(() => {
    service = TestBed.inject( SigninService );
    token = TestBed.inject( TokenService );
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('Auth Ok',  () => {
    const data = {user: 'admin', password: 'admin'};
    expect(service.login(data)).toBeTrue();
  });

  it('Auth Error',  () => {
    const data = {user: 'adminError', password: 'adminError'};
    expect(service.login(data)).toBeFalse();
  });

  it('Error Input', () => {
    const spySubmit = spyOn(component, 'login').and.returnValue(null);
    component.login();
    expect(spySubmit).toHaveBeenCalled();
    const signIn = spyOn(service, 'login').and.returnValue(null);
    const data = {user: null, password: null};
    service.login(data);
    expect(signIn).toHaveBeenCalled();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
