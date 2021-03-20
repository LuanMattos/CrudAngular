import {inject, TestBed} from '@angular/core/testing';
import {AuthRequiredGuard} from './auth-required.guard';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {DragoesService} from '../dragoes.service';


describe('AuthRequiredGuard', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      HttpClientTestingModule
    ],
    providers: [
      DragoesService,
      AuthRequiredGuard
    ]
  }));

  it('Validação authGuard', inject([AuthRequiredGuard], (service: AuthRequiredGuard) => {
    expect(service.canActivate()).toBeFalse();
  }));

});
