import {inject, TestBed} from '@angular/core/testing';
import {AuthRequiredGuard} from './auth-required.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DragoesService} from '../dragoes.service';
import {SigninService} from '../signin/signin.service';


describe('AuthRequiredGuard', () => {
  let signInService: SigninService;
  let service: AuthRequiredGuard;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],
    providers: [
      DragoesService,
      AuthRequiredGuard,
      SigninService
    ]
  }));
  beforeEach(() => {
    service = TestBed.inject( AuthRequiredGuard );
    signInService = TestBed.inject( SigninService );
  });
  it('AuthGuard Validate', inject([AuthRequiredGuard], () => {
    signInService.logout();
    expect(service.canActivate()).toBeFalse();
  }));

});
