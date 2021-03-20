import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';


import {TokenService} from '../../services/token/token.service';
import {SigninService} from '../../services/signin/signin.service';
import {MenuMobileComponent} from './menu-mobile.component';


describe('FormLoginComponent', () => {
  let component: MenuMobileComponent;
  let fixture: ComponentFixture<MenuMobileComponent>;
  let service: SigninService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuMobileComponent ],
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
    fixture = TestBed.createComponent(MenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Auth Ok',  () => {
    const data = {user: 'admin', password: 'admin'};
    expect(component.hasRoute()).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
