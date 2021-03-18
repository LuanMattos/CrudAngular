import {inject, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {AuthRequiredGuard} from './auth-required.guard';

describe('AuthRequiredGuard', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],
    providers: [
      AuthRequiredGuard
    ]
  }));

  it('Create', () => {
    const interceptor: AuthRequiredGuard = TestBed.inject(AuthRequiredGuard);
    expect(interceptor).toBeTruthy();
  });
  it('Validate AuthGuard', inject([AuthRequiredGuard], (service: AuthRequiredGuard) => {
    expect(service.canActivate()).toBeFalse();
  }));
});
